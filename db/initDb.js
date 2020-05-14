const common = require("../common");

module.exports = function initDb() {
  const MongoClient = require("mongodb").MongoClient;

  MongoClient.connect(common.dbUrl, function (err, db) {
    if (err) {
      throw err;
    }
    const dbo = db.db(common.dbName);
    dbo.createCollection("recipe", function (err, res) {
      if (err) {
        throw err;
      }
      console.log("Collection created!");
      db.close();
    });
  });
};
