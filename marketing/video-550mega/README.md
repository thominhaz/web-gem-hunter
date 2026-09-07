# Vídeo de anúncio — Plano 550 Mega por R$ 109,90 (Meta Ads)

Motion graphics renderizado quadro a quadro a partir de `ad.html` (Chromium via Playwright),
com locução em pt-BR e trilha instrumental. Cores e logo seguem a identidade da Portal Itaipu
(logo oficial retirado de portalitaipu.com.br, versão branca gerada em `logo-white.png`).

## Arquivos finais (`out/`)

| Arquivo | Uso |
|---|---|
| `portal-itaipu-550mega-9x16.mp4` | Reels, Stories, Feed (Advantage+ corta para 4:5 sozinho) — 1080x1920, 16 s, H.264 + AAC |
| `portal-itaipu-550mega-4x5.mp4` | Feed do Facebook/Instagram quando quiser subir o corte manualmente — 1080x1350 |
| `capa-preco-*.jpg` | Miniatura sugerida (frame do preço) |

## Roteiro (16 s)

| Tempo | Tela | Locução |
|---|---|---|
| 0,0–1,9 s | SUA INTERNET **TRAVA?** / A gente resolve isso pra você. | "Sua internet trava?" |
| 1,9–4,8 s | Contador 0 → **550 MEGA** + chip "Roteador Wi-Fi 6 incluso" | "Internet fibra de quinhentos e cinquenta mega!" |
| 4,8–8,3 s | POR APENAS **R$ 109,90** por mês / 550 mega de fibra na sua casa | "Por apenas cento e nove e noventa por mês." |
| 8,3–10,7 s | Selo **INSTALAÇÃO GRÁTIS** + chip "Suporte local 24h" | "E a instalação é grátis!" |
| 10,7–16 s | Logo, "Tenha conexão de verdade.", botão WhatsApp, (45) 3559-1665, site | "Chama a gente no WhatsApp. Portal Itaipu. Tenha conexão de verdade." |

## Copy sugerida para o Gerenciador de Anúncios

- **Texto principal:** Internet fibra de 550 mega por R$ 109,90/mês, com instalação grátis e roteador Wi-Fi 6 incluso. Suporte local, gente da nossa região. Chama a gente no WhatsApp e escolha o plano ideal pra sua casa.
- **Título:** 550 mega por R$ 109,90/mês
- **Descrição:** Instalação grátis + Wi-Fi 6 incluso
- **CTA:** Enviar mensagem pelo WhatsApp (objetivo: Engajamento → Mensagens, ou Leads via WhatsApp)
- Hashtags/legenda orgânica (se reaproveitar como Reel): #PortalItaipu #ConexaoDeVerdade #FibraOptica #OesteDoParana

Confirmar antes de publicar: preço, velocidade, "instalação grátis", "Wi-Fi 6 incluso" e "Suporte 24h" (valores vieram do briefing e do site).

## Variações com outros gatilhos (A/B)

Mesmo motor (`ad2.html` + `build.py`), definidas em `variants/*.json`. Rode `python3 build.py variants/<arquivo>.json` para regenerar uma variação (`stills` como 2º argumento só gera quadros de teste).

### V2 — Oferta direta — `out/v2-oferta-direta-9x16.mp4` (14 s)

Ancoragem de preço: o primeiro quadro já é "550 MEGA por R$ 109,90". Sem gancho de dor; quem está comparando preço decide em 1 s.

| Tempo | Cena | Locução |
|---|---|---|
| 0.0–3.7 s | 550 MEGA + R$ 109,90 por mês + chip "Roteador Wi-Fi 6 incluso" | "Quinhentos e cinquenta mega por cento e nove e noventa por mês!" |
| 3.7–6.2 s | Selo INSTALAÇÃO GRÁTIS + chip "Fique online em até 24h" | "E a instalação é grátis!" |
| 6.2–9.8 s | Contador 0 → 550 MEGA + chip "Suporte local 24h" | "Fibra óptica de verdade, com suporte de gente daqui." |
| 9.8–14.2 s | Logo, "Tenha conexão de verdade.", botão WhatsApp, (45) 3559-1665 | "Chama a gente no WhatsApp. Portal Itaipu." |

