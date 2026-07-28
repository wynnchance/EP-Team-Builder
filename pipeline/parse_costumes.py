import json, re, html
from parse_catalog import parse_infobox, clean, num  # reuse helpers

raw = json.load(open("catalog_raw.json"))
ELS = ["Fire","Ice","Nature","Holy","Dark"]
CLASSES = ["Barbarian","Cleric","Druid","Fighter","Monk","Paladin","Ranger","Rogue","Sorcerer","Wizard"]
CLMAP = {"bar":"Barbarian","barbarian":"Barbarian","cle":"Cleric","cleric":"Cleric",
         "dru":"Druid","drd":"Druid","bdrd":"Druid","fig":"Fighter","fgt":"Fighter",
         "mon":"Monk","mnk":"Monk","monk":"Monk","pal":"Paladin","paladin":"Paladin",
         "ran":"Ranger","ranger":"Ranger","rog":"Rogue","rogue":"Rogue",
         "sor":"Sorcerer","scr":"Sorcerer","src":"Sorcerer","sorcerer":"Sorcerer",
         "wiz":"Wizard","wizard":"Wizard"}
SPEEDS = ["Very Fast","Very Slow","Changing Tides","Dancer","Charge","Ninja","Magic","Styx","Fast","Average","Slow"]

def hero_blocks(t):
    out, i = [], 0
    while True:
        i = t.find("{{Hero", i)
        if i < 0: break
        depth, j = 0, i
        while j < len(t):
            if t[j:j+2]=="{{": depth+=1; j+=2; continue
            if t[j:j+2]=="}}":
                depth-=1; j+=2
                if depth==0: break
                continue
            j+=1
        out.append(t[i:j]); i=j
    return out

def cats(t): return re.findall(r"\[\[Category:([^\]]+)\]\]", t)
def field(b, k):
    m = re.search(r"\|\s*"+k+r"\s*=([^\n]*?)(?=\n\s*\||\n\s*\}\}|$)", b, re.S)
    return m.group(1).strip() if m else ""
def clsof(b):
    m = re.search(r"class\s*=\s*\{\{cl\|(\w+)\}\}", b)
    if m: return CLMAP.get(m.group(1), "")
    return next((c for c in CLASSES if c in b), "")

BADIMG = re.compile(r"HOTM-|Placeholder|Unknown|NoImage|Question", re.I)
costumes = []
for title, txt in raw.items():
    c = cats(txt)
    el = next((e for e in ELS if f"{e} Heroes" in c), None)
    rarity = next((int(m.group(1)) for x in c if (m := re.match(r"(\d) Star Heroes", x))), None)
    fam = next((x[:-7].strip() for x in c if x.endswith(" Family")), "")
    if not el or not rarity: continue
    blocks = hero_blocks(txt)
    if len(blocks) < 2: continue
    for b in blocks[1:]:
        cap = clean(field(b, "caption1")) or clean(field(b, "costume_name"))
        if not cap: continue
        cname = f"{title} ({cap})"
        cls = clsof(b)
        speed = clean(field(b, "mana_speed")) or "Average"
        for s in SPEEDS:
            if speed.startswith(s): speed = s; break
        effects = [clean(field(b, f"effect{i}")) for i in range(1,9)]
        effects = [e for e in effects if e]
        sname = clean(field(b, "special_name"))
        skill = (sname + ": " if sname else "") + " ".join(effects)
        if len(skill) < 15: continue
        pas_parts = []
        for fk in ["resist","passive","passive1","passive2","passive3","passive_skill","passive_skill1","passive_skill2","aura","family_bonus","shared_skill"]:
            v = clean(field(b, fk))
            if v: pas_parts.append(v)
        resist = " ".join(dict.fromkeys(pas_parts))
        power = num(field(b,"power"),100,2600) or num(field(b,"bpower"),100,2600)
        img = clean(field(b, "image")).replace(" ", "_")
        costumes.append(dict(name=cname, base=title, el=el, r=rarity, fam=fam,
                             cls=cls, speed=speed, power=power,
                             skill=skill[:1200], pas=resist[:800],
                             atk=num(field(b,"attack")) or "", dfn=num(field(b,"defense")) or "", hp=num(field(b,"health")) or "",
                             imgfile="" if BADIMG.search(img) else img, costume=cap))

print("costume variants parsed:", len(costumes))
from collections import Counter
print("by rarity:", dict(Counter(c["r"] for c in costumes)))
print("missing power:", sum(1 for c in costumes if not c["power"]))
print("missing class:", sum(1 for c in costumes if not c["cls"]))
print("with image file:", sum(1 for c in costumes if c["imgfile"]))
# samples
for c in costumes[:4]: print(" ", c["name"], "|", c["el"], c["speed"], c["cls"], c["power"])
json.dump(costumes, open("costumes_parsed.json","w"))
