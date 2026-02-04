# viveka-chintamani

# 🧘 Viveka Chintāmaṇi  
*A contemplative AI companion inspired by Swami Vivekananda’s Jnana Yoga*

---

## 🌸 Vision

**Viveka Chintāmaṇi** is not a conventional chatbot.

It is an attempt to create a **digital space of inquiry**, inspired by **Swami Vivekananda’s lectures on Jnana Yoga**, where the seeker is encouraged not merely to collect information, but to **discriminate truth from illusion**.

This project explores how **Generative AI**, when restrained by wisdom and intent, can assist a sincere spiritual aspirant in reflection, self-inquiry, and clarity — without replacing direct realization.

> *“Jnana Yoga is the path of reason, inquiry, and discrimination — not belief.”*  
> — Swami Vivekananda

---

## 🪔 What this project is

- A **local, privacy-preserving AI system**  
- Grounded **strictly in Swami Vivekananda’s _Jnana Yoga_ text**
- Designed to answer **only from the provided source**
- Built to **respect silence**, inquiry, and restraint
- Free from hallucinated spirituality or motivational fluff

The chatbot responds in a **minimal, Upanishadic style**, reflecting the spirit of Jnana Yoga — concise, sharp, and inward-turning.

---

## 🚫 What this project is NOT

- ❌ Not a guru  
- ❌ Not a replacement for study, contemplation, or realization  
- ❌ Not a generic AI assistant  
- ❌ Not a source of new doctrines or opinions  

When the text does not address a question, the system **admits silence** — because silence itself is a teaching.

---

## 🧠 Core Principles

### 1. **Viveka (Discrimination)**
The system answers only when knowledge is grounded in the text.  
Statements are not rewarded; **questions are honored**.

### 2. **Vairagya (Detachment)**
No emotional validation, flattery, or encouragement of egoic understanding.

### 3. **Shraddha (Respect for Truth)**
Answers are restrained, factual, and rooted in Vivekananda’s teachings.

### 4. **Mauna (Meaningful Silence)**
Greetings, declarations, and vague prompts may receive silence — by design.

---

## 📚 Source of Knowledge

- **Primary Text:** *Jnana Yoga* by Swami Vivekananda  
- Text is ingested, chunked, embedded, and retrieved locally
- No external internet knowledge is used during inference

---

## 🛠️ Technical Philosophy (Brief)

- **Local LLM via Ollama** — no cloud dependency
- **ChromaDB** for local vector storage
- **RAG (Retrieval-Augmented Generation)** to prevent hallucinations
- **Node.js + TypeScript** backend
- **Minimal spiritual UI** designed to elevate attention, not distract it

Technology here is a **servant**, not the center.

---

## 🖼️ User Experience

- Calm, uncluttered interface
- Warm saffron / orange tones
- Image of **Swami Vivekananda** as a reminder of lineage
- Large, readable text for contemplation
- Chat designed for **slow inquiry**, not rapid consumption

---

## 🧘 Intended Audience

- Spiritual seekers
- Students of Vedanta
- Practitioners of Jnana Yoga
- Developers exploring **ethical, intentional GenAI**
- Anyone curious about blending **ancient wisdom with modern tools**

---

## 🌱 A Note on Usage

Use this tool:
- Slowly
- Thoughtfully
- With questions born of sincerity

Do not expect entertainment.  
Expect **mirrors**.

> *“Truth does not change according to our ability to stomach it.”*  
> — Swami Vivekananda

---
Absolutely 🙏
Below is a **complete, end-to-end “Installation & Run” section** you can drop into your `README.md` as-is.
It assumes **nothing**, is **Windows-friendly**, and stays clean, minimal, and intentional.

You can paste this **after the Vision / Philosophy sections**.

---

````markdown
## ⚙️ Installation & Running Locally

Viveka Chintāmaṇi runs **entirely on your local machine**.  
No cloud APIs. No external data sharing. No hidden calls.

This section walks you from **zero → working system**.

---

## 🧩 System Requirements

### Required
- **Node.js** ≥ 18  
  👉 https://nodejs.org
- **Python** 3.11  
  👉 https://www.python.org/downloads/
- **Ollama** (local LLM runtime)  
  👉 https://ollama.com

### Optional but Recommended
- Git
- A quiet mind 🙂

---

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Mahabal1995/viveka-chintamani.git
cd viveka-chintamani
````

---

## 2️⃣ Install Backend Dependencies

From the project root:

```bash
npm install
```

> This installs LangChain, Chroma client, and all required tooling.

---

## 3️⃣ Install & Start Ollama

### Install Ollama

Download and install from:
👉 [https://ollama.com](https://ollama.com)

### Pull Required Models

```bash
ollama pull llama3
ollama pull nomic-embed-text
```

### Start Ollama Server

```bash
ollama serve
```

Keep this terminal **running**.

---

## 4️⃣ Prepare the Source Text

1. Create a folder named `data/` (if it doesn’t exist)
2. Place the **Jnana Yoga** text inside it
   (plain `.txt` format recommended)

Example:

```
data/
 └── jnana-yoga.txt
```

---

## 5️⃣ Create the Knowledge Base (Ingestion)

This step:

* Splits the text
* Generates embeddings
* Stores them locally using ChromaDB

Run:

```bash
npx ts-node src/ingest.ts
```

Successful output looks like:

```
📘 Loading Jnana Yoga text...
✂️ Split into XXX chunks
✅ Knowledge base created (persisted locally)
```

> This step is required **only once**, unless the text changes.

---

## 6️⃣ Start the Backend Server

In a new terminal (project root):

```bash
npx ts-node src/server.ts
```

The API will run locally, typically at:

```
http://localhost:3000
```

---

## 7️⃣ Run the UI

Navigate to the UI folder:

```bash
cd jnana-yoga-ui
npm install
npm start
```

Open your browser at the displayed local URL.

You should now see **Viveka Chintāmaṇi** —
a calm, contemplative interface with Swami Vivekananda and the chat window.

---

## 🧘 How to Use

* Ask **specific, sincere questions**
* Prefer inquiry over assertion
* Expect concise, text-grounded answers
* Accept silence when appropriate

This system is designed for **Jnana Yoga**, not casual conversation.

---

## 🛡️ Privacy & Ethics

* All models run locally
* No queries leave your machine
* No telemetry or logging
* No internet dependency during inference

Your inquiry remains **entirely your own**.

---

## 🌸 Final Note

This project is best approached slowly.

Read answers carefully.
Pause often.
Let understanding mature.

> *“Truth is one; sages call it by many names.”*
> — Rig Veda


## 🙏 Closing

**Viveka Chintāmaṇi** is offered in humility —  
as an experiment, a learning journey, and a tribute.

If it encourages even one moment of deeper inquiry,  
its purpose is fulfilled.

🕉️
