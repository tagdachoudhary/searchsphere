import express from "express";
import prisma from "../db/prisma.js";

const router = express.Router();

// ---------------------------------------------
// GET SEARCH HISTORY
// ---------------------------------------------

router.get("/", async (req, res) => {
  try {
    if (
      !req.isAuthenticated ||
      !req.isAuthenticated()
    ) {
      return res.status(401).json({
        error: "Not authenticated",
      });
    }

    const history =
      await prisma.searchHistory.findMany({
        where: {
          userId: req.user.id,
        },
        orderBy: {
          createdAt: "desc",
        },
        take: 50,
      });

    return res.json({
      history,
    });
  } catch (error) {
    console.error(
      "❌ HISTORY FETCH ERROR:",
      error.message || error
    );

    return res.status(500).json({
      error: "Failed to fetch search history",
    });
  }
});

// ---------------------------------------------
// DELETE ONE HISTORY ITEM
// ---------------------------------------------

router.delete("/:id", async (req, res) => {
  try {
    if (
      !req.isAuthenticated ||
      !req.isAuthenticated()
    ) {
      return res.status(401).json({
        error: "Not authenticated",
      });
    }

    const historyItem =
      await prisma.searchHistory.findFirst({
        where: {
          id: req.params.id,
          userId: req.user.id,
        },
      });

    if (!historyItem) {
      return res.status(404).json({
        error: "History item not found",
      });
    }

    await prisma.searchHistory.delete({
      where: {
        id: historyItem.id,
      },
    });

    return res.json({
      success: true,
      message: "History item deleted",
    });
  } catch (error) {
    console.error(
      "❌ DELETE HISTORY ERROR:",
      error.message || error
    );

    return res.status(500).json({
      error: "Failed to delete history item",
    });
  }
});

// ---------------------------------------------
// DELETE ALL HISTORY
// ---------------------------------------------

router.delete("/", async (req, res) => {
  try {
    if (
      !req.isAuthenticated ||
      !req.isAuthenticated()
    ) {
      return res.status(401).json({
        error: "Not authenticated",
      });
    }

    await prisma.searchHistory.deleteMany({
      where: {
        userId: req.user.id,
      },
    });

    return res.json({
      success: true,
      message: "Search history cleared",
    });
  } catch (error) {
    console.error(
      "❌ CLEAR HISTORY ERROR:",
      error.message || error
    );

    return res.status(500).json({
      error: "Failed to clear search history",
    });
  }
});

export default router;