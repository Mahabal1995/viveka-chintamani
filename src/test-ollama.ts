import { Ollama } from "@langchain/ollama";

const llm = new Ollama({
  model: "llama3",
});

async function test() {
  const res = await llm.invoke(
    "In one sentence, explain Jnana Yoga."
  );
  console.log(res);
}

test();
