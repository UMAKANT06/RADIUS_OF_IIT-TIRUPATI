import express from "express"
import mongoose from mongoose
import {MONGO_URL} from "./getEnv.js"
const app=express();

//mongoose setup

const PORT =process.env.port||6001;

mongoose.connection.on("connecting",()=>{
    console.log("connecting to database.....");
});

mongoose.connection.on("connected",()=>{
    console.log("connected to database.....");
});

mongoose.connection.on("disconnected",()=>{
    console.log("disconnected from database.....");
});

mongoose.connection.on((error)=>{
    console.log(error);
});

mongoose
    .connect(MONGO_URL)
    .then(()=>{
        app.listen(PORT,()=>console.log(`server runing on port: ${port}`));
    })
    .catch((error)=>console.log(`did not connect with error:${error}`))

