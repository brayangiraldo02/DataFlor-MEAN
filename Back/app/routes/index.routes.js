import express from "express";

const router = express.Router();

// Ruta principal
router.get("/", (req, res) => {
  res.status(200).json({ 
    message: "Welcome to the DataFlor backend!"
  });
});

export default router;