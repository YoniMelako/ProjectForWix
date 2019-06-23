const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const validator = require("validator");
const app = express();

const config = require("./config/config");

const CarRoute = require("./routes/CarsRoute");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use("/cars/", CarRoute);
mongoose.connect(config.mongoUrl, { useNewUrlParser: true });

const db = mongoose.connection;
db.once("open", () => {
  console.log("connection open");
})
  .on("error", err => {
    console.log({ connectionError: err, message: err.message });
  })
  .on("disconnected", () => {
    console.log("connection disconnected");
  });

const server = app.listen(8000, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
