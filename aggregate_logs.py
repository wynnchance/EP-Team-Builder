#!/usr/bin/env python3
"""Turn exported battle-log CSV into winrates.json for the app to learn from.
Usage: python3 aggregate_logs.py logs.csv > winrates.json
CSV columns (from the Google Sheet): received,uid,date,mode,result,tank,rule,team,note
'team' is pipe-separated hero names. A 'Win' credits every hero on the listed team.
Heroes are pooled by base name (costumes/copies count together).

Board-luck weighting: the app folds a self-reported board grade into the note
field as 'board:bad|normal|great'. Games are weighted by information content —
a win with a great board is mostly luck (weak evidence the heroes work), a loss
despite a great board is strong evidence they don't. Unreported board = 1.0.
"""
import csv, json, sys, re, datetime

def base(n):
    n = re.sub(r"\s*\(\d\)$", "", n)          # copy suffix
    n = re.sub(r"\s*\([^)]*\)$", "", n)        # costume suffix
    return n.strip()

# weight[(win, board)] — how much this game should count
WEIGHT = {
    (True,  "great"): 0.3,   # lucky win — heroes barely tested
    (True,  "bad"):   1.5,   # won uphill — strong positive signal
    (False, "great"): 1.5,   # lost with a gift board — strong negative signal
    (False, "bad"):   0.3,   # excusable loss
}

BOARD_RX = re.compile(r"\bboard:(bad|normal|great)\b", re.I)

hero = {}
battles = 0
weighted = 0.0
path = sys.argv[1] if len(sys.argv) > 1 else "logs.csv"
with open(path, encoding="utf-8") as f:
    for row in csv.DictReader(f):
        team = (row.get("team") or "").split("|")
        team = [base(x) for x in team if x.strip()]
        if not team:
            continue
        win = (row.get("result", "").strip().lower() == "win")
        m = BOARD_RX.search(row.get("note") or "")
        board = m.group(1).lower() if m else "normal"
        wgt = WEIGHT.get((win, board), 1.0)
        battles += 1
        weighted += wgt
        for h in set(team):
            r = hero.setdefault(h, {"g": 0.0, "w": 0.0})
            r["g"] += wgt
            if win:
                r["w"] += wgt

# round to keep the file lean; engine shrinks low samples anyway
hero = {k: {"g": round(v["g"], 2), "w": round(v["w"], 2)}
        for k, v in hero.items() if v["g"] > 0}
out = {"version": 2,
       "generated": datetime.date.today().isoformat(),
       "battles": battles,
       "weighted": round(weighted, 1),
       "hero": hero}
json.dump(out, sys.stdout, separators=(",", ":"))
