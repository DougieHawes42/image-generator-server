const express = require("express");
const OpenAI = require("openai");

const router = express.Router();

router.post("/submit", async (req, res) => {
  try {
    const { prompt, size, quality, quantity } = req.body;

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    if (!prompt) {
      return res.status(400).json({
        error: "Please provide a prompt.",
      });
    }

    const result = await openai.images.generate({
      model: "gpt-image-2",
      n: Number(quantity),
      prompt,
      size,
      quality,
      output_format: "png",
    });

    res.json({
      images: result.data.map((image) => image.b64_json),
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Something went wrong while generating the image.",
    });
  }
});

module.exports = router;
