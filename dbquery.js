var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/veteran_ready';


// Query for all documents in a collection:
// Find all entries in agencies collection in veteran_ready db:
var findAgencies = function(db, callback) {
  var cursor = db.collection('agencies').find( );
  cursor.each(function(err, doc) {
    assert.equal(err, null);
    if (doc != null) {
      console.log(doc); // This will print all of the info about all of the agencies to the console
    } else {
      callback();
    }
  });
};
// Call the findAgencies function:
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  findAgencies(db, function() {
    db.close();
  });
});


// Query by a Top Level Field:
// The following operation finds documents in the agencies collection whose topic field equals "Employment":
var findTopic = function(db, callback) {
  var cursor = db.collection('agencies').find( { "topic": "Employment" } );
  cursor.each(function(err, doc) {
    assert.equal(err, null);
    if (doc != null) {
      console.log(doc);
    } else {
      callback();
    }
  });
};
// Call the findTopic function:
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  findTopic(db, function() {
    db.close();
  });
});
