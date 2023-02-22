import dotenv from "dotenv-safe";

dotenv.config();

/**
 * Demo CLI for testing basic functionality.
 *
 * ```
 * npx tsx src/embedding.ts
 * ```
 */
async function main() {
  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createEmbedding({
    model: "text-embedding-ada-002",
    input: "The food was delicious and the waiter...",
  });

  console.log(response);
}

main();
