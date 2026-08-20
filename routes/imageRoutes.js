const express = require("express");
const OpenAI = require("openai");
const { toFile } = require("openai");
const multer = require("multer");

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
});

router.post("/submit", async (req, res) => {
  console.log("🔥 /api/image/submit REQUEST RECEIVED");
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
    console.error("OpenAI error:", error);

    res.status(error.status || 500).json({
      error:
        error.message || "Something went wrong while generating the image.",
    });
  }
});
router.post("/avatar", upload.single("image"), async (req, res) => {
  try {
    console.log(req.body);

    const { prompt, size, quality, quantity } = req.body || {};

    console.log("AVATAR FILE:", req.file);
    console.log("AVATAR BODY:", req.body);

    if (!req.file) {
      return res.status(400).json({
        error: "Please provide an image.",
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

    const imageFile = await toFile(req.file.buffer, req.file.originalname, {
      type: req.file.mimetype,
    });

    console.log("IMAGE FILE CREATED");

    const avatarPrompt = `
Create a high-quality fictional character portrait based on the person
shown in the supplied reference image.

Use the supplied image as the primary visual reference for the person's
identity. Preserve their recognizable facial characteristics, including
their overall face shape, facial proportions, eyes, nose, mouth, jawline,
skin tone, hair characteristics, and other distinctive facial features.

The generated character should clearly resemble the same person while
being transformed into the requested character concept.

Keep the person's identity and facial likeness consistent with the
reference image. Do not unnecessarily alter their facial structure or
make them look like a different person.

Transform their clothing, hairstyle where appropriate, environment,
lighting, accessories, and overall visual styling according to the
user's requested concept.

Create a polished, realistic cinematic character portrait suitable for
a fantasy RPG or cinematic character concept.

The result should be non-explicit and appropriate for a general audience.

User's requested concept:

${prompt}
`;

    const result = await openai.images.edit({
      model: "gpt-image-1.5",
      image: imageFile,
      prompt: avatarPrompt,
      n: Number(quantity),
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
