require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO = process.env.MONGO;

// MongoDB Connection
mongoose.connect(MONGO)
  .then(() => console.log("✅ Database Connected Successfully 🚀"))
  .catch((err) => console.error("❌ Database Connection Failed:", err.message));

// Start Server
app.listen(PORT, () => {
  console.log(`⚡ Server Running at http://localhost:${PORT}`);
});
