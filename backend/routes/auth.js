import express from "express";
import passport from "passport";

const router = express.Router();

const FRONTEND_URL =
  process.env.FRONTEND_URL ||
  "http://localhost:5173";

// GOOGLE LOGIN
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

// GOOGLE CALLBACK
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: `${FRONTEND_URL}/?login=failed`,
  }),
  (req, res) => {
    console.log(
      "✅ Google login successful:",
      req.user
    );

    res.redirect(
      `${FRONTEND_URL}/?login=success`
    );
  }
);

// CURRENT USER
router.get("/me", (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({
      authenticated: false,
      user: null,
    });
  }

  return res.json({
    authenticated: true,
    user: req.user,
  });
});

// LOGOUT
router.get("/logout", (req, res, next) => {
  req.logout((error) => {
    if (error) {
      return next(error);
    }

    req.session.destroy((sessionError) => {
      if (sessionError) {
        console.error(
          "SESSION DESTROY ERROR:",
          sessionError
        );
      }

      res.clearCookie("connect.sid");

      return res.redirect(
        `${FRONTEND_URL}/?logout=success`
      );
    });
  });
});

export default router;