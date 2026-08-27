import rateLimit from "express-rate-limit";

export const enquiryRateLimiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many enquiries. Please try again in a minute.",
  },
});
