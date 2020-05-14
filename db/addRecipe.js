const common = require("../common");

module.exports = function insertData() {
  const MongoClient = require("mongodb").MongoClient;
  MongoClient.connect(common.dbUrl, function (err, db) {
    if (err) {
      throw err;
    }
    const dbo = db.db(common.dbName);
    // TODO: insertable object should be a parameter
    const testObject = { name: "My first recipe", category: "recipe" };
    // TODO: make collection name common?
    dbo.collection("recipe").insertOne(testObject, function (err, res) {
      if (err) {
        throw err;
      }
      console.log("Object inserted: ", testObject);
      db.close();
    });
  });
};
