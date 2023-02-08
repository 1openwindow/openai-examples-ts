// model trained by data-set_prepared.jsonl
async function main() {
  require('dotenv').config()
  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  
  const response = await openai.createCompletion({
      model: "davinci:ft-personal-2023-02-02-03-39-08",
      prompt: "写一首诗，Title:乘风邀月",
      stop: "Title:",
  });

  console.log(response.data.choices[0].text);
}

main();