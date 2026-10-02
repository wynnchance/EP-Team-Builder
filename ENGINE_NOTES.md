# Recommendation engine: sources, verified facts and assumptions

`ep-engine.js` holds the recommendation engine. It runs entirely in the browser, makes no network requests and does not upload roster data. It is loaded by `app_template.html`, so rebuilding `index.html` from the template keeps it. Tests: `node tests/engine.test.cjs`, which uses synthetic fixtures only.

## Owned copies (units)

- Each owned copy is a **unit** keyed by its imported instance ID (`i:<id>`), or `m:<hero>#<n>` for manual copies. A unit is never placed in two war teams. Separate copies of the same hero are independent units.
- A base hero and its costumes are **forms of the same unit**. A team never holds the same copy twice (so never two forms of one copy), but separate copies of the same hero may share a team: a real saved game team holds two copies of one hero. Family bonuses still count unique heroes.
- Per-copy choices live in `epOwn[name].copies[i]` (`form`, `path`, and for manual copies `lb`, `em`, `cosMax`). Re-imports carry `copies` and card Powers (`ps`) over by instance ID, not by position. Old backups without `copies` behave as before.
- Card Power (`ps[i]`, or legacy `p`) is authoritative for that one copy. A legacy single `p` now applies to copy 1 only. Previously it applied to every copy.
- Saved builder teams also store `units` and `forms`, so loading a team returns the same owned copy. Older saved teams still load by name.

## Strength of each copy

