import json, re, html

raw = json.load(open("catalog_raw.json"))

ELS = ["Fire","Ice","Nature","Holy","Dark"]
CLASSES = ["Barbarian","Cleric","Druid","Fighter","Monk","Paladin","Ranger","Rogue","Sorcerer","Wizard"]
SPEEDS = ["Very Fast","Fast","Average","Slow","Very Slow","Ninja","Magic","Charge"]

def clean(s):
    s = re.sub(r"\{\{[^}]*\}\}", "", s)              # templates
    s = re.sub(r"\[\[(?:File|Category):[^\]]*\]\]", "", s)
    s = re.sub(r"\[\[(?:[^|\]]*\|)?([^\]]*)\]\]", r"\1", s)  # links -> label
    s = re.sub(r"<br\s*/?>", " ", s)
    s = re.sub(r"<[^>]+>", "", s)                    # html tags
    s = html.unescape(s)
    return re.sub(r"\s+", " ", s).strip()

def parse_infobox(txt):
    i = txt.find("{{Hero")
    if i < 0: return {}
    depth, j = 0, i
    while j < len(txt):
        if txt[j:j+2] == "{{": depth += 1; j += 2; continue
        if txt[j:j+2] == "}}":
            depth -= 1; j += 2
            if depth == 0: break
            continue
        j += 1
    block = txt[i+6:j-2]  # inside {{Hero ... }}
    # depth-aware split on top-level pipes (pipes inside {{..}} / [[..]] stay put)
    parts, cur, d1, d2, k = [], [], 0, 0, 0
    while k < len(block):
        two = block[k:k+2]
        if two == "{{": d1 += 1; cur.append(two); k += 2; continue
        if two == "}}": d1 -= 1; cur.append(two); k += 2; continue
        if two == "[[": d2 += 1; cur.append(two); k += 2; continue
        if two == "]]": d2 -= 1; cur.append(two); k += 2; continue
        if block[k] == "|" and d1 == 0 and d2 == 0:
            parts.append("".join(cur)); cur = []
            k += 1; continue
        cur.append(block[k]); k += 1
    parts.append("".join(cur))
    fields = {}
    for p in parts[1:]:
        if "=" in p:
            key, v = p.split("=", 1)
            fields[key.strip().lower()] = v.strip()
    return fields

def num(v, lo=50, hi=6000):
    cand = [int(x.replace(",", "")) for x in re.findall(r"\d[\d,]*", v or "")]
    cand = [x for x in cand if lo <= x <= hi]
    return max(cand) if cand else 0

def cats(txt):
    return re.findall(r"\[\[Category:([^\]]+)\]\]", txt)

heroes, skipped = [], []
for title, txt in raw.items():
    f = parse_infobox(txt)
    c = cats(txt)
    el = next((e for e in ELS if f"{e} Heroes" in c), None)
    rarity = next((int(m.group(1)) for x in c if (m := re.match(r"(\d) Star Heroes", x))), None)
    cls = next((x for x in CLASSES if x in c), None)
    speed = next((s for s in ["Very Fast","Very Slow","Fast","Average","Slow"] if f"{s} Heroes" in c), None) \
            or clean(f.get("mana_speed",""))
    for known in ["Very Fast","Very Slow","Changing Tides","Dancer","Charge","Ninja","Magic","Styx","Fast","Average","Slow"]:
        if speed.startswith(known): speed = known; break
    fam = next((x[:-7].strip() for x in c if x.endswith(" Family")), "")
    if not el or not rarity:
        skipped.append(title); continue
    power = num(f.get("power"), 100, 2600) or num(f.get("bpower"), 100, 2600)
    effects = [clean(f[k]) for k in sorted(f) if re.match(r"effect\d+$", k) and clean(f[k])]
    sname = clean(f.get("special_name",""))
    skill = (sname + ": " if sname else "") + " ".join(effects)
    # capture every passive-ish field, not just 'resist' (missing-passives fix, Jul 2026)
    pas_parts = []
    for k in sorted(f):
        if k == "resist" or any(w in k for w in ("passiv", "aura", "family_bonus", "shared_skill", "familybonus")):
            v = clean(f[k])
            if v: pas_parts.append(v)
    resist = " ".join(dict.fromkeys(pas_parts))  # dedupe, keep order
    stats = {k: num(f.get(k)) or "" for k in ["attack","defense","health"]}
    heroes.append(dict(name=title, el=el, speed=speed or "Average", fam=fam, cls=cls or "",
                       power=power, r=rarity, skill=skill[:1200], pas=resist[:800],
                       atk=stats["attack"], dfn=stats["defense"], hp=stats["health"],
                       imgfile=clean(f.get("image","")).replace(" ","_")))

print("parsed:", len(heroes), "| skipped:", len(skipped))
print("skipped sample:", skipped[:10])
from collections import Counter
print("rarity:", dict(Counter(h["r"] for h in heroes)))
print("elements:", dict(Counter(h["el"] for h in heroes)))
print("missing class:", sum(1 for h in heroes if not h["cls"]), "| missing power:", sum(1 for h in heroes if not h["power"]), "| missing skill:", sum(1 for h in heroes if len(h["skill"])<20))
json.dump(heroes, open("catalog_parsed.json","w"))
# field-name census so we can spot fields the parser doesn't know about
from collections import Counter
census = Counter()
for title, txt in raw.items():
    census.update(parse_infobox(txt).keys())
json.dump(dict(census.most_common()), open("fieldnames_report.json","w"), indent=1)
print("field census written:", len(census), "distinct infobox fields")
