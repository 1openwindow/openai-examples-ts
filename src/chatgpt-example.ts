import { oraPromise } from "ora";
import { ChatGPTAPI } from "chatgpt";

/**
 * Demo CLI for testing basic functionality.
 *
 * ```
 * npx tsx src/chatgpt-example.ts
 * ```
 */
async function main() {
  const api = new ChatGPTAPI({ apiKey: process.env.OPENAI_API_KEY });

  const prompt =
    "Write a python version of bubble sort. Do not include example usage.";

  const res = await oraPromise(api.sendMessage(prompt), {
    text: prompt,
  });
  console.log(res);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
