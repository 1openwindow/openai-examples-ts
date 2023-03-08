import dotenv from "dotenv-safe";
import { encode, decode } from "gpt-3-encoder";

dotenv.config();

/**
 * Demo CLI for testing basic functionality.
 *
 * ```
 * npx tsx src/count-token.ts
 * ```
 */
async function main() {
  const str = "This is an example sentence to try encoding out on!";
  const encoded = encode(str);
  console.log("Encoded this string looks like: ", encoded);

  console.log("We can look at each token and what it represents");
  for (let token of encoded) {
    console.log({ token, string: decode([token]) });
  }

  const decoded = decode(encoded);
  console.log("We can decode it back into:\n", decoded);
}

main();
