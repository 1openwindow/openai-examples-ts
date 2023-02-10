import dotenv from "dotenv-safe";
import { oraPromise } from "ora";

dotenv.config();

/**
 * Demo CLI for testing basic functionality.
 *
 * ```
 * npx tsx src/codex-generation.ts
 * ```
 */
async function main() {
  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const response = await openai.createCompletion({
    model: "code-davinci-002",
    prompt:
      '"""\n1. Create a list of first names\n2. Create a list of last names\n3. Combine them randomly into a list of 100 full names\n"""',
    temperature: 0,
    max_tokens: 512,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });

  console.log(response.data.choices[0].text);
}

main();
