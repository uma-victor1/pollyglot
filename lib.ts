import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  // defaults to process.env["ANTHROPIC_API_KEY"]
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export const translate = async (text: string, targetLanguage: string) => {
  const msg = await anthropic.messages.create({
    model: "claude-3-7-sonnet-20250219",
    max_tokens: 2000,
    temperature: 1,
    system:
      "You are an expert translator that helps translate the English language to other languages. Just reply with only the converted language",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: `convert "${text}" to ${targetLanguage}`,
          },
        ],
      },
    ],
  });
  return msg.content[0];
};
