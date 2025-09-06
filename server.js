require("dotenv").config();
const express = require("express")
const app = express();
const PORT = process.env.PORT || 5000
const mongoose = require("mongoose")
const MONGO = process.env.MONGO


mongoose.connect(MONGO)
.then(()=>console.log("DataBase Connect Successfully"))
.catch(()=>console.log("Database is not connected"))


app.listen(PORT,(req,res)=>{
    console.log(`Server Running at http://localhost:${PORT}`)
})