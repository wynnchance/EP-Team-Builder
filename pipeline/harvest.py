import json, time, urllib.parse, urllib.request
from concurrent.futures import ThreadPoolExecutor

def api(params, tries=3):
    url = "https://empiresandpuzzles.fandom.com/api.php?" + urllib.parse.urlencode(params)
    for a in range(tries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "roster-tool/1.0 (fan project)"})
            with urllib.request.urlopen(req, timeout=30) as r:
                return json.load(r)
        except Exception as e:
            if a == tries-1: raise
            time.sleep(2)

# 1. enumerate Category:Heroes
titles, cont = [], None
while True:
    p = {"action":"query","list":"categorymembers","cmtitle":"Category:Heroes",
         "cmlimit":"500","cmnamespace":"0","format":"json"}
    if cont: p["cmcontinue"] = cont
    d = api(p)
    titles += [m["title"] for m in d["query"]["categorymembers"]]
    cont = d.get("continue",{}).get("cmcontinue")
    if not cont: break
print("titles:", len(titles), flush=True)

# 2. bulk fetch wikitext, 50 per call, threaded
def fetch(batch):
    d = api({"action":"query","prop":"revisions","rvprop":"content","rvslots":"main",
             "format":"json","titles":"|".join(batch)})
    out = {}
    for p in d["query"]["pages"].values():
        try: out[p["title"]] = p["revisions"][0]["slots"]["main"]["*"]
        except Exception: pass
    return out

batches = [titles[i:i+50] for i in range(0, len(titles), 50)]
raw = {}
with ThreadPoolExecutor(5) as ex:
    for i, got in enumerate(ex.map(fetch, batches)):
        raw.update(got)
        if i % 5 == 0: print("batch", i, "/", len(batches), "->", len(raw), flush=True)

json.dump(raw, open("catalog_raw.json","w"))
print("DONE", len(raw), "pages saved", flush=True)
