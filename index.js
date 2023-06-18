const MongoClient = require("mongodb").MongoClient;
const fs = require("fs");
const path = require("path");

const resultPath = path.join(__dirname, "./us-east-1-bundle.pem");
console.log("_dirnam", resultPath);
const url =
  "mongodb://imnurselatest:securehash@docdb-2023-06-18-09-37-25.cluster-cqtcbx2lrkhq.us-east-1.docdb.amazonaws.com:27017/?ssl=true&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false";

//console.log("fs", fs.readFileSync("./us-east-1-bundle.pem"));
const options = {
  sslValidate: true,
  sslCA: resultPath,
};

MongoClient.connect(url, options, function (err, client) {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }

  // Connection successful
  console.log("Connected to the database!");

  // Continue with your code...
});
