const express = require("express");
const OpenAI = require("openai");
const { toFile } = require("openai");
const multer = require("multer");
const RunwayML = require("@runwayml/sdk");

const getThemePrompt = require("../controllers/getThemePrompt");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
});

router.post("/submit", async (req, res) => {
  try {
    const { prompt, theme, size, quality, quantity } = req.body;

    if (!prompt && !theme) {
      return res.status(400).json({
        error: "Please provide a prompt and/or theme.",
      });
    }
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        error: "Please provide at least one image.",
      });
    }

    const finalPrompt = `
      ${prompt}

      ${getThemePrompt(theme)}
    `.trim();

    if (!prompt) {
      return res.status(400).json({
        error: "Please provide a prompt.",
      });
    }

    const result = await openai.images.generate({
      model: "gpt-image-2",
      n: Number(quantity) || 1,
      prompt: finalPrompt,
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
  const { prompt, theme, size, quality, quantity } = req.body;
  const imageFiles = await Promise.all(
    req.files.map((file) =>
      toFile(file.buffer, file.originalname, {
        type: file.mimetype,
      }),
    ),
  );

  const finalPrompt = `
      ${prompt}

      ${getThemePrompt(theme)}
    `.trim();

  const result = await new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  }).images.edit({
    model: "gpt-image-1.5",
    image: imageFiles,
    prompt: finalPrompt,
    n: Number(quantity),
    size,
    quality: quality || "medium",
    moderation: "low",
    output_format: "png",
  });

  res.json({
    images: result.data.map((image) => image.b64_json),
  });
});

router.post(
  "/image-to-video",
  upload.fields([
    { name: "startImage", maxCount: 1 },
    { name: "endImage", maxCount: 1 },
  ]),
  async (req, res) => {
    const startImage = req.files.startImage[0];

    const startImageDataUri = `data:${startImage.mimetype};base64,${startImage.buffer.toString("base64")}`;

    const runway = new RunwayML({
      apiKey: process.env.RUNWAYML_API_KEY,
    });

    const video = await runway.imageToVideo
      .create({
        model: "gen4.5",
        promptImage: startImageDataUri,
        promptText: req.body.prompt,
        ratio: "1280:720",
        duration: 5,
      })
      .waitForTaskOutput();

    console.log("RUNWAY VIDEO COMPLETE:", video);

    res.json({
      videoUrl: video.output[0],
    });
  },
);

router.post("/improve", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        error: "Please provide a prompt.",
      });
    }

    const response = await openai.responses.create({
      model: "gpt-5.6-luna",
      instructions: `
        You are an expert image-generation prompt writer.

        Improve the user's prompt so it is:
        - clear
        - specific
        - visually descriptive
        - useful for an image-generation model

        Preserve the user's original intent.
        Do not change the subject unnecessarily.
        Do not add unrelated objects or concepts.

        Return ONLY the improved image prompt.
      `,
      input: prompt,
    });

    res.json({
      prompt: response.output_text,
    });
  } catch (error) {
    res.status(error.status || 500).json({
      error:
        error.message || "Something went wrong while improving the prompt.",
    });
  }
});

module.exports = router;
