import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

dotenv.config({ path: "./config.env" });


const app = express();
const port = process.env.PORT || 3000 ;
const DB = process.env.DATABASE_URL;


const server = app.listen(port ,()=>{
    console.log(`server is running on port ${port}`)
})



mongoose
.connect(DB)
.then(() =>console.log("Database connection successful")
.catch(err=>console.log(err.message)));