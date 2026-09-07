import asyncio, json, sys, edge_tts
TEXT=sys.argv[1]; OUT=sys.argv[2]; VOICE=sys.argv[3] if len(sys.argv)>3 else "pt-BR-AntonioNeural"; RATE=sys.argv[4] if len(sys.argv)>4 else "+8%"
async def main():
    import os; c=edge_tts.Communicate(TEXT, VOICE, rate=RATE, proxy=os.environ.get("HTTPS_PROXY"))
    words=[]
    with open(OUT+".mp3","wb") as f:
        async for ch in c.stream():
            if ch["type"]=="audio": f.write(ch["data"])
            elif ch["type"]=="WordBoundary": words.append({"w":ch["text"],"t":ch["offset"]/1e7,"d":ch["duration"]/1e7})
    json.dump(words,open(OUT+".json","w"),ensure_ascii=False,indent=0)
    print(OUT, len(words), "words; last ends at", round(words[-1]["t"]+words[-1]["d"],2) if words else None)
asyncio.run(main())
