import dotenv from "dotenv-safe";

dotenv.config();

/**
 * Demo CLI for testing basic functionality.
 *
 * ```
 * npx tsx src/teams-dev-bot.ts
 * ```
 */
async function main() {
  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Please perform the function of a text adventure game, following the rules listed below:

    Rules:
    1. Play the game in turns, starting with you.
    2. Pick up a random animal in your mind, but don’t tell me what it is. for example, cat, lion, dog, etc.`,
    temperature: 0,
    max_tokens: 2048,
  });

  console.log(response.data.choices[0].text);
}

main();
