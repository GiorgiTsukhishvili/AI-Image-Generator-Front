import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.NEXT_OPEN_AI,
});

const openai = new OpenAIApi(configuration);

export const generateOpenAiImage = async (prompt: string) => {
  try {
    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    const image = aiResponse.data.data[0].b64_json;

    return image;
  } catch (error) {
    console.error(error);
  }
};
