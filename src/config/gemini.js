console.log("ENV DEBUG:", import.meta.env); // Debugging all env variables

const apiKey = import.meta.env.VITE_GEMINI_API_KEY; // Fetch API Key

if (!apiKey || apiKey === "undefined") {
    console.error("❌ API Key is missing! Check your .env file and restart the server.");
    throw new Error("API Key is missing! Check your .env file and restart the server.");
} else {
    console.log("✅ Loaded API Key:", apiKey);
}

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(apiKey);
console.log("hi");

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro-latest",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

const safetySettings = [
    { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
    { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
    { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
    { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
];

async function run(prompt) {
    try {
        const chatSession = model.startChat({
            generationConfig,
            safetySettings,
            history: [],
        });

        const result = await chatSession.sendMessage(prompt);
        console.log("AI Response:", result.response.text());
        return result.response.text();
    } catch (error) {
        console.error("❌ Error sending message:", error);
        return "Error generating response.";
    }
}

export default run;
