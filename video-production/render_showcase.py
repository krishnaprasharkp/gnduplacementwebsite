"""Render the GNDU showcase from genuine browser captures; no website data is altered."""
from pathlib import Path
import sys, math, subprocess, wave, json
import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageOps
ROOT=Path(__file__).resolve().parent
sys.path.insert(0,str(ROOT/'python-packages'))
import imageio_ffmpeg
FFMPEG=imageio_ffmpeg.get_ffmpeg_exe()
OUT=ROOT.parent/'outputs'; OUT.mkdir(exist_ok=True)
W,H,FPS,DURATION=1280,720,30,90
BG=(10,24,32); WHITE=(242,245,242); GOLD=(220,192,117); MUTED=(155,181,185)
fonts={}
def font(size,bold=False):
 key=(size,bold)
 if key not in fonts: fonts[key]=ImageFont.truetype('C:/Windows/Fonts/'+('segoeuib.ttf' if bold else 'segoeui.ttf'),size)
 return fonts[key]
def ease(x):
 x=max(0,min(1,x));return x*x*(3-2*x)
def text(draw,txt,xy,size=36,color=WHITE,bold=False,anchor=None):
 draw.text(xy,txt,font=font(size,bold),fill=color,anchor=anchor)
def centered(draw,txt,y,size=44,color=WHITE,bold=False):text(draw,txt,(W/2,y),size,color,bold,'mt')
captures={p.stem:Image.open(p).convert('RGB') for p in (ROOT/'captures').glob('*.png')}
crest=Image.open(ROOT.parent/'public/images/gndu-logo.png').convert('RGBA')
def logo(frame,x,y,size):
 mark=ImageOps.contain(crest,(size,size),Image.Resampling.LANCZOS)
 frame.paste(mark,(int(x-mark.width/2),int(y)),mark)
def base():
 im=Image.new('RGB',(W,H),BG);d=ImageDraw.Draw(im)
 d.line((48,682,1232,682),fill=(38,59,65),width=1)
 return im
# Start, end, capture, title, chapter, zoom start/end, image focus x/y.
shots=[
 (7,11,'home','A university built on knowledge.','01 / THE UNIVERSITY',1,1.035,.5,.5),
 (11,16,'about-details','A generation building what comes next.','01 / THE UNIVERSITY',1,1.025,.5,.48),
 (16,20,'cosmohacks','Beyond classrooms.','02 / CAMPUS CULTURE',1,1.04,.5,.5),
 (20,23,'hackathon','Building. Competing. Leading.','02 / CAMPUS CULTURE',1.02,1,.5,.5),
 (23,26,'culture','A culture of technical learning.','02 / CAMPUS CULTURE',1,1.035,.5,.5),
 (26,29,'coding','Problem solvers by practice.','03 / CODING & COMPETITION',1,1.03,.5,.5),
 (29,33,'coding-stats','Engineers by mindset.','03 / CODING & COMPETITION',1,1.035,.5,.40),
 (33,36,'coding-progress','Consistent practice. Collective progress.','03 / CODING & COMPETITION',1.01,1.04,.5,.5),
 (36,40,'technology-cards',"Students aren’t waiting for the future.",'04 / STUDENT TECHNOLOGIES',1,1.04,.5,.5),
 (40,44,'technology-cards',"They’re building it.",'04 / AI · CLOUD · DATA',1.09,1.04,.48,.75),
 (44,47,'certifications','Skills strengthened through continuous learning.','04 / CREDENTIALS',1,1.04,.5,.7),
 (47,51,'recruiters','An established recruiter ecosystem.','05 / PREVIOUS RECRUITERS',1,1.035,.45,.65),
 (51,55,'recruiters-close','Ready for what comes next.','05 / INDUSTRY CONNECTIONS',1.03,1.08,.62,.5),
 (55,58,'drives-close','Placement drives. In one place.','06 / THE 2027 BATCH',1,1.025,.5,.5),
 (58,61,'opportunities','One platform. Every opportunity.','06 / OPPORTUNITY DISCOVERY',1,1.04,.5,.70),
 (61,63,'opportunity-opening','Open a company. Explore the details.','06 / STUDENT EXPERIENCE',1,1.06,.20,.65),
 (63,65.5,'opportunity-details','Eligibility. Roles. Selection process.','06 / INFORMED DECISIONS',1,1.04,.2,.5),
 (65.5,67,'opportunity-status','Clear application status.','06 / CURRENT NOTICES',1,1.02,.2,.4),
 (67,69,'about','For students, a gateway to opportunity.','07 / THE RECRUITER EXPERIENCE',1,1.025,.5,.5),
 (69,71,'technology-cards','For recruiters, a window into GNDU talent.','07 / THE RECRUITER EXPERIENCE',1,1.035,.5,.6),
 (71,73,'coding-stats','Talent. Skills. Participation.','07 / THE RECRUITER EXPERIENCE',1,1.025,.5,.4),
 (73,76,'contact','A direct connection to the placement team.','07 / CORPORATE RELATIONS',1,1.025,.5,.5),
 (76,79.5,'vc','Supported by the institution.','08 / UNIVERSITY LEADERSHIP',1,1.02,.5,.5),
 (79.5,83,'director-close','Connected to industry.','08 / PLACEMENT LEADERSHIP',1,1.025,.5,.5),
]
def ui_frame(shot,t):
 start,end,key,title,chapter,z0,z1,fx,fy=shot
 p=(t-start)/(end-start); im=base();d=ImageDraw.Draw(im)
 text(d,chapter,(50,27),13,GOLD,True)
 text(d,title,(48,52),30 if len(title)>44 else 34,WHITE,True)
 src=captures[key]
 # Remove only the browser scrollbar; preserve all website text and its geometry.
 src=src.crop((0,0,src.width-15,src.height))
 tw,th=1184,550
 scale=max(tw/src.width,th/src.height)*(z0+(z1-z0)*ease(p))
 resized=src.resize((round(src.width*scale),round(src.height*scale)),Image.Resampling.BICUBIC)
 x=int((resized.width-tw)*fx);y=int((resized.height-th)*fy)
 panel=resized.crop((x,y,x+tw,y+th))
 im.paste(panel,(48,120)); d=ImageDraw.Draw(im)
 d.rectangle((47,119,1232,670),outline=(72,92,95),width=1)
 text(d,'GNDU  /  PLACEMENT & CAREER PORTAL',(49,692),11,MUTED)
 text(d,'UNIVERSITY WEBSITE SHOWCASE',(1232,692),11,MUTED,anchor='ra')
 if key in ['opportunity-details','opportunity-status']:
  # Honest context for the recorded, currently unavailable application action.
  d.rounded_rectangle((738,567,1207,642),radius=5,fill=BG)
  text(d,'CURRENT NOTICE STATUS',(758,579),12,GOLD,True)
  text(d,'Registration closed / application link pending',(758,603),17,WHITE)
 if key=='opportunity-opening':
  # A short editorial cursor cue marking the actual accordion interaction.
  x=270+18*ease(p); y=395+12*ease(p)
  if p<.65:d.polygon([(x,y),(x+3,y+29),(x+11,y+20),(x+19,y+35),(x+25,y+31),(x+17,y+17),(x+29,y+16)],fill=WHITE,outline=BG,width=2)
 return im
