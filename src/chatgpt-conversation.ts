import dotenv from "dotenv-safe";
import { oraPromise } from "ora";
import { ChatGPTAPI } from "chatgpt";

dotenv.config();

/**
 * Demo CLI for testing basic functionality.
 *
 * ```
 * npx tsx src/chatgpt-conversation.ts
 * ```
 */
async function main() {
  const api = new ChatGPTAPI({ apiKey: process.env.OPENAI_API_KEY });

  // send a message and wait for the response
  let res = await api.sendMessage("What is OpenAI?");
  console.log(res);
  console.log(res.text);

  // send a follow-up
  res = await api.sendMessage("Can you expand on that?", {
    conversationId: res.conversationId,
    parentMessageId: res.id,
  });
  console.log(res);
  console.log(res.text);

  // send another follow-up
  res = await api.sendMessage("What were we talking about?", {
    conversationId: res.conversationId,
    parentMessageId: res.id,
  });
  console.log(res);
  console.log(res.text);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
