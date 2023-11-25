const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path"); // Add this line
const { MONGO_URL } = require("./utils/getEnv");
const { PORT } = require("./utils/getEnv");
const { errorHandler } = require('./middleware/errorMiddleware.js');
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

mongoose.connection.on("error", (error) => {
  console.log(error);
});

// Middleware to parse JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/users', require('./routes/userRoutes.js'));
app.use('/api/students', require('./routes/studentRoutes.js'));
app.use('/api/admins', require('./routes/adminRoutes.js'));
app.use('/api/complaints', require('./routes/complaintRoutes.js'));
app.use('/api/lost', require('./routes/lostRoutes.js'));
app.use('/api/found', require('./routes/foundRoutes.js'));

// Serve static files from the 'build' directory (adjust as needed)
app.use(express.static(path.join(__dirname, '../front_end/build')));

// Send the main HTML file for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../front_end/build/index.html'));
});

// Error handling middleware
app.use(errorHandler);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    const server = app.listen(PORT, () => {
      const address = server.address();
      const host = address.address === '::' ? 'localhost' : address.address;
      const port = address.port;
      console.log(`Server is running at http://${host}:${port}`);
    });
  })
  .catch((error) => console.log(`Did not connect: ${error}`));
