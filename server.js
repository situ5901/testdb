const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Replace with your actual MongoDB connection string
const MONGO_URI = "mongodb+srv://situdancer9:er.situ5901@cluster0.4etqrta.mongodb.net/";

// Middleware to log all incoming requests
app.use((req, res, next) => {
  console.log(`📩 [${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// MongoDB connection
async function connectDB() {
  try {
    console.log("🔄 Connecting to MongoDB...");
    await mongoose.connect(MONGO_URI);
    console.log("✅ Database Connected Successfully 🚀");
  } catch (err) {
    console.error("❌ Database Connection Failed:");
    console.error(err.message);
    process.exit(1); // Stop app if DB fails
  }
}

connectDB();

// Example route
app.get("/", (req, res) => {
  console.log("📢 Root route hit");
  res.send("Hello! Your server & MongoDB are running 🚀");
});

// Start server
app.listen(PORT, () => {
  console.log(`⚡ Server Running at: http://localhost:${PORT}`);
});
