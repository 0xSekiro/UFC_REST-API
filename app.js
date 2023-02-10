// Read env variables
const dotenv = require("dotenv");
dotenv.config({ path: `${__dirname}/config.env` });
const port = process.env.PORT;
const DB = process.env.DB;
// connect to local database
const mongoose = require("mongoose");
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => console.log("DB connected successfully"));

// requrie and lanuch express
const express = require("express");
const app = express();

// require logging module
const morgan = require("morgan");

// require router
const fighterRouter = require("./routes/fighterRoutes");

// middlewares logging - parsing - routing
app.use("/", morgan("dev"));
app.use("/", express.json());
app.use("/api/v1/fighters", fighterRouter);

// start server and listen to specifc port
app.listen(port, () => console.log(`Start listening to port ${port}`));
