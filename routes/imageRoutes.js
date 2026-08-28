const express = require("express");
const OpenAI = require("openai");
const { toFile } = require("openai");
const multer = require("multer");

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
});

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
      n: Number(quantity) || 1,
      prompt,
      size,
      quality,
      moderation: "low",
      output_format: "png",
    });

    res.json({
      images: result.data.map((image) => image.b64_json),
    });
  } catch (error) {
    console.error("Image generation failed:", {
      message: error.message,
      status: error.status,
      code: error.code,
    });

    res.status(error.status || 500).json({
      error:
        error.message || "Something went wrong while generating the image.",
    });
  }
});
router.post("/images-to-image", upload.array("images"), async (req, res) => {
  const imageFiles = await Promise.all(
    req.files.map((file) =>
      toFile(file.buffer, file.originalname, {
        type: file.mimetype,
      }),
    ),
  );

  const result = await new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  }).images.edit({
    model: "gpt-image-1.5",
    image: imageFiles,
    prompt: req.body.prompt,
    n: Number(req.body.quantity),
    size: req.body.size,
    quality: req.body.quality || "medium",
    moderation: "low",
    output_format: "png",
  });

  console.log("OPENAI RESPONSE RECEIVED");

  res.json({
    images: result.data.map((image) => image.b64_json),
  });
});

module.exports = router;
