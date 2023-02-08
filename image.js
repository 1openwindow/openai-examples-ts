async function main() {
    require('dotenv').config()
    const { Configuration, OpenAIApi } = require("openai");

    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    
    const response = await openai.createImage({
        prompt: "用中国山水画给这首诗配图。寂静夜色深，离愁难再寻。心中留给谁，此生离别音。",
        n: 10,
        size: "1024x1024",
    });

    console.log(response.data.data);
}

main();