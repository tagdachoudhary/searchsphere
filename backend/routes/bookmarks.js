import express from "express";
import prisma from "../db/prisma.js";

const router = express.Router();

// GET ALL BOOKMARKS
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

    const bookmarks =
      await prisma.bookmark.findMany({
        where: {
          userId: req.user.id,
        },
        orderBy: {
          createdAt: "desc",
        },
        take: 100,
      });

    return res.json({
      bookmarks,
    });
  } catch (error) {
    console.error(
      "❌ BOOKMARK FETCH ERROR:",
      error.message || error
    );

    return res.status(500).json({
      error: "Failed to fetch bookmarks",
    });
  }
});


// ADD BOOKMARK
router.post("/", async (req, res) => {
  try {
    if (
      !req.isAuthenticated ||
      !req.isAuthenticated()
    ) {
      return res.status(401).json({
        error: "Not authenticated",
      });
    }

    const {
      title,
      link,
      snippet,
    } = req.body;

    if (!title || !link) {
      return res.status(400).json({
        error: "Title and link are required",
      });
    }

    const existingBookmark =
      await prisma.bookmark.findFirst({
        where: {
          userId: req.user.id,
          link,
        },
      });

    if (existingBookmark) {
      return res.status(409).json({
        error: "Already bookmarked",
        bookmark: existingBookmark,
      });
    }

    const bookmark =
      await prisma.bookmark.create({
        data: {
          title,
          link,
          snippet: snippet || null,
          userId: req.user.id,
        },
      });

    console.log(
      `🔖 Bookmark saved for user: ${req.user.email}`
    );

    return res.status(201).json({
      bookmark,
    });
  } catch (error) {
    console.error(
      "❌ BOOKMARK CREATE ERROR:",
      error.message || error
    );

    return res.status(500).json({
      error: "Failed to create bookmark",
    });
  }
});


// DELETE BOOKMARK
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

    const bookmark =
      await prisma.bookmark.findFirst({
        where: {
          id: req.params.id,
          userId: req.user.id,
        },
      });

    if (!bookmark) {
      return res.status(404).json({
        error: "Bookmark not found",
      });
    }

    await prisma.bookmark.delete({
      where: {
        id: bookmark.id,
      },
    });

    console.log(
      `🗑️ Bookmark deleted for user: ${req.user.email}`
    );

    return res.json({
      success: true,
      message: "Bookmark deleted",
    });
  } catch (error) {
    console.error(
      "❌ BOOKMARK DELETE ERROR:",
      error.message || error
    );

    return res.status(500).json({
      error: "Failed to delete bookmark",
    });
  }
});

export default router;