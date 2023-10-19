import express from "express"
import mongoose from mongoose
import {mongodburl} from "./connect.js"
const app=express();
mongoose.connect(mongodburl)
.then(()=>{
    console.log("connected to database");
    app.listen(3000,()=>{
        console.log("server is running on port 3000")
    })

})
.catch((error)=>{
    console.log("error")
})