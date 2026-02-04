// src/server.ts
import express from 'express';
import bodyParser from 'body-parser';
import { getAnswer } from './rag-chat.ts';
import cors from "cors";


const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/api/chat', async (req, res) => {
  const { question } = req.body;
  if (!question) return res.status(400).json({ error: "Question is required" });

  const answer = await getAnswer(question); // reuse your RAG chat function
  res.json({ answer });
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
