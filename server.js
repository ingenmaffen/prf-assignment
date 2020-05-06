/* imports */
const express = require("express");
const mongoose = require("mongoose");
const app = express();

/* db */
mongoose.connect("mongodb://localhost:27017");

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB!");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

/* routing */
app.get("/", (req, res) => res.send("Hello World!"));

/* start */
app.listen(3000, () => console.log(`App listening on port 3000!`));