### V3 — Gente daqui — `out/v3-gente-daqui-9x16.mp4` (16 s)

Prova social e pertencimento: "Internet de gente daqui", 20 anos, 9 cidades, suporte técnico local. Diferencia de operadora grande.

| Tempo | Cena | Locução |
|---|---|---|
| 0.0–2.4 s | INTERNET DE / GENTE DAQUI — Há 20 anos conectando o oeste do Paraná. | "Internet de gente daqui." |
| 2.4–7.0 s | 20 anos de telecomunicações; 9 cidades do oeste do Paraná; 24h suporte técnico local | "Vinte anos de telecomunicações, nove cidades e suporte técnico local." |
| 7.0–11.8 s | 550 MEGA + R$ 109,90 por mês + chip "Instalação grátis" | "Quinhentos e cinquenta mega por cento e nove e noventa por mês, com instalação grátis." |
| 11.8–16.2 s | Logo, "Tenha conexão de verdade.", botão WhatsApp, (45) 3559-1665 | "Chama a gente no WhatsApp. Portal Itaipu." |

### V4 — Perda + urgência — `out/v4-perda-urgencia-9x16.mp4` (17 s)

Aversão à perda ("Você ainda paga por internet que trava?") e urgência ("Fique online em até 24h").

| Tempo | Cena | Locução |
|---|---|---|
| 0.0–2.8 s | VOCÊ AINDA PAGA / POR INTERNET / QUE TRAVA? — Isso tem conserto. | "Você ainda paga por internet que trava?" |
| 2.8–6.4 s | 550 MEGA + R$ 109,90 por mês + chip "Roteador Wi-Fi 6 incluso" | "Quinhentos e cinquenta mega por cento e nove e noventa por mês." |
| 6.4–8.9 s | Selo INSTALAÇÃO GRÁTIS + chip "Suporte local 24h" | "E a instalação é grátis!" |
| 8.9–12.3 s | FIQUE ONLINE / EM ATÉ 24H — Sem esperar semanas pela instalação. | "Contrata hoje e fica online em até vinte e quatro horas." |
| 12.3–16.7 s | Logo, "Tenha conexão de verdade.", botão WhatsApp, (45) 3559-1665 | "Chama a gente no WhatsApp. Portal Itaipu." |

Sugestão de teste: rodar as 4 versões no mesmo conjunto de anúncios com orçamento igual por 3–4 dias e manter as 2 de menor custo por conversa iniciada no WhatsApp.

## Regenerar (V1)

```bash
pip install imageio-ffmpeg edge-tts pillow numpy   # ffmpeg com libx264/aac + TTS
export FFMPEG=$(python3 -c "import imageio_ffmpeg; print(imageio_ffmpeg.get_ffmpeg_exe())")
# 1) locução (um trecho por cena) — edge-tts, voz pt-BR-AntonioNeural
i=0; for s in "Sua internet trava?" "Internet fibra de quinhentos e cinquenta mega!" \
  "Por apenas cento e nove e noventa por mês." "E a instalação é grátis!" \
  "Chama a gente no WhatsApp." "Portal Itaipu. Tenha conexão de verdade."; do
  python3 tts.py "$s" seg$i pt-BR-AntonioNeural "+5%"; i=$((i+1)); done
for i in 0 1 2 3 4 5; do $FFMPEG -y -i seg$i.mp3 -af "silenceremove=start_periods=1:start_threshold=-45dB,areverse,silenceremove=start_periods=1:start_threshold=-45dB,areverse" -ar 44100 -ac 1 seg$i.wav; done
# 2) trilha instrumental sintetizada (126 BPM, 16,4 s)
python3 music.py
# 3) vídeo sem áudio (480 quadros, ~6 min)
DUR=16 OUT=video-silent.mp4 TIMELINE='{"hook":[0,1.9],"speed":[1.9,4.8],"price":[4.8,8.3],"install":[8.3,10.7],"cta":[10.7,16.0]}' node capture.js
# 4) mixagem + mux
./mix.sh
```

Para trocar textos, preço ou tempos, edite `ad.html` (a linha `let T={...}` define a duração de cada cena) e rode os passos 3 e 4.
Para ver as cenas sem renderizar: abra `ad.html` no navegador e chame `seek(segundos)` no console.
