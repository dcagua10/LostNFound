var express = require('express');
var router = express.Router();


const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

function getObject(callback){
  // Connection URL
  const url = 'mongodb://localhost:27017';
  
  // Database Name
  const dbName = 'lostNFound';
  
  // Use connect method to connect to the server
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log('Connected successfully to server');
    
    const db = client.db(dbName);
    
    findDocuments(db, (data) => {
      callback(data);
      client.close();
    });
    
    client.close();
  });
}

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('lost');
  // Find some documents
  collection.find({} ,
    {fields:{_id:0}}
  ).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log('Found lost objects', docs.length);
    console.log(docs);
    callback(docs);
  });
};

const findUser = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('users');
  // Find some documents
  collection.findOne({} ,
    {fields:{_id:0}}
  ).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log('Found lost objects', docs.length);
    console.log(docs);
    callback(docs);
  });
};

/* GET home page. */
router.get('/getData', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  getObject((data) =>
    res.send(data)
  );
});

/* //GET home page.
router.get('/usuario', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  getObject((data) =>
    res.send(data)
  );
}); */

module.exports = router; 
