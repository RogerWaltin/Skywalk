import "dotenv/config";
import express from "express";
import cors from "cors";
import { enquiryController } from "./controllers/enquiryController.js";
import { enquiryRateLimiter } from "./middleware/rateLimiter.js";

const app = express();
const PORT = process.env.PORT || 8080;

const allowedOrigins = (process.env.CORS_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins.includes("*")
      ? true
      : (origin, callback) => {
          if (!origin || allowedOrigins.includes(origin)) {
            return callback(null, true);
          }
          return callback(new Error("Not allowed by CORS"));
        },
    credentials: false,
  }),
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

app.post("/api/enquiry", enquiryRateLimiter, enquiryController);

app.listen(PORT, () => {
  console.log(`Express server listening on http://localhost:${PORT}`);
});
