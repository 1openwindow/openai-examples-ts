import dotenv from "dotenv-safe";
import { oraPromise } from "ora";

dotenv.config();

/**
 * Demo CLI for testing basic functionality.
 *
 * ```
 * npx tsx src/codex-translation.ts
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
    prompt: `
            #JavaScript to Python:
            JavaScript:
dogs = ["bill", "joe", "carl"]
car = []
dogs.forEach((dog) {
    car.push(dog);
});

        Python:`,
    temperature: 0,
    max_tokens: 128,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: ["#"],
  });

  console.log(response.data.choices[0].text);
}

main();
