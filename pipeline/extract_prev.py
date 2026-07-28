#!/usr/bin/env python3
"""Extract the previous hero DB from the repo's built index.html (used to seed
portrait backfill + curated fallback when the repo has no heroes_full.json yet)."""
import re, json, sys
try:
    html = open("../index.html").read()
    m = re.search(r"const BASE_HEROES = (\[.*?\]);\n/\* ===== community learning config", html, re.S)
    json.dump(json.loads(m.group(1)), open("heroes_full.json", "w"))
    print("previous DB extracted from index.html:", len(json.loads(m.group(1))), "heroes")
except Exception as e:
    print("no previous DB available:", e)
