const dotenv =require("dotenv") 
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const { MONGO_URL } = require("./utils/getEnv");
var routes = require('./routes/routes')
const {PORT}=require("./utils/getEnv");
const app = express();
const cors = require('cors');

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

app.use(routes);
app.use('*', cors());
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
   

    app.listen(3000, () => {
      console.log(`Server running on port:3000`);
    });
  })
  .catch((error) => console.log(`Did not connect : ${error}`));
