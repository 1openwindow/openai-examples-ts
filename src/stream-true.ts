import dotenv from "dotenv-safe";
import https from "https";

dotenv.config();

/**
 * Demo CLI for testing basic functionality.
 *
 * ```
 * npx tsx src/example.ts
 * ```
 */
async function main() {
  const prompt = "Sample prompt. What's 2+2?";

  const req = https.request(
    {
      hostname: "api.openai.com",
      port: 443,
      path: "/v1/completions",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.OPENAI_API_KEY,
      },
    },
    function (res) {
      res.on("data", (chunk) => {
        console.log("BODY: " + chunk);
      });
      res.on("end", () => {
        console.log("No more data in response.");
      });
    }
  );

  const body = JSON.stringify({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.6,
    max_tokens: 512,
    top_p: 1.0,
    frequency_penalty: 0.5,
    presence_penalty: 0.7,
    stream: true,
  });

  req.on("error", (e) => {
    console.error("problem with request:" + e.message);
  });

  req.write(body);

  req.end();
}

main();
