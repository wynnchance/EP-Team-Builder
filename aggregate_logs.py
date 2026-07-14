#!/usr/bin/env python3
"""Turn exported battle-log CSV into winrates.json for the app to learn from.
Usage: python3 aggregate_logs.py logs.csv > winrates.json
CSV columns (from the Google Sheet): received,uid,date,mode,result,tank,rule,team,note
'team' is pipe-separated hero names. A 'Win' credits every hero on the listed team.
Heroes are pooled by base name (costumes/copies count together).

One-tap tokens fold into the note field as ' | key:value' segments:
  board:bad|normal|great   — self-reported board luck (weights the game)
  margin:close|comfortable|blowout — how decisive (gently weights the game)
  threat:HeroName          — enemy hero that caused the loss/near-loss (collected)
  mvp:HeroName             — own hero that carried (collected)
  why:misplay|matchup|powergap — self-reported loss reason (collected)

Weighting = board multiplier x margin multiplier. A win with a great board is
mostly luck; a loss despite a great board is strong evidence the heroes don't
work. A blowout win was already decided (little marginal info); a close loss
means the heroes almost worked. Unreported tokens = 1.0.
"""
import csv, json, sys, re, datetime

def base(n):
    n = re.sub(r"\s*\(\d\)$", "", n)          # copy suffix
    n = re.sub(r"\s*\([^)]*\)$", "", n)        # costume suffix
    return n.strip()

# board multiplier[(win, board)]
BOARD_W = {
    (True,  "great"): 0.3,   # lucky win — heroes barely tested
    (True,  "bad"):   1.5,   # won uphill — strong positive signal
    (False, "great"): 1.5,   # lost with a gift board — strong negative signal
    (False, "bad"):   0.3,   # excusable loss
}
# margin multiplier[(win, margin)] — gentle on purpose; stacks with board
MARGIN_W = {
    (True,  "blowout"): 0.8,   # already decided — little marginal info
    (True,  "close"):   1.1,   # earned win
    (False, "close"):   0.8,   # heroes almost worked — weak negative
    (False, "blowout"): 1.1,   # thoroughly beaten
}

BOARD_RX  = re.compile(r"\bboard:(bad|normal|great)\b", re.I)
MARGIN_RX = re.compile(r"\bmargin:(close|comfortable|blowout)\b", re.I)
WHY_RX    = re.compile(r"\bwhy:(misplay|matchup|powergap)\b", re.I)
THREAT_RX = re.compile(r"\bthreat:([^|]+)")
MVP_RX    = re.compile(r"\bmvp:([^|]+)")

hero = {}
threats, mvps, whys = {}, {}, {}
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
        note = row.get("note") or ""
        m = BOARD_RX.search(note)
        board = m.group(1).lower() if m else "normal"
        m = MARGIN_RX.search(note)
        margin = m.group(1).lower() if m else "comfortable"
        wgt = BOARD_W.get((win, board), 1.0) * MARGIN_W.get((win, margin), 1.0)
        battles += 1
        weighted += wgt
        for h in set(team):
            r = hero.setdefault(h, {"g": 0.0, "w": 0.0})
            r["g"] += wgt
            if win:
                r["w"] += wgt
        # collected-only tokens (raw counts; future counter/per-hero models)
        m = THREAT_RX.search(note)
        if m:
            n = base(m.group(1))
            if n: threats[n] = threats.get(n, 0) + 1
        m = MVP_RX.search(note)
        if m:
            n = base(m.group(1))
            if n: mvps[n] = mvps.get(n, 0) + 1
        m = WHY_RX.search(note)
        if m:
            whys[m.group(1).lower()] = whys.get(m.group(1).lower(), 0) + 1

# round to keep the file lean; engine shrinks low samples anyway
hero = {k: {"g": round(v["g"], 2), "w": round(v["w"], 2)}
        for k, v in hero.items() if v["g"] > 0}
out = {"version": 2,
       "generated": datetime.date.today().isoformat(),
       "battles": battles,
       "weighted": round(weighted, 1),
       "hero": hero}
if threats: out["threats"] = threats
if mvps:    out["mvp"] = mvps
if whys:    out["why"] = whys
json.dump(out, sys.stdout, separators=(",", ":"))
