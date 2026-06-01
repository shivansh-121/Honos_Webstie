import urllib.request
import re

urls = [
    'https://unsplash.com/s/photos/security-guard',
    'https://unsplash.com/s/photos/cctv',
    'https://unsplash.com/s/photos/corporate-building'
]

req_headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

for u in urls:
    req = urllib.request.Request(u, headers=req_headers)
    try:
        data = urllib.request.urlopen(req).read().decode('utf-8')
        ids = re.findall(r'images\.unsplash\.com/photo-([a-zA-Z0-9\-]+)', data)
        # Unique IDs
        ids = list(set(ids))[:5]
        print(f"Results for {u}: {ids}")
    except Exception as e:
        print(e)
