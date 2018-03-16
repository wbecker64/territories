var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var TERRITORIES_COLLECTION = "territories";

var app = express();
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/territories", function (err, client) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = client.db();
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

/*  "/api/territories"
 *    GET: finds all contacts
 *    POST: creates a new contact
 */

app.get("/api/territories", function(req, res) {
  db.collection(TERRITORIES_COLLECTION).find({}).toArray(function(err, territories) {
    if (err) {
      handleError(res, err.message, "Failed to get territories.");
    } else {
      res.status(200).json(territories);
    }
  });
});

app.post("/api/territories", function(req, res) {
  var newTerritory = req.body;

  if (!req.body.name) {
    handleError(res, "Invalid territory input", "Must provide a name.", 400);
  }

  db.collection(TERRITORIES_COLLECTION).insertOne(newTerritory, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new territory.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

/*  "/api/territories/:id"
 *    GET: find territories by id
 *    PUT: update territories by id
 *    DELETE: deletes territories by id
 */

app.get("/api/territories/:id", function(req, res) {
});

app.put("/api/territories/:id", function(req, res) {
});

app.delete("/api/territories/:id", function(req, res) {
});