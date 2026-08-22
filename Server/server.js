import express from "express";

const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

app.listen(PORT, () => {
  console.log(`Express server listening on http://localhost:${PORT}`);
});
