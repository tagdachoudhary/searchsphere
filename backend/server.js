import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// Load routes AFTER dotenv
const searchRoutes = (await import("./routes/search.js")).default;
const aiRoutes = (await import("./routes/ai.js")).default;

app.use("/api/search", searchRoutes);
app.use("/api/ai", aiRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "🚀 SearchSphere Backend Running",
    status: "OK",
  });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});