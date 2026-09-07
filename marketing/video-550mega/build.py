#!/usr/bin/env python3
"""Pipeline per variant: TTS -> timeline -> (stills | music + frames + mix + mux)."""
import json, os, subprocess, sys, wave, glob
import imageio_ffmpeg
from PIL import Image
V=json.load(open(sys.argv[1])); MODE=sys.argv[2] if len(sys.argv)>2 else 'full'
ID=V['id']; D=os.path.join('build',ID); os.makedirs(D,exist_ok=True)
FF=os.environ.get('FFMPEG') or imageio_ffmpeg.get_ffmpeg_exe()
os.environ.setdefault('SSL_CERT_FILE','/root/.ccr/ca-bundle.crt'); os.environ['FFMPEG']=FF
VOICE=V.get('voice','pt-BR-AntonioNeural'); RATE=V.get('rate','+5%')
def run(cmd,**kw): subprocess.run(cmd,check=True,**kw)
# 1) voice-over per scene
segs=[]
for i,s in enumerate(V['scenes']):
    if not s.get('vo'): segs.append(None); continue
    base=f'{D}/seg{i}'
    if not os.path.exists(base+'.mp3') or os.path.getsize(base+'.mp3')==0: run(['python3','tts.py',s['vo'],base,VOICE,RATE])
    wav=base+'.wav'
    run([FF,'-hide_banner','-loglevel','error','-y','-i',base+'.mp3','-af','silenceremove=start_periods=1:start_threshold=-45dB,areverse,silenceremove=start_periods=1:start_threshold=-45dB,areverse','-ar','44100','-ac','1',wav])
    with wave.open(wav) as w: dur=w.getnframes()/w.getframerate()
    segs.append((i,wav,dur))
# 2) timeline: each scene lasts max(min, VO + lead + tail)
t=0.0; tl=[]; starts=[]
for i,s in enumerate(V['scenes']):
    lead=s.get('lead',0.25 if s['type']=='hook' else 0.15); tail=s.get('tail',1.6 if s['type']=='cta' else 0.45)
    vd=segs[i][2] if segs[i] else 0.0
    d=max(s.get('min',2.5), vd+lead+tail)
    tl.append([round(t,2),round(t+d,2)]); starts.append(round(t+lead,2)); t+=d
DUR=round(t+0.049,1)
json.dump({'variant':V,'timeline':tl},open(f'{D}/variant.json','w'),ensure_ascii=False)
print(ID,'DUR',DUR,'timeline',tl,'vo',[(x[0],round(x[2],2)) for x in segs if x],flush=True)
if MODE=='stills':
    mids=','.join(str(round(a+min(1.6,(b-a)*0.6),2)) for a,b in tl)
    run(['node','capture.js'],env=dict(os.environ,STILLS=mids,STILLS_DIR=f'{D}/stills',VARIANT=f'{D}/variant.json'))
    files=sorted(glob.glob(f'{D}/stills/t*.png'),key=lambda f: float(os.path.basename(f)[1:-4]))
    tw,th=360,640; sheet=Image.new('RGB',(tw*len(files),th),'black')
    for k,f in enumerate(files): sheet.paste(Image.open(f).convert('RGB').resize((tw,th),Image.LANCZOS),(k*tw,0))
    sheet.save(f'{D}/sheet.jpg',quality=88); print('sheet',f'{D}/sheet.jpg'); sys.exit(0)
# 3) music bed
run(['python3','music.py'],env=dict(os.environ,MUSIC_DUR=str(DUR+0.4),MUSIC_OUT=f'{D}/music.wav'))
# 4) frames -> H.264
if not os.path.exists(f'{D}/video-silent.mp4') or os.environ.get('RERENDER'):
    run(['node','capture.js'],env=dict(os.environ,DUR=str(DUR),OUT=f'{D}/video-silent.mp4',VARIANT=f'{D}/variant.json'))
# 5) mix: VO chain (normalized), music ducked by VO, master loudnorm -14 LUFS
inputs=['-i',f'{D}/music.wav']; fc=[]; labels=[]
for k,(i,wav,dur) in enumerate([x for x in segs if x]):
    inputs+=['-i',wav]; fc.append(f'[{k+1}]adelay={int(starts[i]*1000)}[v{k}]'); labels.append(f'[v{k}]')
X=DUR+0.4
fc.append(''.join(labels)+f'amix=inputs={len(labels)}:normalize=0:duration=longest,apad=whole_dur={X},atrim=0:{X},highpass=f=90,acompressor=threshold=-18dB:ratio=3:attack=5:release=120:makeup=4dB,loudnorm=I=-15:TP=-1.5:LRA=9,apad=whole_dur={X},atrim=0:{X},asplit=2[vo][vosc]')
fc.append(f'[0]volume=-8dB,atrim=0:{X}[m]')
fc.append('[m][vosc]sidechaincompress=threshold=0.04:ratio=3:attack=15:release=300:makeup=1[md]')
fc.append(f'[md][vo]amix=inputs=2:normalize=0:duration=longest,loudnorm=I=-14:TP=-1.5:LRA=11,apad=whole_dur={X},atrim=0:{DUR},afade=t=out:st={DUR-0.6}:d=0.6[out]')
run([FF,'-hide_banner','-loglevel','error','-y',*inputs,'-filter_complex',';'.join(fc),'-map','[out]','-ar','48000','-ac','2','-c:a','pcm_s16le',f'{D}/mix.wav'])
# 6) mux 9:16 + 4:5 crop + cover
os.makedirs('out',exist_ok=True); o916=f'out/{ID}-9x16.mp4'; o45=f'out/{ID}-4x5.mp4'
run([FF,'-hide_banner','-loglevel','error','-y','-i',f'{D}/video-silent.mp4','-i',f'{D}/mix.wav','-map','0:v','-map','1:a','-c:v','copy','-c:a','aac','-b:a','192k','-ar','48000','-t',str(DUR),'-movflags','+faststart',o916])
run([FF,'-hide_banner','-loglevel','error','-y','-i',f'{D}/video-silent.mp4','-i',f'{D}/mix.wav','-map','0:v','-map','1:a','-vf','crop=1080:1350:0:285','-c:v','libx264','-preset','slow','-crf','17','-pix_fmt','yuv420p','-profile:v','high','-level','4.1','-c:a','aac','-b:a','192k','-ar','48000','-t',str(DUR),'-movflags','+faststart',o45])
ci=next((i for i,s in enumerate(V['scenes']) if s['type'] in ('offer','price')),0); ct=tl[ci][0]+1.6
run([FF,'-hide_banner','-loglevel','error','-y','-ss',str(ct),'-i',o916,'-frames:v','1','-q:v','2',f'out/{ID}-capa.jpg'])
print('done',o916,o45,'DUR',DUR,flush=True)
