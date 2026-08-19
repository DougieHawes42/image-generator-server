const express = require("express");
const cors = require("cors");
const multer = require("multer");

require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

const imageRoutes = require("./routes/imageRoutes.js");

app.use(express.json());
app.use(cors());

const upload = multer({
  storage: multer.memoryStorage(),
});

app.use("/api/image", imageRoutes);

// app.post("/api/submit", async (req, res) => {
//   try {
//     const { prompt, size, quality, quantity } = req.body;

//     if (!prompt) {
//       return res.status(400).json({
//         error: "Please provide a prompt.",
//       });
//     }

//     const result = await openai.images.generate({
//       model: "gpt-image-2",
//       n: Number(quantity),
//       prompt,
//       size,
//       quality,
//       output_format: "png",
//     });

//     res.json({
//       images: result.data.map((image) => image.b64_json),
//     });
//   } catch (error) {
//     console.error(error);

//     res.status(500).json({
//       error: "Something went wrong while generating the image.",
//     });
//   }
// });

app.post("/api/edit", upload.single("image"), async (req, res) => {
  console.log(req.file);
  console.log(req.body);
});

app.listen(PORT, () => console.log("express app running..." + PORT));
