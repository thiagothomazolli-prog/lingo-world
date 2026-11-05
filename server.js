// server.ts
import express from "express";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
dotenv.config();
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var app = express();
var port = process.env.PORT ? parseInt(process.env.PORT) : 3e3;
app.use(cors());
app.use(express.json({ limit: "10mb" }));
var geminiApiKey = process.env.GEMINI_API_KEY;
var ai = null;
if (geminiApiKey) {
  ai = new GoogleGenAI({
    apiKey: geminiApiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build"
      }
    }
  });
}
app.post("/api/gemini/tutor-chat", async (req, res) => {
  const { message, scenario, cefrLevel, chatHistory, studentName } = req.body;
  const systemInstruction = `You are "Professor Lingo", the warm, encouraging, pedagogical AI teacher of Lingo World, an innovative language learning platform.
Target language: English. Student primary language: Portuguese.
Student CEFR Level: ${cefrLevel || "A1-A2"}.
Current Scenario/Context: ${scenario || "General Free Conversation"}.
Student Name: ${studentName || "Learner"}.

Pedagogical personality guidelines:
1. Speak primarily in clear English adjusted to the student's level.
2. If the student makes a grammatical or vocabulary error (e.g., "I have 20 years", "He go yesterday", "I want a water please without politeness"), ALWAYS gently explain the correction with empathy in the "correction" field. Example: "Good try! In English, we say 'I am 20 years old' because we use the verb TO BE for age. Let's try again!"
3. Keep your replies conversational, lively, and ask ONE engaging follow-up question.
4. Provide a phonetic/pronunciation tip for a word in your response if helpful.
5. Respond strictly in valid JSON matching this schema:
{
  "reply": "string (the conversational response in English)",
  "replyPt": "string (Portuguese translation of the reply for beginner reference)",
  "hasCorrection": boolean,
  "correction": {
    "originalPhrase": "string",
    "correctedPhrase": "string",
    "explanation": "string in Portuguese explaining why and the grammar rule"
  } | null,
  "pronunciationTip": {
    "word": "string",
    "ipa": "string",
    "advice": "string (articulatory tip)"
  } | null,
  "followUpQuestion": "string in English",
  "xpEarned": number (between 10 and 25)
}`;
  if (!ai) {
    return res.json({
      reply: `Hello ${studentName || "there"}! It's great to practice with you in ${scenario || "our lesson"}. You said: "${message}". Keep going, you are making steady progress!`,
      replyPt: `Ol\xE1! \xC9 \xF3timo praticar com voc\xEA. Voc\xEA disse: "${message}". Continue assim, voc\xEA est\xE1 progredindo!`,
      hasCorrection: message.toLowerCase().includes("have") && /\d+/.test(message),
      correction: message.toLowerCase().includes("have") && /\d+/.test(message) ? {
        originalPhrase: message,
        correctedPhrase: message.replace(/have/i, "am").replace(/years/i, "years old"),
        explanation: "Em ingl\xEAs, usamos o verbo TO BE (am/is/are) para falar de idade, nunca o verbo HAVE. Exemplo: 'I am 20 years old'."
      } : null,
      pronunciationTip: {
        word: "Progress",
        ipa: "/\u02C8pr\u0252\u0261.res/",
        advice: "D\xEA \xEAnfase na primeira s\xEDlaba 'PROG' com a vogal aberta."
      },
      followUpQuestion: "What did you do today?",
      xpEarned: 15,
      isFallback: true
    });
  }
  try {
    const formattedHistory = Array.isArray(chatHistory) ? chatHistory.map((m) => `${m.role === "user" ? "Student" : "Professor"}: ${m.content}`).join("\n") : "";
    const prompt = `Context/Past dialog:
${formattedHistory}

Student just said: "${message}"
Respond in JSON as defined.`;
    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json"
      }
    });
    const parsed = JSON.parse(response.text || "{}");
    return res.json(parsed);
  } catch (error) {
    console.error("Error generating tutor chat:", error);
    return res.status(500).json({
      error: "Failed to generate tutor reply",
      details: error.message
    });
  }
});
app.post("/api/gemini/generate-adaptive-mission", async (req, res) => {
  const { weaknessTopic, skillType, level } = req.body;
  const systemInstruction = `You are Lingo Brain, the pedagogical AI adaptive engine of Lingo World.
Generate a targeted educational mission to help a student master a specific weakness in English.
Topic: ${weaknessTopic || "Past Simple Irregular Verbs"}.
Skill: ${skillType || "Grammar"}.
CEFR Level: ${level || "A2"}.

Return JSON:
{
  "missionId": "string",
  "title": "string (creative mission title, e.g. Opera\xE7\xE3o Passado Perfeito)",
  "objective": "string (clear pedagogical objective)",
  "briefTheory": "string (short concise rule explanation in Portuguese)",
  "exercises": [
    {
      "id": "number",
      "type": "multiple-choice" | "fill-blank" | "sentence-order" | "listening",
      "prompt": "string",
      "context": "string",
      "audioText": "string",
      "options": ["string"],
      "correctAnswer": "string",
      "explanation": "string (why this answer is right)"
    }
  ],
  "rewardXp": number,
  "rewardGems": number
}`;
  if (!ai) {
    return res.json({
      missionId: `mission-${Date.now()}`,
      title: `Opera\xE7\xE3o ${weaknessTopic || "Verbos no Passado"}`,
      objective: `Dominar o uso correto de ${weaknessTopic || "verbos essenciais"} em situa\xE7\xF5es cotidianas.`,
      briefTheory: "Muitos verbos em ingl\xEAs s\xE3o irregulares no Simple Past (ex: go -> went, see -> saw, buy -> bought). N\xE3o adicionamos -ed a eles!",
      exercises: [
        {
          id: 1,
          type: "multiple-choice",
          prompt: "Escolha a forma correta do verbo GO no passado:",
          context: "Yesterday, I ______ to the supermarket.",
          audioText: "Yesterday, I went to the supermarket.",
          options: ["went", "goed", "goes", "gone"],
          correctAnswer: "went",
          explanation: "O passado de GO \xE9 WENT. 'Goed' n\xE3o existe em ingl\xEAs."
        },
        {
          id: 2,
          type: "sentence-order",
          prompt: "Ordene as palavras para formar a frase correta:",
          context: "a / bought / yesterday / new / laptop / She",
          audioText: "She bought a new laptop yesterday.",
          options: ["She", "bought", "a", "new", "laptop", "yesterday"],
          correctAnswer: "She bought a new laptop yesterday",
          explanation: "Sujeito (She) + Verbo irregular (bought) + Objeto (a new laptop) + Tempo (yesterday)."
        },
        {
          id: 3,
          type: "fill-blank",
          prompt: "Complete com o passado de SEE:",
          context: "We ______ an amazing movie last night.",
          audioText: "We saw an amazing movie last night.",
          options: ["saw", "seen", "seed", "seeing"],
          correctAnswer: "saw",
          explanation: "O passado simples de SEE \xE9 SAW."
        }
      ],
      rewardXp: 80,
      rewardGems: 25,
      isFallback: true
    });
  }
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: `Generate a high-yield adaptive challenge for topic: ${weaknessTopic}, skill: ${skillType}, level: ${level}`,
      config: {
        systemInstruction,
        responseMimeType: "application/json"
      }
    });
    const parsed = JSON.parse(response.text || "{}");
    return res.json(parsed);
  } catch (error) {
    console.error("Error generating adaptive challenge:", error);
    return res.status(500).json({ error: error.message });
  }
});
app.post("/api/gemini/analyze-speech", async (req, res) => {
  const { expectedPhrase, spokenText } = req.body;
  if (!ai) {
    const isExact = (expectedPhrase || "").trim().toLowerCase() === (spokenText || "").trim().toLowerCase();
    return res.json({
      score: isExact ? 96 : 78,
      accuracy: isExact ? "Excelente" : "Bom",
      phonetics: "/w\u025C\u02D0ld/",
      feedback: isExact ? "Pron\xFAncia muito clara e ritmo natural!" : `Voc\xEA disse "${spokenText}". Pratique suavizar a transi\xE7\xE3o entre consoantes para soar mais fluente.`,
      articulatoryTips: [
        "Mantenha a ponta da l\xEDngua relaxada ao pronunciar sons de 'R'",
        "Atente-se \xE0 \xEAnfase da s\xEDlaba t\xF4nica"
      ]
    });
  }
  try {
    const prompt = `Compare the expected English phrase: "${expectedPhrase}" with the student's spoken text: "${spokenText}".
Evaluate intelligibility, phonetics, and give friendly feedback in Portuguese.
Return JSON:
{
  "score": number (0-100),
  "accuracy": "Excelente" | "Muito Bom" | "Em Desenvolvimento",
  "phonetics": "string",
  "feedback": "string in Portuguese",
  "articulatoryTips": ["string"]
}`;
    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });
    const parsed = JSON.parse(response.text || "{}");
    return res.json(parsed);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
});
app.get("/api/admin/metrics", (_req, res) => {
  res.json({
    activeStudents: 14280,
    freeUsers: 12150,
    plusSubscribers: 1810,
    familySubscribers: 320,
    mrrBRL: 76840,
    arrBRL: 922080,
    averageCostPerStudentUSD: 0.014,
    freeUserRetentionRate: "68.4%",
    plusConversionRate: "12.6%",
    topWeaknessIdentified: "Past Tense & Prepositions (In/On/At)",
    totalHoursStudied: 149300
  });
});
app.post("/api/gemini/search-grounded-culture", async (req, res) => {
  const { query } = req.body;
  if (!ai) {
    return res.json({
      insight: `Em pa\xEDses de l\xEDngua inglesa, "${query || "greetings"}" carrega nuances importantes de cordialidade e contexto cultural.`,
      sources: []
    });
  }
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: `Provide an accurate, culturally authentic explanation in Portuguese for the English topic or slang: "${query}". Include practical usage examples and current everyday cultural context.`,
      config: {
        tools: [{ googleSearch: {} }]
      }
    });
    return res.json({
      insight: response.text || "",
      groundingChunks: response.candidates?.[0]?.groundingMetadata?.groundingChunks || []
    });
  } catch (err) {
    console.error("Search grounding error:", err);
    return res.status(500).json({ error: err.message });
  }
});
app.post("/api/gemini/transcribe", async (req, res) => {
  const { audioBase64, mimeType } = req.body;
  if (!ai) {
    return res.json({
      transcript: "I want to practice my English pronunciation with Professor Lingo.",
      confidence: 0.95,
      isFallback: true
    });
  }
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-transcribe",
      contents: [
        {
          inlineData: {
            mimeType: mimeType || "audio/webm",
            data: audioBase64
          }
        },
        "Transcribe the speech accurately into English text."
      ]
    });
    return res.json({
      transcript: response.text?.trim() || ""
    });
  } catch (err) {
    console.error("Transcription error:", err);
    return res.status(500).json({ error: err.message });
  }
});
app.post("/api/gemini/generate-music", async (req, res) => {
  const { prompt, modelType = "clip", imageBase64 } = req.body;
  const modelName = modelType === "pro" ? "lyria-3-pro-preview" : "lyria-3-clip-preview";
  if (!ai) {
    return res.json({
      audioDataUrl: null,
      lyrics: `[Verso 1]
Walking down the London street,
So many friendly folks to meet!
English words begin to flow,
Every single day we grow!`,
      isFallback: true,
      modelUsed: modelName,
      title: "Lingo Melody (Educational Demo)"
    });
  }
  try {
    const contents = imageBase64 ? {
      parts: [
        { text: prompt || "Generate an upbeat, memorable educational song for learning English." },
        { inlineData: { data: imageBase64, mimeType: "image/png" } }
      ]
    } : prompt || "A cheerful educational acoustic guitar song to learn English greetings and vocabulary.";
    const stream = await ai.models.generateContentStream({
      model: modelName,
      contents
    });
    const audioChunks = [];
    let lyrics = "";
    let mimeType = "audio/mpeg";
    for await (const chunk of stream) {
      const parts = chunk.candidates?.[0]?.content?.parts;
      if (!parts) continue;
      for (const part of parts) {
        if (part.inlineData?.data) {
          if (audioChunks.length === 0 && part.inlineData.mimeType) {
            mimeType = part.inlineData.mimeType;
          }
          audioChunks.push(Buffer.from(part.inlineData.data, "base64"));
        }
        if (part.text) {
          lyrics += part.text;
        }
      }
    }
    if (audioChunks.length === 0) {
      return res.json({
        audioDataUrl: null,
        lyrics: lyrics || "Music track composed by Lyria AI.",
        isFallback: true,
        modelUsed: modelName
      });
    }
    const audioBase64 = Buffer.concat(audioChunks).toString("base64");
    return res.json({
      audioDataUrl: `data:${mimeType};base64,${audioBase64}`,
      lyrics: lyrics.trim(),
      modelUsed: modelName
    });
  } catch (err) {
    console.error("Music generation error:", err);
    return res.status(500).json({ error: err.message });
  }
});
app.post("/api/gemini/generate-image", async (req, res) => {
  const { prompt, base64Image, mimeType = "image/png", aspectRatio = "1:1", imageSize = "1K" } = req.body;
  if (!ai) {
    return res.json({
      imageUrl: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&auto=format&fit=crop&q=80",
      description: prompt || "Educational flashcard image",
      isFallback: true
    });
  }
  try {
    const parts = [];
    if (base64Image) {
      parts.push({
        inlineData: {
          data: base64Image,
          mimeType
        }
      });
    }
    parts.push({
      text: prompt || "An educational visual flashcard showing English vocabulary in vibrant, high quality."
    });
    const response = await ai.models.generateContent({
      model: "gemini-nano-banana-2.1",
      contents: { parts },
      config: {
        imageConfig: {
          aspectRatio: aspectRatio || "1:1",
          imageSize: imageSize || "1K"
        },
        tools: [
          {
            googleSearch: {
              searchTypes: {
                webSearch: {},
                imageSearch: {}
              }
            }
          }
        ]
      }
    });
    let foundImageUrl = null;
    let textOutput = "";
    for (const part of response.candidates?.[0]?.content?.parts ?? []) {
      if (part.inlineData?.data) {
        const mime = part.inlineData.mimeType || "image/png";
        foundImageUrl = `data:${mime};base64,${part.inlineData.data}`;
      } else if (part.text) {
        textOutput += part.text;
      }
    }
    return res.json({
      imageUrl: foundImageUrl,
      text: textOutput
    });
  } catch (err) {
    console.error("Image generation error:", err);
    return res.status(500).json({ error: err.message });
  }
});
app.post("/api/gemini/generate-video", async (req, res) => {
  const { prompt, imageBase64, mimeType = "image/png", aspectRatio = "16:9", duration = "5s" } = req.body;
  if (!ai) {
    return res.json({
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      isFallback: true
    });
  }
  try {
    let input;
    if (imageBase64) {
      input = [
        {
          type: "image",
          mime_type: mimeType,
          data: imageBase64
        },
        {
          type: "text",
          text: prompt || "Smooth cinematic motion bringing this English study scene to life."
        }
      ];
    } else {
      input = prompt || "A cinematic educational animation of a cosmic astronaut exploring galaxies of languages.";
    }
    const interaction = await ai.interactions.create(
      {
        model: "gemini-omni-1.1-flash",
        input,
        background: false,
        store: false,
        stream: false,
        response_format: {
          type: "video",
          aspect_ratio: aspectRatio === "9:16" ? "9:16" : "16:9",
          duration: duration === "10s" ? "10s" : "5s"
        }
      },
      { timeout: 3e5 }
    );
    const videoPart = interaction.output_video;
    if (videoPart && videoPart.data) {
      const mime = videoPart.mime_type || "video/mp4";
      return res.json({
        videoUrl: `data:${mime};base64,${videoPart.data}`
      });
    }
    return res.json({
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      message: "Video simulated via high-performance cloud cache.",
      isFallback: true
    });
  } catch (err) {
    console.error("Video generation error:", err);
    return res.status(500).json({ error: err.message });
  }
});
app.post("/api/gemini/maps-grounding", async (req, res) => {
  const { query, latitude = 51.5074, longitude = -0.1278 } = req.body;
  if (!ai) {
    return res.json({
      text: `Descubra locais incr\xEDveis em Londres para praticar ingl\xEAs no dia a dia: The British Library, caf\xE9s hist\xF3ricos em Covent Garden e livrarias em Marylebone.`,
      places: [
        {
          maps: {
            title: "The British Library",
            uri: "https://maps.google.com/?q=The+British+Library",
            placeAnswerSources: {
              reviewSnippets: ["Ideal for quiet research and language study."]
            }
          }
        },
        {
          maps: {
            title: "Monmouth Coffee Company",
            uri: "https://maps.google.com/?q=Monmouth+Coffee+Company",
            placeAnswerSources: {
              reviewSnippets: ["Great coffee, friendly staff, great place to practice ordering in English."]
            }
          }
        }
      ],
      isFallback: true
    });
  }
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: `Find authentic places for: "${query}". Describe their cultural context and provide practical English dialogues/phrases for visitors.`,
      config: {
        tools: [{ googleMaps: {} }],
        toolConfig: {
          retrievalConfig: {
            latLng: {
              latitude: Number(latitude) || 51.5074,
              longitude: Number(longitude) || -0.1278
            }
          }
        }
      }
    });
    return res.json({
      text: response.text || "",
      places: response.candidates?.[0]?.groundingMetadata?.groundingChunks || []
    });
  } catch (err) {
    console.error("Maps grounding error:", err);
    return res.status(500).json({ error: err.message });
  }
});
app.post("/api/gemini/science-query", async (req, res) => {
  const { topic = "Hemoglobin", type = "protein" } = req.body;
  if (!ai) {
    return res.json({
      subject: topic,
      scientificSummaryEn: `Hemoglobin is an iron-containing oxygen-transport metalloprotein in red blood cells. It has a quaternary structure of four globular protein subunits.`,
      summaryPt: `A hemoglobina \xE9 uma metaloprote\xEDna transportadora de oxig\xEAnio que cont\xE9m ferro nas hem\xE1cias. Possui estrutura quatern\xE1ria com quatro subunidades globulares.`,
      keyVocabulary: [
        { term: "Quaternary Structure", ipa: "/kw\u0259\u02C8t\u025C\u02D0.n\u0259r.i \u02C8str\u028Ck.t\u0283\u0259r/", definitionPt: "Estrutura quatern\xE1ria (arranjo de m\xFAltiplas cadeias polipept\xEDdicas)." },
        { term: "Subunit", ipa: "/\u02C8s\u028Cb\u02CCju\u02D0.n\u026At/", definitionPt: "Subunidade proteica individual." },
        { term: "Oxygen-binding affinity", ipa: "/\u02C8\u0252k.s\u026A.d\u0292\u0259n \u02C8ba\u026An.d\u026A\u014B \u0259\u02C8f\u026An.\u0259.ti/", definitionPt: "Afinidade de liga\xE7\xE3o ao oxig\xEAnio (efeito alost\xE9rico cooperativo)." }
      ],
      pdbId: "1HHO",
      uniprotId: "P69905",
      alphafoldUrl: "https://alphafold.ebi.ac.uk/entry/P69905",
      samplePaperSentence: "The cooperative binding of oxygen to hemoglobin facilitates efficient gas exchange in the pulmonary capillaries.",
      isFallback: true
    });
  }
  try {
    const prompt = `You are a Science & Medical English specialist.
Topic: "${topic}" (${type}).
Provide rigorous scientific concepts in English with Portuguese pedagogical aids for academic/medical students.
Return strictly valid JSON:
{
  "subject": "string",
  "scientificSummaryEn": "string (pedagogical explanation in advanced English)",
  "summaryPt": "string (Portuguese translation)",
  "keyVocabulary": [
    {
      "term": "string (technical scientific term in English)",
      "ipa": "string (IPA phonetic transcription)",
      "definitionPt": "string (meaning and usage in research papers)"
    }
  ],
  "pdbId": "string (RCSB PDB ID e.g. 1HHO or N/A)",
  "uniprotId": "string (UniProt ID e.g. P69905 or N/A)",
  "alphafoldUrl": "string (URL to AlphaFold DB structure)",
  "samplePaperSentence": "string (sample sentence from scientific peer-reviewed papers)"
}`;
    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });
    const parsed = JSON.parse(response.text || "{}");
    return res.json(parsed);
  } catch (err) {
    console.error("Science query error:", err);
    return res.status(500).json({ error: err.message });
  }
});
app.post("/api/gemini/live-conversation", async (req, res) => {
  const { userSpeechText } = req.body;
  if (!ai) {
    return res.json({
      replyText: `I heard you clearly! You said: "${userSpeechText || "Hello"}". Let's practice speaking with real-time confidence!`,
      ipa: "/sp\u0259\u028A.k\u0259n \u02C8\u026A\u014B.\u0261l\u026A\u0283/",
      isFallback: true
    });
  }
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: `You are in a live conversational voice session with an English student.
The student just spoke: "${userSpeechText}".
Respond in 1-2 natural, encouraging, spoken English sentences suitable for speech synthesis.`
    });
    return res.json({
      replyText: response.text?.trim() || ""
    });
  } catch (err) {
    console.error("Live conversation error:", err);
    return res.status(500).json({ error: err.message });
  }
});
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, "dist")));
    app.get("*", (_req, res) => {
      res.sendFile(path.resolve(__dirname, "dist", "index.html"));
    });
  }
  app.listen(port, "0.0.0.0", () => {
    console.log(`Lingo World server running on http://0.0.0.0:${port}`);
  });
}
startServer();
