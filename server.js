/* imports */
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const initDb = require("./db/initDb.js");
const insterData = require("./db/addRecipe");
const listData = require("./db/listRecipes");
const dbUrl = require("./common").dbUrl;
require("./db/models/recipeSchema");

/* db */
mongoose.connect(dbUrl);

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB!");
  initDb();
  //insterData();
  listData();
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

/* routing */
app.get("/", (req, res) => res.send("Hello World!"));

app.use("/api", require("./routes"));

/* start */
app.listen(3000, () => console.log(`App listening on port 3000!`));
