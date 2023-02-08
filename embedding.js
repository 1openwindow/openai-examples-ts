async function main() {
  require('dotenv').config()

  const { Configuration, OpenAIApi } = require("openai");
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createEmbedding({
    model: "text-embedding-ada-002",
    input: "The food was delicious and the waiter...",
  });

  console.log(response.data.embedding[0]);
}

main();