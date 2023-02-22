import dotenv from "dotenv-safe";
import { oraPromise } from "ora";

dotenv.config();

/**
 * Demo CLI for testing basic functionality.
 *
 * ```
 * npx tsx src/image.ts
 * ```
 */
async function main() {
  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const response = await openai.createImage({
    prompt: `技术不仅仅是一种工具，它是改变世界的手段。技术进步的速度正在加快，如果我们要继续作为文明前进，我们必须拥抱它。创新不仅仅是一个流行词，它是进步的生命力。我们必须不断努力推动可能性的边界，为世界的问题创造新的更好的解决方案。技术改变我们生活的潜力是无限的，从太空探索到可持续的能源解决方案。我们不能害怕冒险，必须推动可能性的极限，因为只有这样，我们才能取得伟大的成就。`,
    //prompt: "generate a pixal game character. the background is transparent. the style is carton, like the game 'super mario'.",
    n: 1,
    size: "512x512",
  });

  console.log(response.data.data);
}

main();
