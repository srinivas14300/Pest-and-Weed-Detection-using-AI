import express from "express";
import multer from "multer";
import cors from "cors";
import * as tf from "@tensorflow/tfjs-node";
import fs from "fs/promises"; // Use promises for async file handling

const app = express();
app.use(cors());
const upload = multer({ dest: "uploads/" });

// Simulated AI Model (Replace with actual TensorFlow model)
const classifyImage = async (imageBuffer) => {
  const tensor = tf.node.decodeImage(imageBuffer);
  
  // Placeholder logic: Randomly classify between weed, pest, or healthy
  const categories = ["weed", "pest", "healthy"];
  const randomIndex = Math.floor(Math.random() * categories.length);
  
  return {
    type: categories[randomIndex],
    confidence: Math.floor(Math.random() * 30) + 70, // 70-99%
    recommendations: categories[randomIndex] === "weed"
      ? ["Apply herbicide", "Use manual weeding", "Rotate crops"]
      : categories[randomIndex] === "pest"
      ? ["Apply pesticide", "Introduce natural predators", "Improve soil health"]
      : ["No action needed, crop is healthy!"]
  };
};

app.post("/detect", upload.single("image"), async (req, res) => {
  try {
    const imagePath = req.file.path;
    const imageBuffer = await fs.readFile(imagePath);
    
    const result = await classifyImage(imageBuffer);

    await fs.unlink(imagePath); // Clean up uploaded file
    res.json(result);
  } catch (error) {
    console.error("Detection failed:", error);
    res.status(500).send("Error processing image");
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
