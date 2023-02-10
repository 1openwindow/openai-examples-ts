# Node.js examples for OpenAI API

This repo contains Node.js examples using the [OpenAI API](https://beta.openai.com/docs/introduction).

## Setup

1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/)

1. Clone this repository

1. Install the requirements

   ```bash
   $ npm install
   ```

1. Make a copy of the example environment variables file

   On Linux systems: 
   ```bash
   $ cp .env.example .env
   ```
   On Windows:
   ```powershell
   $ copy .env.example .env
   ```
6. Add your [API key](https://beta.openai.com/account/api-keys) to the newly created `.env` file

7. Run the app

   ```bash
   $ node xxx.js
   ```

## Fune-tuning model
1. prepare your data set in a json file
2. execute the following command to verify the data set in OpenAI
   ```
   openai tools fine_tunes.prepare_data -f <LOCAL_FILE>
   ```
3. Create a fine-tuned model. Base model includes `davinci`, `curie`, `babbage`, `ada`, `gpt3`
   ```
   openai api fine_tunes.create -t <TRAIN_FILE_ID_OR_PATH> -m <BASE_MODEL>
   ```
4. To list all fine-tuned models
   ```
   openai api fine_tunes.list
   ```
5. To use a fine-tuned model
   ```
   openai api completions.create -m <FINE_TUNED_MODEL> -p <YOUR_PROMPT>
   ```
6. To delete a fine-tuned model
   ```
   openai api fine_tunes.delete -i <FINE_TUNED_MODEL>
   ```
## Command line tools
 > list all key in redis
 ```
 redis-cli --scan --pattern '*'
 ```
 > get value of a key in redis
 ```
 redis-cli get <KEY>
 ```
## Reference

* [Documentation](https://beta.openai.com/docs/introduction)
* [Examples](https://beta.openai.com/examples)
* [Playground](https://beta.openai.com/playground)