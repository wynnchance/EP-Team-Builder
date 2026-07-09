[README.md](https://github.com/user-attachments/files/29831623/README.md)
# ⚔ E&P Team Builder

An unofficial **Empires & Puzzles** companion app: hero database, engine-based team recommendations, sandbox team builder, and battle tracking — all in a single HTML file.

**▶ Live app: https://wynnchance.github.io/EP-Team-Builder/**

## Features

**📋 My Roster** — the full catalog of **1,300+ heroes**: select which ones you own, set **copies owned** (duplicates can fill multiple war teams) and **costumes owned** (each adds a stat bonus the engine counts). Team suggestions use only your selection. Add heroes not yet in the database by pasting their skill text; roles are auto-detected.

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

- All data (roster selection, saved teams, battle log, custom heroes) is stored **in your own browser** — nothing is uploaded anywhere. Use Export in the Battle Log tab to back up.
- Recommendations are rule-based on hero skills, families, synergy pairs, speed, power, copies, and costume bonuses. Family bonuses correctly count unique heroes only. Emblems and troops are not yet modeled per-copy.
- Catalog data is parsed from the [E&P Fandom wiki](https://empiresandpuzzles.fandom.com) (text content CC-BY-SA). Older heroes' listed power reflects their era's max-level values and may undervalue them relative to modern heroes; balance changes can lag on wiki pages.
- Mana breakpoint and troop data sourced from community references ([Empuzzled](https://empuzzled.com), [Old Cynic](https://oldcynic.com)), July 2026.

## Credits & Disclaimer

This is a fan-made tool, not affiliated with or endorsed by Small Giant Games or Zynga. **Empires & Puzzles** and all hero artwork are © Small Giant Games Oy / Zynga Inc. Hero portraits are hotlinked from the [Empires & Puzzles Fandom wiki](https://empiresandpuzzles.fandom.com) and remain the property of their copyright holders. If you are a rights holder and want something removed, open an issue.