def title_frame(t):
 im=base();d=ImageDraw.Draw(im)
 if t<2.4:
  a=ease(t/.65);c=tuple(int(v*a) for v in WHITE)
  centered(d,'Talent exists everywhere.',310+int(15*(1-a)),49,c,True)
 elif t<4.9:
  a=ease((t-2.4)/.55);c=tuple(int(v*a) for v in WHITE)
  centered(d,'Opportunity needs a way to find it.',310+int(15*(1-a)),43,c,True)
 else:
  logo(im,W/2,142,140);d=ImageDraw.Draw(im)
  centered(d,'Guru Nanak Dev University',315,40,WHITE,True)
  centered(d,'Placement & Career Portal',379,32,GOLD)
  centered(d,'AMRITSAR, PUNJAB',451,15,MUTED)
 return im
def ending(t):
 if t<85:
  key=['home','coding-stats','technology-cards','recruiters-close'][min(3,int((t-83)*2))]
  return ui_frame((83,85,key,'Talent. Technology. Opportunity.','GNDU / THE REVEAL',1.03,1,.5,.5),t)
 im=base();logo(im,W/2,55,112);d=ImageDraw.Draw(im)
 centered(d,'GNDU Placement & Career Portal',206,32,WHITE,True)
 centered(d,'TALENT. TECHNOLOGY. OPPORTUNITY.',260,16,GOLD,True)
 centered(d,'WHERE GNDU TALENT',334,47,WHITE,True)
 centered(d,'MEETS OPPORTUNITY.',394,47,WHITE,True)
 centered(d,'Guru Nanak Dev University, Amritsar',489,22,MUTED)
 centered(d,'LOCAL PORTAL PREVIEW  ·  http://localhost:3000',552,15,GOLD)
 centered(d,'Directorate of Placement & Career Enhancement',585,16,WHITE)
 return im
def frame(t,transition=True):
 if t<7:return title_frame(t)
 if t>=83:return ending(t)
 sh=next(s for s in shots if s[0]<=t<s[1]);im=ui_frame(sh,t)
 # Geometric horizontal reveals rather than repeated dissolves.
 dt=t-sh[0]
 if transition and dt<.36:
  prev=frame(max(0,sh[0]-.001),False)
  cut=int(W*ease(dt/.36))
  prev.paste(im.crop((0,0,cut,H)),(0,0));im=prev
  if cut<W:ImageDraw.Draw(im).line((cut,112,cut,672),fill=GOLD,width=2)
 return im
