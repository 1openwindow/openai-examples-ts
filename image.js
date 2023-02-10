async function main() {
    require('dotenv').config()
    const { Configuration, OpenAIApi } = require("openai");

    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    
    const response = await openai.createImage({
        prompt: "generate a pixal map of Chinese. each province is a different color and a round point on it. the background is transparent.",
        //prompt: "generate a pixal game character. the background is transparent. the style is carton, like the game 'super mario'.",
        n: 1,
        size: "1024x1024",
    });

    console.log(response.data.data);
}

main();