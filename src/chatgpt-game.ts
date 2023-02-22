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
  const prompt = require("prompt-sync")();

  const api = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY,
    completionParams: {
      temperature: 0.7,
      presence_penalty: 0.6,
      frequency_penalty: 0.5,
      user: "game player",
    },
  });

  const promptString = `I want you to act as a game player. this game is called guess animal. I wnat you randomly pick up a animal in your mind but do not tell me what animal is. 
  then you give me 5 clues. after this I will give you my answer, for example cat, dog, fish etc. At last, you tell me correct or incorrect. 
  if I am wrong, you will give me three more clues until I answer the right question. Each clues start with a new line. let us start.`;

  let res = await oraPromise(api.sendMessage(promptString), {
    text: promptString,
  });
  console.log(res.text);

  do {
    let answer = prompt("You: ");

    res = await api.sendMessage(answer, {
      conversationId: res.conversationId,
      parentMessageId: res.id,
    });
    console.log(res.text);
  } while (res.text.indexOf("correct") > 0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
