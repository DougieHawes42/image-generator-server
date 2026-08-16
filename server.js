const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/submit", async (req, res) => {
  try {
    const { prompt, size, quality } = req.body;

    if (!prompt) {
      return res.status(400).json({
        error: "Please provide a prompt.",
      });
    }

    const result = await openai.images.generate({
      model: "gpt-image-2",
      prompt,
      size,
      quality,
      output_format: "png",
    });

    const imageBase64 = result.data[0].b64_json;

    res.json({
      image: imageBase64,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Something went wrong while generating the image.",
    });
  }
});

app.listen(PORT, () => console.log("express app running..." + PORT));
