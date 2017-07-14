const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dbUrl = "mongodb://localhost:27017/statTracker";
const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
const Activity = require("./models/Activity");
const router = express.Router();
const port = process.env.PORT || 7500;

var users = require("./routes/activities");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", Activity);

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch(err => {
    console.log("Connection error", err);
  });

app.listen(port, () => {
  console.log("API successfull running on sever " + port);
});

module.exports = app;
