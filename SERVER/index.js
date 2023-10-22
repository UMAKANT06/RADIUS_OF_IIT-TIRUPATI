const express = require("express");
const mongoose = require("mongoose");
const { MONGO_URL } = require("./utils/getEnv");
const {PORT}=require("./utils/getEnv");
const app = express();

// Mongoose setup
mongoose.connection.on("connecting", () => {
  console.log("Connecting to database...");
});

mongoose.connection.on("connected", () => {
  console.log("Connected to database...");
});

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from database...");
});

mongoose.connection.on("error",(error) => {
  console.log(error);
});

mongoose
  .connect(MONGO_URL)
  .then(() => {
   

    app.listen(3000, () => {
      console.log(`Server running on port:3000`);
    });
  })
  .catch((error) => console.log(`Did not connect : ${error}`));
