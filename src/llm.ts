import { Ollama } from "@langchain/ollama";

export const llm = new Ollama({
  model: "llama3",
  temperature: 0.2,
});
