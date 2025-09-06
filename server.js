const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;

// Direct MongoDB URI ()
const MONGO_URI = "mongodb+srv://situdancer9:er.situ5901@cluster0.4etqrta.mongodb.net/";

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ Database Connected Successfully"))
  .catch((err) => console.error("❌ Database Connection Failed:", err));

app.listen(PORT, () => {
  console.log(`🚀 Server Running at http://localhost:${PORT}`);
});
