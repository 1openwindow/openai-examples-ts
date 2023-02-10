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
  const res = await api.sendMessage(
    "write me a really really long essay on frogs",
    {
      timeoutMs: 2 * 60 * 1000,
    }
  );

  // print the full text at the end
  console.log(res.text);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
