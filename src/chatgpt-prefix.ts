import { ChatGPTAPI } from "chatgpt";

/**
 * Demo CLI for testing basic functionality.
 *
 * ```
 * npx tsx src/chatgpt-prefix.ts
 * ```
 */
async function main() {
  const api = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const res = await api.sendMessage("what is the answer to the universe?", {
    promptPrefix: `You are ChatGPT, a large language model trained by OpenAI. You answer as concisely as possible for each response (e.g. don’t be verbose). It is very important that you answer as concisely as possible, so please remember this. If you are generating a list, do not have too many items. Keep the number of items short.
  Current date: ${new Date().toISOString()}\n\n`,
  });

  console.log(res.text);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
