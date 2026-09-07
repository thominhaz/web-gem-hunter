#!/usr/bin/env bash
# Mixes music.wav + seg0..seg5.wav (voice-over) with sidechain ducking and muxes with video-silent.mp4.
# Requires an ffmpeg with libx264 + aac (e.g. `pip install imageio-ffmpeg`).
set -euo pipefail
FF=${FFMPEG:-ffmpeg}
$FF -hide_banner -loglevel error -y -i music.wav -i seg0.wav -i seg1.wav -i seg2.wav -i seg3.wav -i seg4.wav -i seg5.wav -filter_complex "
[1]adelay=250[v0];[2]adelay=2000[v1];[3]adelay=4900[v2];[4]adelay=8400[v3];[5]adelay=10800[v4];[6]adelay=12450[v5];
[v0][v1][v2][v3][v4][v5]amix=inputs=6:normalize=0:duration=longest,apad=whole_dur=16.4,atrim=0:16.4,highpass=f=90,acompressor=threshold=-18dB:ratio=3:attack=5:release=120:makeup=4dB,loudnorm=I=-15:TP=-1.5:LRA=9,apad=whole_dur=16.4,atrim=0:16.4,asplit=2[vo][vosc];
[0]volume=-8dB,atrim=0:16.4[m];
[m][vosc]sidechaincompress=threshold=0.04:ratio=3:attack=15:release=300:makeup=1[md];
[md][vo]amix=inputs=2:normalize=0:duration=longest,loudnorm=I=-14:TP=-1.5:LRA=11,apad=whole_dur=16.4,atrim=0:16,afade=t=out:st=15.4:d=0.6[out]" -map "[out]" -ar 48000 -ac 2 -c:a pcm_s16le mix.wav
mkdir -p out
$FF -hide_banner -loglevel error -y -i video-silent.mp4 -i mix.wav -map 0:v -map 1:a -c:v copy -c:a aac -b:a 192k -t 16 -movflags +faststart out/portal-itaipu-550mega-9x16.mp4
$FF -hide_banner -loglevel error -y -i video-silent.mp4 -i mix.wav -map 0:v -map 1:a -vf "crop=1080:1350:0:285" -c:v libx264 -preset slow -crf 17 -pix_fmt yuv420p -profile:v high -level 4.1 -c:a aac -b:a 192k -t 16 -movflags +faststart out/portal-itaipu-550mega-4x5.mp4
