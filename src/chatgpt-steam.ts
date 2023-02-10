import dotenv from "dotenv-safe";
import { oraPromise } from "ora";
import { ChatGPTAPI } from "chatgpt";

dotenv.config();

/**
 * Demo CLI for testing basic functionality.
 *
 * ```
 * npx tsx src/chatgpt-steam.ts
 * ```
 */
async function main() {
  const api = new ChatGPTAPI({ apiKey: process.env.OPENAI_API_KEY });

  // timeout after 2 minutes (which will also abort the underlying HTTP request)
  const res = await api.sendMessage("Write a 100 word essay on frogs.", {
    // print the partial response as the AI is "typing"
    onProgress: (partialResponse) => console.log(partialResponse.text),
  });

  // print the full text at the end
  console.log(res.text);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
