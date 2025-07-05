const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./Routes/user"); 
const adminRoute = require("./Routes/admin")
const playerRoute = require("./Routes/player")
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
dotenv.config();;

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: process.env.VERCEL_URL,
  credentials: true,
}));
app.use(express.json());


// Environment variables
const uri = process.env.MONGO_URL
const PORT = process.env.PORT

// MongoDB connection and server start
const startServer = async () => {
  try {
    await mongoose.connect(uri);
    console.log("DB Connection Successful");

    // Routes
   
    app.use("/api/admin", adminRoute)
     app.use("/api/auth", userRoute);
     app.use("/api/player", playerRoute)

    // Start listening AFTER DB connects
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });

  } catch (err) {
    console.error("Mongo connection failed:", err.message);
  }
};

startServer();