import  express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "../routes/auth.route.js";
import bodyParser from 'body-parser';
dotenv.config();

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB: ', err);
  });
const app=express();
app.listen(3000, () => {
    console.log("Server is running 3000!!!")
})
app.use(bodyParser.json());
app.use("/api/user",authRouter)