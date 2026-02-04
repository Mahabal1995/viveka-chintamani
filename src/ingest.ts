import { readFile } from "fs/promises";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { Chroma } from "@langchain/community/vectorstores/chroma";
import { OllamaEmbeddings } from "@langchain/ollama";

async function ingest() {
  console.log("📘 Loading Jnana Yoga text...");

  const text = await readFile("data/jnanayoga.txt", "utf-8");

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 800,
    chunkOverlap: 150,
  });

  const docs = await splitter.createDocuments([text]);

  console.log(`✂️ Split into ${docs.length} chunks`);

  const embeddings = new OllamaEmbeddings({
    model: "nomic-embed-text",
  });

  await Chroma.fromDocuments(docs, embeddings, {
    collectionName: "jnana-yoga",
    url: "http://localhost:8000", // <-- important
  });

  console.log("✅ Knowledge base created (persisted locally)");
}

ingest();