| Item | Status | Source |
|---|---|---|
| Max level per ascension tier (1★ 10/20 … 5★ 50/60/70/80) | Verified | [Fandom: Hero Information](https://empiresandpuzzles.fandom.com/wiki/Hero_Information) |
| Level-1 stats as a fraction of max stats (5★ 0.4857, 4★ 0.4709, 3★ 0.5760) | Data-derived | Per-hero level-1 and max stats in [Empuzzled's public catalog](https://raw.githubusercontent.com/vabe44/31f5d518-epzl-cdn/main/assets/data_en.json). Constant within 0.1% across 966 five-star, 166 four-star and 147 three-star heroes. |
| Limit Break stats: 5★ ×1.0777 (LB1) and ×1.2331 (LB2) of max; 4★ 1.0866/1.2600; 3★ 1.1337/1.4010 | Data-derived | Same catalog's per-hero `lb1`/`lb2` stats. Consistent with [Old Cynic LB1](https://oldcynic.com/empires-and-puzzles-limit-breaker-explained) and [LB2](https://oldcynic.com/limit-break-2-alpha-aethers-empires-and-puzzles), whose pre-launch figures are relative to the previous tier. **Fixes a bug:** the app previously applied LB2 as ×1.1405 from base. |
| Limit Break adds 5 levels per tier (5★ 80 → 85 → 90) | Verified for 5★; assumed for 3★ and 4★ | Old Cynic, Fandom ("3.55", "4.75", "4.85"). |
| Power = rarity constant + ⌊0.35·Atk + 0.28·Def + 0.14·HP⌋ + 35 + talent term | Estimate | Existing app formula. It reproduces published max, LB1 and LB2 card powers (for example 1328/1421/1608). Its constant and talent terms are not officially documented. |
| Stats below max level | Estimate | Straight-line interpolation between level-1 and max stats by levels gained. No published per-level formula was found, and ascension steps are not modelled. These copies are labelled "~ estimate" and "below max level". |
| Talent node count = `t & 31` | Verified against a real save | `f` is present on only some records and its bits always form a run ending at bit 24, so its population count (previously used) undercounted maxed heroes. Stored rosters are recounted from `t`. |
| Talent stats from the unlocked-node count | Estimate | The path (attack, defense, balanced) is not decoded, so the copy's chosen path is used (balanced by default). The high bits of `t` may hold path choices; they are not interpreted. |
| Unlocked costume-bonus passives (`ucb`) | Inferred | Listed in each copy's notes. Only `resist_insanity` is mapped (to Insanity immunity); amounts and other passives are not modelled. |
| Costume bonus | Estimate | [Fandom: Costumes](https://empiresandpuzzles.fandom.com/wiki/Costumes): a fully levelled costume gives +5% atk/def and +10% HP (S1) or +3%/+6% (later). The engine applies the conservative +3%/+6% once, only for a costume whose own record is fully levelled. Whether bonuses from several costumes stack is not documented, so they are not stacked. |
| Costume form stats | Estimate where missing | Costume stats come from the catalog when present. Otherwise the base hero's stats are used, with a note. |

Statuses shown in the app: **✓** card Power you entered · **~** estimate from imported progression · **≈** manual entry assumed fully levelled · **?** progression unknown. Compact save records (no level or ascension) are ranked at level-1 stats until card Power is entered. They are never treated as maxed.

Known catalog limitation: catalog base stats come from the Fandom wiki. About 28% of heroes' max attack values differ from the Empuzzled game-data catalog (balance changes or wiki lag). Card Power entry corrects the ranking for a specific copy.

## Troops and mana

| Item | Status | Source |
|---|---|---|
| Tiles that hit needed on offense: Very Fast 6.5, Fast 8, Average 10, Slow 12, Very Slow 13.5 | Verified | [Fandom: Mana](https://empiresandpuzzles.fandom.com/wiki/Mana); [Empuzzled mana speed guide](https://empuzzled.com/blog/empires-and-puzzles-mana-speed-guide-breakpoints-troops-tiles/) |
| Bonuses add together | Verified | Empuzzled guide |
| Tiles = ceil(base ÷ (1 + bonus)), integer arithmetic | Verified by reproduction | Reproduces every published 4★ mana troop breakpoint (lvl 11 VF → 6, lvl 17 Slow → 11, lvl 23 Average → 9, lvl 29 Fast → 7, lvl 23 Very Slow → 12) and the Magic/Styx 20% cases. These are tested. |
| 4★ mana troop: lvl 1–4 5%, 5–10 7%, 11–16 9%, 17–22 11%, 23–28 13%, 29–30 15% | Verified | [Old Cynic troop guide](https://oldcynic.com/empires-and-puzzles-troops-complete-guide); Fandom breakpoint levels |
| Magic and Styx troops +20% at level 30 | Verified at level 30 only | Old Cynic. Other levels are reported as unknown. |
| Legendary troops +11% at level 30 | Verified at level 30 only | Empuzzled mana guide ("Legendary Troops: +11% max"). A class-matched legendary troop (ID ends in the hero's class) wins ties; class passives are not modelled. |
| Ninja, crit and lower-rarity troops' mana | Not modelled | Reported as "mana bonus unknown". |
| Charge, Magic, Styx, Ninja, Dancer, Changing Tides speeds; defense mana | Not modelled | No breakpoint is shown. |
| Emblem mana node, costume mana, family mana | Not included | The node choice is not decoded from the save, and costume season is unknown. The troop note says so. |
| Troop definition IDs (`blue_epic_barbarian` = Ice 4★ mana, etc.) | Verified naming | A real v389 save's `troopsState.savedOwnedIdToTroopDefinitions[*].td.id` uses the same `colour_rarity_kind` names as Empuzzled's public assets (records also carry `key` and `xp`). Which epic IDs are the mana troops still rests on Empuzzled's mana-troop page. Unrecognised IDs keep their raw value and can be labelled on My Roster → Troops. |
| One troop per hero, matching colour | Verified | Old Cynic ("Troops can only be assigned to one hero at a time"). |
| Troop reuse across separate war attacks | Unverified | Not enforced. Each team gets its own suggestion. |

## Synergy and opponent matching

Changes from the previous rules:

- Setup → payoff rules (defense down, damage amplification and attack buff before the nuke) are halved when the setup hero charges more slowly than the payoff, and the explanation says to hold the payoff.
- Same-kind effects conflict: two taunts, two attack buffs, two ordinary defense-down effects, two mana batteries, two big healers.
- Elemental defense down (`-X% defense against <colour>`) is tagged separately. It boosts that colour's hits and tiles, and it stacks with ordinary defense down (Fandom: Status Effects, "Elemental status effects stack with their regular status effect counterparts").
- Same-kind attack-buff and defense-down pairs carry penalties that roughly cancel the second hero's role credit, so duplicated buffs are no longer double-counted.
- Removed: "own cleanse + DoT" anti-synergy (cleanse targets your allies, not the enemy's ailments) and "dispel + bypass" (two answers to the same problem, not a combination).
- New: healing + boosted health, cleanse protecting healing, and healing block paired with spread damage rather than fiends.
- Battle rules scale or disable rules through their modifiers (for example, Bloody Battle turns off healing rules).
- Opponent needs (healers, revives, counterattack, taunt, buffs, minions, fiends, ailments, crowd control, mana control, dodge) each list answers with strengths. Enemy tools that devalue your own are penalised: boosted-health prevention against your boosted health, dispel against buff-reliant teams, and healing block when nothing cleanses.
- Power is now linear (no floor at 1250), so under-levelled copies rank lower.
- Raid, war and counter teams are chosen by searching combinations of shortlisted stack and support heroes and scoring the whole team, not by picking the top heroes one at a time. The war plan keeps later teams' stack colours out of earlier teams' support slots.

Each recommendation shows **Why it works**, **Main weakness** and **Assumptions**. When no rule fires, it says that no specific combination was detected. There are no confidence numbers or predicted win rates.

Upgrade suggestions are labelled **Verified** (fully levelled Limit Break stat ratios; mana troop levels that reach a supported breakpoint) or **Estimate** (levelling, talent nodes, costume bonus, power deltas).

## Saved game teams

`heroesState.teams[*].tm[]` entries are resolved by `hid` (owned instance ID), `tid` (owned troop ID) and, when present, `activeHeroDefinitionId` (the costume worn in that team, seen in a real save). They load into the Team Builder as editable starting points in their saved slots. Keys get friendly names (`main_N` → Team N, `pvp_league_attack` → Raid attack, `epic|no_red|attack` → Tournament 4★, no Fire, attack); tournament, class, event and quest teams are grouped separately, and teams made only of guest heroes are hidden. Battle items (`bat`) and `adi` are kept raw. Unknown instance IDs are listed, not guessed.

## Build workflow

`index.html` = `app_template.html` with `__HERO_DATA__` replaced by `heroes_full.json` (the harvest workflow's command). `heroes_full.json` was synced to the data previously embedded in `index.html` (Nidavellir families, refined tags), so a rebuild no longer regresses it. `pipeline/corrections.py` now matches the root corrections. Derived tags (`directheal`, `eldefdown`, `antioverheal`, `fiendhate`) are computed in the browser, so a re-harvest keeps them. CI checks that `index.html` matches a fresh build.
