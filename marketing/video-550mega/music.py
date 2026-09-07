import numpy as np, wave
SR=44100; BPM=126; BEAT=60/BPM; DUR=16.4
N=int(SR*DUR); t=np.arange(N)/SR
out=np.zeros(N)
def env(len_s, decay):  # exponential decay envelope
    n=int(SR*len_s); return np.exp(-np.arange(n)/SR/decay)
def add(sig, start, gain=1.0):
    i=int(start*SR); j=min(N, i+len(sig)); 
    if i<N: out[i:j]+=sig[:j-i]*gain
def note(f): return f
rng=np.random.default_rng(7)
# ---- drums ----
def kick():
    n=int(SR*0.35); tt=np.arange(n)/SR
    f=45+140*np.exp(-tt/0.045); ph=2*np.pi*np.cumsum(f)/SR
    body=np.sin(ph)*np.exp(-tt/0.16)
    click=rng.standard_normal(n)*np.exp(-tt/0.004)*0.6
    return np.tanh((body*1.8+click)*1.4)
def clap():
    n=int(SR*0.25); tt=np.arange(n)/SR
    x=rng.standard_normal(n)
    # bandpass via simple filtering (diff for HP, then moving avg for LP)
    x=np.diff(x,prepend=0); x=np.convolve(x,np.ones(6)/6,mode='same')
    e=np.exp(-tt/0.07)*(1+0.5*np.sin(2*np.pi*tt*160)**2)
    return x*e*0.9
def hat(open_=False):
    n=int(SR*(0.25 if open_ else 0.06)); tt=np.arange(n)/SR
    x=rng.standard_normal(n); x=np.diff(np.diff(x,prepend=0),prepend=0)  # highpass-ish
    return x*np.exp(-tt/(0.09 if open_ else 0.018))*0.35
K=kick(); C=clap(); HC=hat(); HO=hat(True)
# ---- tonal ----
def saw(f, n, detune=0.004):
    tt=np.arange(n)/SR; s=np.zeros(n)
    for d in (-detune,0,detune):
        ph=(tt*f*(1+d))%1.0; s+= (2*ph-1)
    return s/3
def lp(x, cutoff):  # one-pole lowpass
    a=np.exp(-2*np.pi*cutoff/SR); y=np.zeros_like(x); z=0.0
    for i in range(len(x)):
        z=a*z+(1-a)*x[i]; y[i]=z
    return y
def pluck(f, dur=0.22):
    n=int(SR*dur); tt=np.arange(n)/SR
    s=saw(f,n)*np.exp(-tt/0.09)
    return lp(s, 2200+3000*np.exp(-tt[0]/0.05))*0.8
def bassnote(f, dur):
    n=int(SR*dur); tt=np.arange(n)/SR
    s=saw(f,n,0.002)*0.7+np.sin(2*np.pi*f*tt)*0.8
    e=np.minimum(1,tt/0.008)*np.exp(-tt/0.22)
    return lp(s*e, 380)*1.2
def pad(freqs, dur):
    n=int(SR*dur); tt=np.arange(n)/SR; s=np.zeros(n)
    for f in freqs: s+=saw(f,n,0.006)
    e=np.minimum(1,tt/0.3)*np.minimum(1,(dur-tt)/0.3)
    return lp(s*e/len(freqs), 900)*0.5
# chord progression per bar: D  A  E  F#m  (A major)
def hz(m): return 440*2**((m-69)/12)
bars=[ # (bass midi, chord midis, arp midis)
 (38,[62,66,69,74],[74,78,81,86]),   # D
 (33,[57,61,64,69],[69,73,76,81]),   # A
 (40,[64,68,71,76],[76,80,83,88]),   # E
 (42,[66,69,73,78],[78,81,85,90]),   # F#m
]
BAR=4*BEAT
nbars=int(np.ceil(DUR/BAR))
kick_times=[]
for b in range(nbars):
    bs=b*BAR; bm,chord,arp=bars[b%4]
    intro = b==0  # first bar: no full drums (hook), filtered
    for beat in range(4):
        tb=bs+beat*BEAT
        if not intro or beat==0:
            add(K,tb,0.95); kick_times.append(tb)
        if beat in (1,3) and not intro: add(C,tb,0.55)
        for h in range(2):
            th=tb+h*BEAT/2
            if not intro: add(HO if (h==1 and beat==3) else HC, th, 0.5 if h==0 else 0.35)
        # bass: 8ths
        for h in range(2):
            add(bassnote(hz(bm), BEAT/2*0.95), tb+h*BEAT/2, 0.35 if intro else 0.8)
    # arp: 16ths pattern
    pat=[0,1,2,3,2,1,3,0, 1,2,3,2,0,3,1,2]
    for i,pi in enumerate(pat):
        ta=bs+i*BEAT/4
        add(pluck(hz(arp[pi])), ta, (0.25 if intro else 0.42)*(1 if i%2==0 else 0.8))
        add(pluck(hz(arp[pi])), ta+BEAT*0.75, (0.12 if intro else 0.2))  # dotted-8th echo
    add(pad([hz(m) for m in chord], BAR), bs, 0.4 if intro else 0.55)
# riser into bar 2 (drop at ~1.9s) and final hit
def riser(dur):
    n=int(SR*dur); tt=np.arange(n)/SR; x=rng.standard_normal(n)
    return lp(x, 300)* (tt/dur)**2 * 0.8
add(riser(BAR), 0, 0.5)
hit_t=(nbars-1)*BAR if (nbars-1)*BAR<DUR-0.6 else (nbars-2)*BAR
# sidechain pump
sc=np.ones(N)
for kt in kick_times:
    i=int(kt*SR); n=int(SR*0.28); tt=np.arange(n)/SR
    if i>=N: continue
    j=min(N,i+n); sc[i:j]*= (1-0.55*np.exp(-tt[:j-i]/0.09))
# apply sidechain to everything except drums: rebuild drums separately for clean mix
drums=np.zeros(N)
def addd(sig,start,gain):
    i=int(start*SR); j=min(N,i+len(sig)); 
    if i<N: drums[i:j]+=sig[:j-i]*gain
for kt in kick_times: addd(K,kt,0.95)
# (claps/hats already in out; acceptable to pump them slightly)
mix=out*sc+drums*0.0
# final hit + cymbal at last bar start
last=hit_t
crash=hat(True); crash=np.concatenate([crash, np.zeros(int(SR*0.9))]); 
n=len(crash); tt=np.arange(n)/SR; crash=rng.standard_normal(n)*np.exp(-tt/0.35); crash=np.diff(crash,prepend=0)*0.25
i=int(last*SR); j=min(N,i+n); mix[i:j]+=crash[:j-i]
# master: soft clip, fade out last 0.4s
mix=np.tanh(mix*0.9)
fade=np.ones(N); nf=int(SR*0.4); fade[-nf:]=np.linspace(1,0,nf); mix*=fade
mix=mix/np.max(np.abs(mix))*0.89
pcm=(mix*32767).astype(np.int16)
with wave.open('music.wav','wb') as w:
    w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR); w.writeframes(pcm.tobytes())
print('music.wav', DUR, 'bars', nbars, 'hit at', round(last,2))
