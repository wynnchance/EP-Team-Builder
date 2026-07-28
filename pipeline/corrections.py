#!/usr/bin/env python3
"""Post-harvest corrections + validation. Runs LAST in the pipeline, after merge_catalog.py.

Encodes every authoritative fix Chance has verified in-game, so a fresh wiki
harvest can never silently revert them. Also validates the output and prints a
report. Edit the tables below when Chance supplies new corrections.
"""
import json, re, sys
from collections import Counter
from merge_catalog import rules  # hardened tagger

DB_PATH = "heroes_full.json"
db = json.load(open(DB_PATH))
byname = {h["name"]: h for h in db}
changed = []

# ---- 1. field overrides (verified in-game by Chance) ----
FIELD_FIXES = {
    "Rawn":      {"speed": "Slow"},           # wiki had Fast (Jul 2026)
    "Astrid":    {"el": "Holy"},
    "Florencia": {"el": "Holy"},
    "Zondalath": {"el": "Holy"},
    "Lin Chong": {"el": "Nature"},
    "Maisie":    {"el": "Dark"},
}
for name, fixes in FIELD_FIXES.items():
    h = byname.get(name)
    if not h: continue
    for k, v in fixes.items():
        if h.get(k) != v:
            h[k] = v; changed.append(f"{name}.{k} -> {v}")

# ---- 2. per-hero text corrections (in-game card is truth; wiki may lag) ----
c = byname.get("Chilazar")
if c and "Seedling" not in (c.get("pas") or ""):
    c["skill"] = ("Hot and Spicy: Deals 450% damage to the target and all Nature enemies. "
        "The attack bypasses defensive buffs (including counterattacks). The target and all Nature "
        "enemies receive 1119 Burn damage over 3 turns. Stack (Max: 10): The caster gets +5 attack.")
    c["pas"] = ("EMPOWERED RESIST SPECIAL SKILL BLOCKING: Immune to status ailments that prevent the use of "
        "Special Skills; gains 450 boosted health and 5% mana each time they resist. "
        "SEEDLING SUMMONER: Summons a Seedling Fiend every turn to a random enemy. Seedling (50% atk / 20% HP) "
        "evolves into Sprout (75% / 30%) after 2 turns, then Blossom Mega Fiend (250% / 60%) after 2 more; "
        "evolution is delayed 1 turn each time they absorb healing.")
    changed.append("Chilazar skill+pas (in-game card)")

z = byname.get("Zenas")
if z and "360%" in (z.get("skill") or ""):  # balance buff: 360->390, fiend 60->70
    z["skill"] = z["skill"].replace("360%", "390%").replace("60% attack every turn", "70% attack every turn")
    changed.append("Zenas balance buff 390%/70%")
d = byname.get("Devyani")
if d and "-350 defense" in (d.get("skill") or ""):
    d["skill"] = d["skill"].replace("-350 defense", "-400 defense")
    changed.append("Devyani Wither -400")

# ---- 3. family-name unification (splits break family-bonus counting) ----
FAM_MERGE = {
    "Valiant Vegetables": "Vegetable", "Astral Dwarfs": "Astral Dwarf",
    "Fleur De Sang": "Fleur de Sang", "Outlaws of Liangshan": "Outlaws",
    "Woodland": "Woodland Faun", "Sunbay Sharks": "Shark",
    "Ghosts of Yang Jian": "Yang Jian Ghosts",
}
fam_merged = 0
for h in db:
    if h.get("fam") in FAM_MERGE:
        h["fam"] = FAM_MERGE[h["fam"]]; fam_merged += 1

# ---- 4. costumes inherit base speed when field is corrupt ----
SPEEDS = {"Very Fast","Fast","Charge","Ninja","Magic","Styx","Changing Tides","Dancer","Average","Slow","Very Slow"}
speed_fixed = 0
for h in db:
    if h.get("speed") not in SPEEDS:
        base = byname.get(h.get("base") or re.sub(r"\s*\([^)]*\)$", "", h["name"]))
        h["speed"] = (base or {}).get("speed") if (base or {}).get("speed") in SPEEDS else "Average"
        speed_fixed += 1

# ---- 5. retag everything with the hardened rules ----
for h in db:
    h["tags"] = rules(h.get("skill","") or "", h.get("pas","") or "")

# ---- 6. validation (fail loudly on structural problems) ----
errors = []
ELS = {"Fire","Ice","Nature","Holy","Dark"}
for h in db:
    if h.get("el") not in ELS: errors.append(f"bad element: {h['name']} = {h.get('el')}")
    if h.get("speed") not in SPEEDS: errors.append(f"bad speed: {h['name']} = {h.get('speed')}")
names = [h["name"] for h in db]
for n, cnt in Counter(names).items():
    if cnt > 1: errors.append(f"duplicate name: {n} x{cnt}")

# near-split family warning (word-subset heuristic vs scored families)
FAMS_SCORED = ["Wild Cat","Brave & Beautiful","Construct","Shark","Vegetable","Outlaws","Forsaken",
 "Cultist","Moth","Astral Dwarf","Slime","Nidavellir","Mahayoddha","Myrkheim","Garrison Guard","Fox",
 "Plains Hunter","Woodland Faun","Investigator","Beach Party","Beowulf","Titan Hunter","Yang Jian Ghosts",
 "Fleur de Sang","Astral Elves","Kingdom","Sun","Moon","Morlovia","Goblin","Classic"]
warnings = []
for f in {h.get("fam") for h in db if h.get("fam")}:
    if f in FAMS_SCORED or f in FAM_MERGE: continue
    fw = set(f.lower().replace(",", "").split())
    for k in FAMS_SCORED:
        kw = set(k.lower().split())
        if kw < fw or fw < kw:
            warnings.append(f"possible NEW family split: '{f}' vs scored '{k}' - verify and add to FAM_MERGE")

# ---- report ----
empty_pas = sum(1 for h in db if not h.get("pas"))
print(f"corrections applied: {len(changed)} field/text | fam merged: {fam_merged} | speeds fixed: {speed_fixed}")
for x in changed: print("  -", x)
print(f"heroes: {len(db)} | empty pas: {empty_pas} | with growth tag: {sum(1 for h in db if 'growth' in h['tags'])} | with wither tag: {sum(1 for h in db if 'wither' in h['tags'])}")
for w in warnings: print("WARNING:", w)
if errors:
    for e in errors: print("ERROR:", e)
    sys.exit("validation failed - not writing output")
json.dump(db, open(DB_PATH, "w"), ensure_ascii=False, separators=(",", ":"))
print("heroes_full.json written OK")
