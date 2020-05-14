/* imports */
require("./db/recipeSchema");
const initDb = require("./db/initDb.js");
const dbUrl = require("./common").dbUrl;

const express = require("express");
const mongoose = require("mongoose");
const app = express();

/* db */
mongoose.connect(dbUrl);

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB!");
  initDb();
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

/* routing */
app.get("/", (req, res) => res.send("Hello World!"));

app.use("/api", require("./routes"));

/* start */
app.listen(3000, () => console.log(`App listening on port 3000!`));
