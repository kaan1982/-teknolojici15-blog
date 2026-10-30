#!/usr/bin/env python3
# Contact sheet of one language's covers: python3 tools/covers/sheet.py <code>  ->  /tmp/sheet-<code>.png
import sys, os
from PIL import Image, ImageDraw
code = sys.argv[1]
d = os.path.join(os.path.dirname(__file__), '../../public/img/kapak', code)
files = sorted(f for f in os.listdir(d) if f.endswith('.webp'))
W, H, cols = 180, 320, 10
rows = (len(files) + cols - 1) // cols
sheet = Image.new('RGB', (W * cols, (H + 16) * rows), 'white')
dr = ImageDraw.Draw(sheet)
for i, f in enumerate(files):
    im = Image.open(os.path.join(d, f)).convert('RGB').resize((W, H))
    x, y = (i % cols) * W, (i // cols) * (H + 16)
    sheet.paste(im, (x, y)); dr.text((x + 2, y + H + 2), f[:30], fill='black')
sheet.save(f'/tmp/sheet-{code}.png'); print(f'/tmp/sheet-{code}.png', len(files))
