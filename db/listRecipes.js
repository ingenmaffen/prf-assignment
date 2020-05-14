const common = require("../common");

module.exports = function insertData() {
  const MongoClient = require("mongodb").MongoClient;
  MongoClient.connect(common.dbUrl, function (err, db) {
    if (err) {
      throw err;
    }
    const dbo = db.db(common.dbName);
    dbo.collection("recipe").findOne({}, function (err, res) {
      if (err) {
        throw err;
      }
      console.log("Object found: ", res);
      db.close();
    });
  });
};
