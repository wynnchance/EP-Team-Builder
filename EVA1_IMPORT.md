# Android game-save import

On **My Roster**, choose **Import game save (.eva1)**. The browser reads the file locally, previews the account and match counts, and saves only after **Import roster** is pressed. Each alliance member uses their own browser. There is no shared alliance roster server in this app.

Copy `Android/data/com.smallgiantgames.empires/files/pts.eva1` using Android USB file transfer where accessible. Leave the original save in place. Android access depends on the device and OS; consult [Empuzzled's current import instructions](https://empuzzled.com/roster/) if the folder is inaccessible. This app does not retrieve an account directly from the game, and this importer does not support an iOS export.

Merge refreshes matching hero counts and keeps unrelated heroes. Replace selects only matched imported heroes. Matching costume selections consolidate into the base hero's copies so they do not create additional war copies. Battle logs and builder teams remain in place. Unknown hero IDs can be manually matched in the preview; otherwise they remain in the backup and do not enter suggestions. Importing the same file twice does not double the roster.

## Fields and persistence

`eva1-import.js` reads tagged UTF-8 maps/lists, little-endian integers and floats, header version `03 01`, the client version, an untagged header map, a four-byte payload length, and an untagged root map. It validates bounds, depth, value tags, duplicate map keys, owned IDs, payload length, and EOF. Nonempty `operations` are rejected because replay has not been verified. The verified sample is game client `v389.0`; unknown future layouts fail explicitly.

- `heroIdToOwnedData` keys are game definition IDs, joined through `eva1-hero-ids.js` to the existing name-based catalog.
- Detailed `a[]` records have an account-local owned `id` and stat string `s`: `l` level, `a` ascension, `s` skill, `b` limit break, `x` XP. Compact `b[]` records have no explicit progression and retain null values.
- Duplicate instances are stored in `epOwn[name].instances`; `n` is the number of owned instances, not the number of definitions. Numbered copies support more than four copies, with a browser guard of 1,000 per definition.
- Costume `c[]` progress is retained per instance. Costume inventory IDs contribute to account-level costume ownership count; untrained costumes are not invented as leveled copies. Raw `a/p/ucb` fields are retained without asserting their semantics.
- Talent counts use the population count of a valid 25-bit `f` mask; otherwise `t & 31`, if valid. Both values and conflicts are preserved. These are unlocked nodes, not spent emblem currency. Exact talent paths are not decoded.
- Suggestions rank each copy from its own level, ascension, limit break and talent count (see [ENGINE_NOTES.md](ENGINE_NOTES.md) for formulas, sources and what is estimated). Copies below max level are labelled estimates. Compact records with no progression are ranked at level-1 stats until card Power is entered. Costume records become alternate forms of the same copy. The costume bonus counts only when that costume is fully levelled. Per-copy form and path choices are kept in `copies[]` and follow the instance ID across re-imports. The calculator no longer overwrites imported LB or talent values.
- Exact card powers survive refresh only when associated with the same owned ID. Existing powers without IDs are cleared rather than applied to an arbitrary imported copy.
- `epEvaRoster` stores the roster snapshot: hero progression/raw hero records, costume item IDs, guest heroes, classic teams, troops, dragons, and favorite/pinned IDs. Account balances, shop, inbox, and legal/consent state are discarded.
- Saved game teams are offered in the Team Builder as editable starting points, resolved by owned instance and troop IDs. Troops are matched to verified mana data where the ID is recognised (the ID naming is not yet confirmed against a real save; unknown IDs can be labelled manually). Dragons are retained only. Guest/event heroes do not count as permanently owned copies.
- Export roster produces a version-4 JSON backup including ownership and the imported snapshot. Existing JSON backup formats are still accepted. No raw save or personal roster is bundled into this public repository.

The import writes local storage with rollback if storage runs out; the in-memory roster changes only after all writes succeed. Browser-local data is per device/browser and is not automatically available to the alliance leader. Members can use Export roster to share a backup deliberately.

## ID/name lookup provenance

The lookup includes 1,882 IDs matched to names already in this project's catalog. Only ID/name/base-ID facts are stored, not third-party skill text or artwork. Reference: [the public catalog used by Empuzzled](https://raw.githubusercontent.com/vabe44/31f5d518-epzl-cdn/main/assets/data_en.json), inspected 2026-10-02. Base heroes match normalized exact names; costumes match the parent name and costume title against this project's existing costume entries. `bard_dunnar_hart` maps explicitly to this catalog's spelling **Dunner Hart**, confirmed by Infernal Drumstorm and Fire/Bard/Barbarian metadata. Ambiguous/missing matches are not guessed.

Refresh this lookup by matching a current trusted catalog's `heroId`, `parentHeroId`, `name`, and `fancy_name` to this app's existing catalog. Keep unambiguous matches, review spelling exceptions, and retain the in-app manual-match fallback. The wiki harvest workflow does not overwrite the importer or lookup; it rebuilds the app from the updated template. New catalog heroes may require additional IDs.

Talent-count interpretation and binary tags were corroborated with [Empuzzled's public importer](https://empuzzled.com/_nuxt/XpWKSQJG.js). Its implementation is not bundled or executed by this app.

## Verification

Run `node tests/eva1-import.test.cjs` and `node tests/engine.test.cjs`. Tests cover binary reading, malformed/truncated files, unsupported operations, duplicate IDs, costume stats and inventory, compact records, unknown-ID matching, repeat imports, exact-power association by ID, snapshot scope, and JavaScript syntax for both HTML entry points.

Private save samples can be checked locally by passing a file path as the second argument. Personal save files, exports, account names, and account-specific results are not included in this repository.
