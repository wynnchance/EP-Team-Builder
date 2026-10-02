[README.md](https://github.com/user-attachments/files/29833531/README.md)
# ⚔ E&P Team Builder

An unofficial **Empires & Puzzles** companion app: hero database, engine-based team recommendations, sandbox team builder, and battle tracking — all in a single HTML file.

**▶ Live app: https://wynnchance.github.io/EP-Team-Builder/**

## Features

**📋 My Roster** — the full catalog of **1,750+ heroes**: select which ones you own, set **copies owned** (duplicates can fill multiple war teams) and **costumes owned** (each adds a stat bonus the engine counts). Team suggestions use only your selection. Add heroes not yet in the database by pasting their skill text; roles are auto-detected.

**📖 Hero Database** — browse every hero with portraits, full special skills, passives, and family bonuses. Search by name *or skill text* (try "taunt", "fiend", "revive"). Click any hero for a detail page with:
- Their role on defense and offense
- A recommended **emblem path** (sword/shield priority, mana-node breakpoint math, class talent)
- A **troop recommendation** (mana breakpoints for their speed, best troop type for their role)
- Their best synergy partners in your roster

**🛠️ Team Builder** — build any five-hero team and get live analysis: synergy rules firing, anti-synergy warnings (double taunts, redundant healers), speed curve, color adjacency, and an engine score. Auto-arrange finds the best positions. Save teams and log wins/losses in one click.

**🛡️ Defense** — top 3 recommended raid/war defenses built around *engines*: family synergies, always-on passives, taunt→payoff loops, and mana-denial chains — with per-hero reasoning.

**⚔️ Raid Offense** — 3-2 color stacks against any tank color, with support picks explained.

**🏰 War** — six attack teams with no hero reused, one per enemy tank color.

**🐉 Titans** — mono-color teams prioritizing attack buffs, defense-down, and titan specialists.

**📊 Battle Log** — track your battles; win rates per team accumulate over time. Export/import as JSON.

**Battle rules** — recommendations adapt to the official Alliance War rules (Rush Attack, Bloody Battle, War Equalizer, Arrow Barrage, Attack Boost, Undead Horde, Cloverfield, Ancient Terror, Skyfire) and tournament rules.

## Notes

- **Android EVA1 import:** My Roster → Import game save (.eva1). Preview and merge/replace your roster locally, retaining duplicate IDs, levels, ascension, skills, costume builds, talent counts, teams and troops in the roster backup. Each alliance member imports in their own browser. See [EVA1_IMPORT.md](EVA1_IMPORT.md) for supported fields and limitations. Each copy is ranked from its own progression, costumes are alternate forms of the same copy, saved game teams can be loaded into the Team Builder, and supported mana-troop breakpoints are calculated. See [ENGINE_NOTES.md](ENGINE_NOTES.md) for what is verified and what is estimated.

- All data (roster selection, saved teams, battle log, custom heroes) is stored **in your own browser** — nothing is uploaded anywhere. Use Export in the Battle Log tab to back up.
- Recommendations are rule-based on hero skills, families, synergy pairs (with cast timing and conflicts), opponent needs, speed, and each owned copy's estimated or entered power. Each recommendation explains why it works, its main weakness and its assumptions. War plans never use the same owned copy twice. Family bonuses count unique heroes only.
- Catalog data is parsed from the [E&P Fandom wiki](https://empiresandpuzzles.fandom.com) (text content CC-BY-SA). Older heroes' listed power reflects their era's max-level values and may undervalue them relative to modern heroes; balance changes can lag on wiki pages.
- Mana breakpoint and troop data sourced from community references ([Empuzzled](https://empuzzled.com), [Old Cynic](https://oldcynic.com)), July 2026.

## Credits & Disclaimer

This is a fan-made tool, not affiliated with or endorsed by Small Giant Games or Zynga. **Empires & Puzzles** and all hero artwork are © Small Giant Games Oy / Zynga Inc. Hero portraits are hotlinked from the [Empires & Puzzles Fandom wiki](https://empiresandpuzzles.fandom.com) and remain the property of their copyright holders. If you are a rights holder and want something removed, open an issue.
