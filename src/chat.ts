import dotenv from "dotenv-safe";

dotenv.config();

/**
 * Demo CLI for testing basic functionality.
 *
 * ```
 * npx tsx src/chat.ts
 * ```
 */
async function main() {
  const { Configuration, OpenAIApi } = require("azure-openai");

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
    azure: {
      apiKey: process.env.OPEN_AI_KEY,
      endpoint: process.env.OPEN_AI_ENDPOINT,
      deploymentName: 'gpt-35-turbo-xxx'
    },
  });
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "you are teams notification bot named kaka." },
      { role: "user", content: "Hello world" },
    ],
  });
  console.log(completion.data.choices[0].message);
}

main();
