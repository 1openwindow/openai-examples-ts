import dotenv from "dotenv-safe";

dotenv.config();

/**
 * Demo CLI for testing basic functionality.
 *
 * ```
 * npx tsx src/text.ts
 * ```
 */
async function main() {
  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
    // azure: {
    //   apiKey: process.env.OPEN_AI_KEY,
    //   endpoint: process.env.OPEN_AI_ENDPOINT,
    //   deploymentName: 'text-davinci-003-xxx'
    // },
  });
  const openai = new OpenAIApi(configuration);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "How to write a Teams app",
    temperature: 0,
    max_tokens: 2048,
  });

  console.log(response.data.choices[0].text);
}

main();
