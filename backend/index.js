import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoutes from './../backend/routes/userRoutes.js'



dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

//database connect

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db connted");
  } catch (error) {
    console.log("connection failed");
  }
};

//testing

app.get("/", (req, res) => {
  res.send("Hello World sahil khan!");
});





// middleware

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/api/v1/create", userRoutes);


app.listen(port, () => {
  connect();
  console.log("done ", port);
});