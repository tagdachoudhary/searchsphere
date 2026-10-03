import express from "express";
import axios from "axios";

import { generateSummary } from "../services/gemini.js";
import prisma from "../db/prisma.js";

const router = express.Router();

router.post("/summary", async (req, res) => {
  try {
    const { query } = req.body;

    if (!query || !query.trim()) {
      return res.status(400).json({
        error: "Query is required",
      });
    }

    const cleanQuery = query.trim();

    // --------------------------------
    // 1. Fetch search results from Serper
    // --------------------------------
    let results = [];

    try {
      const response = await axios.post(
        "https://google.serper.dev/search",
        {
          q: cleanQuery,
        },
        {
          headers: {
            "X-API-KEY": process.env.SERPER_API_KEY,
            "Content-Type": "application/json",
          },
        }
      );

      results = response.data.organic || [];

      console.log(
        `Serper search successful: "${cleanQuery}" - ${results.length} results`
      );
    } catch (error) {
      console.error(
        "SERPER ERROR:",
        error.response?.data || error.message || error
      );

      return res.status(500).json({
        error: "Search service failed",
      });
    }

    // --------------------------------
    // 2. Generate AI Summary
    // --------------------------------
    let summary = "";

    try {
      summary = await generateSummary(
        cleanQuery,
        results
      );

      console.log(
        `Gemini summary successful: "${cleanQuery}"`
      );
    } catch (error) {
      console.error(
        "GEMINI ERROR:",
        error.message || error
      );

      summary =
        "AI Summary is temporarily unavailable. Search results are still available.";
    }

    // --------------------------------
    // 3. Save search for logged-in user
    // --------------------------------
    if (req.isAuthenticated && req.isAuthenticated()) {
      try {
        await prisma.searchHistory.create({
          data: {
            query: cleanQuery,
            userId: req.user.id,
          },
        });

        console.log(
          `📝 Search history saved for user: ${req.user.email}`
        );
      } catch (error) {
        // Do NOT fail the search if history saving fails
        console.error(
          "SEARCH HISTORY ERROR:",
          error.message || error
        );
      }
    }

    // --------------------------------
    // 4. Send response
    // --------------------------------
    return res.json({
      summary,
      results,
    });
  } catch (error) {
    console.error(
      "GENERAL API ERROR:",
      error.message || error
    );

    return res.status(500).json({
      error:
        "Something went wrong while processing the search",
    });
  }
});

export default router;