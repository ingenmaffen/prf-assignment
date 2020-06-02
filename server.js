/* imports */
require("./db/recipeSchema");
const initDb = require("./db/initDb.js");
const dbUrl = require("./common").dbUrl;

const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cors = require("cors");
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

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", require("./routes"));
app.use(express.static(path.join("prf-frontend", "dist")));
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "prf-frontend", "dist", "index.html"))
);

// TODO: fix reload issue

/* start */
app.listen(3000, () => console.log(`App listening on port 3000!`));
