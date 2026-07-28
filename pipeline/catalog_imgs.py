import json, time, urllib.parse, urllib.request
from concurrent.futures import ThreadPoolExecutor

heroes = json.load(open("catalog_parsed.json"))
files = {}
for h in heroes:
    if h["imgfile"]:
        files["File:" + h["imgfile"]] = h["name"]

def api(params, tries=3):
    url = "https://empiresandpuzzles.fandom.com/api.php?" + urllib.parse.urlencode(params)
    for a in range(tries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "roster-tool/1.0"})
            with urllib.request.urlopen(req, timeout=30) as r: return json.load(r)
        except Exception:
            if a == tries-1: return {}
            time.sleep(2)

names = list(files)
def fetch(batch):
    d = api({"action":"query","prop":"imageinfo","iiprop":"url","format":"json","titles":"|".join(batch)})
    out = {}
    q = d.get("query", {})
    norm = {n["to"]: n["from"] for n in q.get("normalized", [])}
    for p in q.get("pages", {}).values():
        t = p.get("title","")
        if "imageinfo" in p:
            u = p["imageinfo"][0]["url"]
            if "/revision/latest" in u: u = u.replace("/revision/latest", "/revision/latest/scale-to-width-down/240")
            out[norm.get(t, t)] = u
            out[t] = u
    return out

urls = {}
batches = [names[i:i+50] for i in range(0, len(names), 50)]
with ThreadPoolExecutor(5) as ex:
    for got in ex.map(fetch, batches):
        urls.update(got)

cimap = {}
for f, hero in files.items():
    if f in urls: cimap[hero] = urls[f]
json.dump(cimap, open("catalog_imgs.json","w"))
print("portraits resolved:", len(cimap), "/", len(files), flush=True)
