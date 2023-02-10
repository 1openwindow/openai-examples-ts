async function main() {
  require('dotenv').config()

  // a example to demo bug fix in ChatGPT
//const fs = require('fs');

  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  
  const response = await openai.createImageVariation(
    fs.createReadStream("corgi_and_cat_paw.png"),
    1,
    "1024x1024"
  );
  image_url = response.data.data[0].url;

  console.log(image_url);
}

main();