def soundtrack():
 sr=44100; n=int(sr*DURATION); audio=np.zeros((n,2),np.float32);rng=np.random.default_rng(7)
 def add(start,dur,freq,amp,kind='pad',pan=0):
  i=int(start*sr);count=min(int(dur*sr),n-i)
  if count<=0:return
  tt=np.arange(count,dtype=np.float32)/sr
  if kind=='pad':
   env=np.minimum(tt/.7,1)*np.minimum((dur-tt)/1.3,1)
   sig=(np.sin(2*np.pi*freq*tt)+.25*np.sin(2*np.pi*freq*2.002*tt)+.12*np.sin(2*np.pi*freq*.998*tt))*env
  elif kind=='pluck':
   env=(1-np.exp(-tt*110))*np.exp(-tt*3.8)
   sig=(np.sin(2*np.pi*freq*tt)+.22*np.sin(2*np.pi*freq*2*tt))*env
  elif kind=='kick':sig=np.sin(2*np.pi*(46*tt+7*(1-np.exp(-tt*18))))*np.exp(-tt*13)
  else:sig=rng.normal(0,1,count)*np.exp(-tt*65)*(1-np.exp(-tt*500))
  audio[i:i+count,0]+=sig*amp*(1-pan*.35);audio[i:i+count,1]+=sig*amp*(1+pan*.35)
 def hz(midi):return 440*2**((midi-69)/12)
 # Original D minor / B-flat / F / C progression at 96 BPM.
 chords=[[50,57,62,65,69],[46,53,58,62,65],[41,53,57,60,65],[48,55,60,64,67]]
 beat=.625;bar=2.5
 for b in range(36):
  st=b*bar;ch=chords[b%4];energy=.45 if st<15 else .7 if st<40 else .85 if st<65 else 1
  for j,note in enumerate(ch):add(st,3.8,hz(note),.016*energy,'pad',(j-2)/2)
  if st>=15:
   for k in range(8):add(st+k*beat/2,1.5,hz(ch[(k+b)%5]+12),.035*energy,'pluck',(-1)**k*.7)
  else:add(st+.625,2,hz(ch[3]+12),.03,'pluck',.25)
  if st>=20 and st<85:
   for k in range(4):
    add(st+k*beat,.35,50,.085*energy,'kick')
    add(st+k*beat+beat/2,.10,0,.018*energy,'noise',(-1)**k*.5)
  if st>=40:add(st,2.4,hz(ch[0]-12),.035*energy,'pad')
 # Resolve gently, leaving the final identity legible over a sustained chord.
 for no in [50,57,62,65,69]:add(85,5,hz(no),.025,'pad')
 for delay,gain in [(.1875,.22),(.375,.12)]:
  offset=int(delay*sr);audio[offset:]+=audio[:-offset].copy()*gain
 env=np.minimum(np.arange(n)/sr/2,1)*np.minimum((n-np.arange(n))/sr/2.5,1)
 audio*=env[:,None];audio=np.tanh(audio*1.5)
 audio*=.80/max(float(np.max(np.abs(audio))),.01)
 path=ROOT/'original-score.wav'
 with wave.open(str(path),'wb') as wav:
  wav.setnchannels(2);wav.setsampwidth(2);wav.setframerate(sr);wav.writeframes((audio*32767).astype('<i2').tobytes())
 return path
if __name__=='__main__':
 if '--review' in sys.argv:
  times=[1,3.5,6,9,13,18,24,30,34,38,42,45,49,53,56,59,62,64,66,70,74,77,81,88]
  sheet=Image.new('RGB',(1280,210*6),'#eee');d=ImageDraw.Draw(sheet)
  for i,t in enumerate(times):
   still=frame(t);still.save(ROOT/f'review-{t}.jpg',quality=88)
   sheet.paste(still.resize((320,180)),((i%4)*320,(i//4)*210));d.text(((i%4)*320+8,(i//4)*210+184),f'{t:04.1f}s',fill='black')
  sheet.save(ROOT/'storyboard.jpg');print('Storyboard ready',flush=True);sys.exit()
 score=soundtrack();dest=OUT/'GNDU-Placement-Portal-Showcase.mp4'
 command=[FFMPEG,'-y','-hide_banner','-loglevel','error','-f','rawvideo','-vcodec','rawvideo','-pix_fmt','rgb24','-s','1280x720','-r',str(FPS),'-i','-','-i',str(score),'-vf','scale=1920:1080:flags=lanczos','-c:v','libx264','-preset','fast','-crf','19','-pix_fmt','yuv420p','-c:a','aac','-b:a','192k','-t','90','-movflags','+faststart',str(dest)]
 with open(ROOT/'render-errors.log','w') as errors:
  proc=subprocess.Popen(command,stdin=subprocess.PIPE,stderr=errors)
  for i in range(FPS*DURATION):
   proc.stdin.write(frame(i/FPS).tobytes())
   if i%(FPS*5)==0:print(f'Rendered {i//FPS}/90 seconds',flush=True)
  proc.stdin.close();code=proc.wait()
  if code:raise RuntimeError((ROOT/'render-errors.log').read_text())
 frame(88).save(OUT/'GNDU-Showcase-Poster.jpg',quality=95)
 (ROOT/'timeline.json').write_text(json.dumps(shots,indent=2))
 print(f'COMPLETE: {dest}',flush=True)
