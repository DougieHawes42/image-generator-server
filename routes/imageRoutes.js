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
  try {
    const { prompt, size, quality, quantity } = req.body || {};

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        error: "Please provide at least one image.",
      });
    }

    if (!prompt) {
      return res.status(400).json({
        error: "Please provide an avatar prompt.",
      });
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const imageFiles = await Promise.all(
      req.files.map((file) =>
        toFile(file.buffer, file.originalname, {
          type: file.mimetype,
        }),
      ),
    );

    const imagePrompt = `
Create a high-quality fictional character portrait based on the person
shown across the supplied reference images.

Use all supplied images together as visual references for the person's
identity and appearance.

The reference images may show the person from different angles,
expressions, lighting conditions, or distances. Use the combined
information from all references to produce the most accurate and
consistent representation of the person possible.

Preserve their recognizable facial characteristics, including their
overall face shape, facial proportions, eyes, nose, mouth, jawline,
skin tone, hair characteristics, and other distinctive facial features.

Treat the supplied images as references for the same individual.
Do not combine different people or interpret the reference images as
different characters.

The generated character should clearly resemble the same person while
being transformed into the requested character concept.

Transform their clothing, environment, accessories, lighting, and
overall visual styling according to the user's requested concept.

Create a polished, realistic cinematic character portrait suitable for
a fantasy RPG or cinematic character concept.

The result should be non-explicit and appropriate for a general audience.

User's requested concept:

${prompt}
`;

    const result = await openai.images.edit({
      model: "gpt-image-1.5",
      image: imageFiles[0],
      prompt: imagePrompt,
      n: Number(quantity),
      moderation: "low",
      size,
      quality,
      output_format: "png",
    });

    console.log("OPENAI RESPONSE RECEIVED");

    res.json({
      images: result.data.map((image) => image.b64_json),
    });
  } catch (error) {
    console.error("========== AVATAR ERROR ==========");
    console.error("message:", error?.message);
    console.error("stack:", error?.stack);
    console.error("name:", error?.name);
    console.error("===================================");

    res.status(500).json({
      error:
        error?.message || "Something went wrong while generating the avatar.",
    });
  }
});

module.exports = router;
