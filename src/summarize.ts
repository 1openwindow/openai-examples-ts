import * as pdfjsLib from "pdfjs-dist";
import { Configuration, OpenAIApi } from "openai";

const pdfUrl = "https://www.arvindguptatoys.com/arvindgupta/oldmansea.pdf";
const pdfChunkSize = 1200;
const maxSummaryLength = 500;
const maxTokens = 2048;

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function getPdfAsText(url) {
  const loadingTask = pdfjsLib.getDocument(url);
  const pdf = await loadingTask.promise;
  const pdfChunk = [];

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const text = content.items.map((item) => item.str).join(" ");
    console.log(
      `--------------------- Page ${i} -------------------------\n ${text} `
    );
    pdfChunk.push(text);
  }

  return pdfChunk;
}

async function summarize(text) {
  const prompt = `summarize the below document in less than ${maxSummaryLength} words: ${text}`;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    temperature: 0.5,
    max_tokens: maxTokens,
  });

  return response.data.choices[0].text;
}

async function combine(originalText: string[], targetText = []) {
  if (originalText.length === 0) {
    return targetText;
  }

  let toSummarizeText = "";
  while (originalText.length > 1) {
    toSummarizeText += originalText.shift();
    if (countWords(toSummarizeText) > pdfChunkSize) {
      console.log(
        `--------------------- To Summarize Text ${countWords(
          toSummarizeText
        )} -------------------------\n ${toSummarizeText} `
      );
      //const response = await summarize(toSummarizeText);
      const response = "This is a test";
      console.log(
        `--------------------- Response From AI -------------------------\n ${response}`
      );
      targetText.push(response);
      toSummarizeText = "";
    }
  }
  //const toSummarizeText = originalText.splice(0, pdfChunkSize).join("");
  //const response = await summarize(toSummarizeText);

  //targetText.push(response);

  return combine(targetText, []);
}

function countWords(str: string): number {
  const words = str.split(/\s+/);
  return words.length;
}

async function main() {
  try {
    const pdfText = await getPdfAsText(pdfUrl);
    combine(pdfText).then((summaries) =>
      console.log(
        `---------------------- Total Summary ------------------------\n ${summaries}`
      )
    );
  } catch (err) {
    console.error(err);
  }
}

main();
