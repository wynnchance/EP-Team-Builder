#!/usr/bin/env python3
"""Turn exported battle-log CSV into winrates.json for the app to learn from.
Usage: python3 aggregate_logs.py logs.csv > winrates.json
CSV columns (from the Google Sheet): received,uid,date,mode,result,tank,rule,team,note
'team' is pipe-separated hero names. A 'Win' credits every hero on the listed team.
Heroes are pooled by base name (costumes/copies count together)."""
import csv, json, sys, re, datetime

def base(n):
    n = re.sub(r"\s*\(\d\)$", "", n)          # copy suffix
    n = re.sub(r"\s*\([^)]*\)$", "", n)        # costume suffix
    return n.strip()

hero = {}
battles = 0
path = sys.argv[1] if len(sys.argv) > 1 else "logs.csv"
with open(path, encoding="utf-8") as f:
    for row in csv.DictReader(f):
        team = (row.get("team") or "").split("|")
        team = [base(x) for x in team if x.strip()]
        if not team:
            continue
        win = (row.get("result","").strip().lower() == "win")
        battles += 1
        for h in set(team):
            r = hero.setdefault(h, {"g": 0, "w": 0})
            r["g"] += 1
            if win:
                r["w"] += 1

# drop tiny-sample noise below 3 games to keep the file lean (engine also shrinks)
hero = {k: v for k, v in hero.items() if v["g"] >= 1}
out = {"version": 1,
       "generated": datetime.date.today().isoformat(),
       "battles": battles,
       "hero": hero}
json.dump(out, sys.stdout, separators=(",", ":"))

