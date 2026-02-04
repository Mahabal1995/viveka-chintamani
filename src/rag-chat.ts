import readline from "readline";
import { Chroma } from "@langchain/community/vectorstores/chroma";
import { Ollama, OllamaEmbeddings } from "@langchain/ollama";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import {SYSTEM_PROMPT, VEDANTIC_QUESTIONS_PATTERNS, VEDANTIC_ANSWERS_PATTERNS, ORIENTATION_QUESTION_PATTERNS} from "./constants.ts"

const llm = new Ollama({
  model: "llama3",
  temperature: 0.2,
});

const system_prompt = SYSTEM_PROMPT;

const prompt = ChatPromptTemplate.fromMessages([
  ["system", system_prompt],
  ["human", "{question}"],
]);

function isOrientationQuestion(query: string): boolean {
  const patterns = ORIENTATION_QUESTION_PATTERNS

  return patterns.some(p =>
    query.toLowerCase().includes(p)
  );
}


function isVedanticReasoningQuestion(query: string): boolean {
  const patterns = VEDANTIC_QUESTIONS_PATTERNS;

  return patterns.some((p) => query.toLowerCase().includes(p));
}

export async function getAnswer(question: string) {
  const trivialInputs = ["hi", "hello", "hey", ""];
  console.log("Question --> ", question);
  if (!question || trivialInputs.includes(question.trim().toLowerCase())) {
    return "Silence is also a teaching. Ask a Specific Question";
  }

  if (isVedanticReasoningQuestion(question)) {
    return vedanticReasoningAnswer();
  }

  const embeddings = new OllamaEmbeddings({
    model: "nomic-embed-text",
  });

  const vectorStore = await Chroma.fromExistingCollection(embeddings, {
    collectionName: "jnana-yoga",
    url: "http://localhost:8000",
  });

  try {
    const docs = await vectorStore.similaritySearch(question, 4);
    const context = docs.map((d) => d.pageContent).join("\n\n");

    const formatted = await prompt.format({ context, question });
    const response = await llm.invoke(formatted);

    console.log("\n📖 Answer:\n", response);
    return response;
  } catch (error) {
    console.log("Error in generating response....");
  }
}

function vedanticReasoningAnswer(): string {
  const responses = VEDANTIC_ANSWERS_PATTERNS;

  return responses[Math.floor(Math.random() * responses.length)];
}
