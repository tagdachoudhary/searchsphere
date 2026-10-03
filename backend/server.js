import "dotenv/config";

import express from "express";
import cors from "cors";
import session from "express-session";
import connectPgSimple from "connect-pg-simple";
import passport from "passport";

import "./config/passport.js";

const app = express();

const PgSession = connectPgSimple(session);

const isProduction =
  process.env.NODE_ENV === "production";

const FRONTEND_URL =
  process.env.FRONTEND_URL ||
  "http://localhost:5173";

const BACKEND_URL =
  process.env.BACKEND_URL ||
  "http://localhost:5001";

if (!process.env.SESSION_SECRET) {
  throw new Error(
    "SESSION_SECRET is required. Add it to your .env file."
  );
}

if (!process.env.SESSION_DATABASE_URL) {
  throw new Error(
    "SESSION_DATABASE_URL is required. Add your Neon PostgreSQL connection string to .env."
  );
}

app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());

app.set("trust proxy", 1);

app.use(
  session({
    store: new PgSession({
      conString:
        process.env.SESSION_DATABASE_URL,
      createTableIfMissing: true,
    }),

    secret: process.env.SESSION_SECRET,

    resave: false,

    saveUninitialized: false,

    cookie: {
      httpOnly: true,

      secure: isProduction,

      sameSite: isProduction
        ? "none"
        : "lax",

      maxAge:
        1000 * 60 * 60 * 24 * 7,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

const searchRoutes =
  (await import("./routes/search.js")).default;

const aiRoutes =
  (await import("./routes/ai.js")).default;

const authRoutes =
  (await import("./routes/auth.js")).default;

const historyRoutes =
  (await import("./routes/history.js")).default;

const bookmarkRoutes =
  (await import("./routes/bookmarks.js")).default;

  

app.use("/api/search", searchRoutes);
app.use("/api/ai", aiRoutes);
app.use("/auth", authRoutes);
app.use("/api/history", historyRoutes);
app.use("/api/bookmarks", bookmarkRoutes);

app.get("/", (req, res) => {
  res.json({
    message:
      "🚀 SearchSphere Backend Running",
    status: "OK",
  });
});

const PORT =
  process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(
    `🚀 Server running on ${BACKEND_URL}`
  );
});