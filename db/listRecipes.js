const common = require("../common");

module.exports = function listRecipes() {
  const mongoose = require("mongoose");
  const recipeModel = mongoose.model("recipe");

  recipeModel.findOne({}).exec((err, res) => {
    if (err) {
      throw err;
    }
    console.log(res);
  });
  const MongoClient = require("mongodb").MongoClient;
  MongoClient.connect(common.dbUrl, function (err, db) {
    if (err) {
      throw err;
    }
    const dbo = db.db(common.dbName);
    // TODO: query should be a parameter
    dbo
      .collection("recipes")
      .find()
      .toArray(function (err, res) {
        if (err) {
          throw err;
        }
        console.log("Objects found: ", res);
        db.close();
      });
  });
};
