from pathlib import Path
import sys,subprocess,re,json
from PIL import Image,ImageOps,ImageDraw
root=Path(__file__).resolve().parent
sys.path.insert(0,str(root/'python-packages'))
import imageio_ffmpeg
ff=imageio_ffmpeg.get_ffmpeg_exe()
video=root.parent/'outputs/GNDU-Placement-Portal-Showcase.mp4'
info=subprocess.run([ff,'-hide_banner','-i',str(video)],capture_output=True,text=True).stderr
assert '00:01:30.00' in info,info
assert '1920x1080' in info and '30 fps' in info,info
assert 'Audio: aac' in info,info
check=subprocess.run([ff,'-v','error','-i',str(video),'-f','null','-'],capture_output=True,text=True)
assert check.returncode==0 and not check.stderr,check.stderr
sheet=Image.new('RGB',(1280,760),'#eaeaea');draw=ImageDraw.Draw(sheet)
for i,t in enumerate([6,13,30,42,53,64,77,88]):
 dest=root/f'encoded-{t}.jpg'
 subprocess.run([ff,'-v','error','-y','-ss',str(t),'-i',str(video),'-frames:v','1',str(dest)],check=True)
 thumb=ImageOps.contain(Image.open(dest),(630,350))
 sheet.paste(thumb,((i%2)*640,(i//2)*190)) if False else None
 # Eight 320px wide thumbnails form a compact two-row review.
sheet=Image.new('RGB',(1280,400),'#eee');draw=ImageDraw.Draw(sheet)
for i,t in enumerate([6,13,30,42,53,64,77,88]):
 im=Image.open(root/f'encoded-{t}.jpg').resize((320,180))
 sheet.paste(im,((i%4)*320,(i//4)*200));draw.text(((i%4)*320+6,(i//4)*200+182),f'{t}s',fill='black')
sheet.save(root/'encoded-review.jpg')
report={'duration_seconds':90,'resolution':'1920x1080','fps':30,'video_codec':'H.264','audio_codec':'AAC stereo','decode_errors':0,'bytes':video.stat().st_size}
(root/'validation.json').write_text(json.dumps(report,indent=2));print(json.dumps(report))
