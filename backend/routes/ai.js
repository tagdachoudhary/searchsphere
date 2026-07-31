import express from "express";
import axios from "axios";
import { generateSummary } from "../services/gemini.js";

const router = express.Router();

router.post("/summary", async (req, res) => {
  try {
    const { query } = req.body;

    if (!query) {
      return res.status(400).json({
        error: "Query is required",
      });
    }

    // Fetch search results from Serper
    const response = await axios.post(
      "https://google.serper.dev/search",
      {
        q: query,
      },
      {
        headers: {
          "X-API-KEY": process.env.SERPER_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    const results = response.data.organic || [];

    // Generate AI summary
    const summary = await generateSummary(query, results);

    res.json({
      summary,
      results,
    });
  } catch (error) {
    console.error(
      error.response?.data || error.message || error
    );

    res.status(500).json({
      error: "Failed to generate AI summary",
    });
  }
});

export default router;