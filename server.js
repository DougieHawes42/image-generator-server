const express = require("express");
const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

const imageRoutes = require("./routes/imageRoutes.js");

app.use(cors());
app.use(express.json());

app.use("/api/image", imageRoutes);

app.listen(PORT, () => console.log("express app running..." + PORT));
