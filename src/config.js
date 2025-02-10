/** OpenAI config */
if (!import.meta.env.VITE_OPENAI_API_KEY) throw new Error("OpenAI API key is missing or invalid.");
export const openAIApiKey = import.meta.env.VITE_OPENAI_API_KEY;