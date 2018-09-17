var express = require('express');
var router = express.Router();
require('dotenv').config();

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

function getDataLost(callback){
  // Connection URL
  //const url = 'mongodb://localhost:27017';
  const url = process.env.MONGODB_URI;

  // Database Name
  const dbName = process.env.DB_NAME;
  
  // Use connect method to connect to the server
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log('Connected successfully to server');
    
    const db = client.db(dbName);
    
    findLost(db, (data) => {
      callback(data);
      client.close();
    });
    
    client.close();
  });
}

function getDataFound(callback){
  // Connection URL
  //const url = 'mongodb://localhost:27017';
  const url = process.env.MONGODB_URI;
  
  // Database Name
  const dbName = process.env.DB_NAME;
  console.log(dbName);
  // Use connect method to connect to the server
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log('Connected successfully to server');
    
    const db = client.db(dbName);
    
    findFound(db, (data) => {
      callback(data);
      client.close();
    });
    
    client.close();
  });
}

const findLost = function(db, callback) {
  // Get the documents collection
  console.log(db);
  const collection = db.collection('lost2');
  // Find some documents
  collection.find({} ,
    {fields:{_id:0}}
  ).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log('Found lost objects', docs.length);
    //console.log(docs);
    callback(docs);
  });
};

const findFound = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('found');
  // Find some documents
  collection.find({} ,
    {fields:{_id:0}}
  ).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log('Found founded objects', docs.length);
    //console.log(docs);
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
    //console.log('Found lost objects', docs.length);
    //console.log(docs);
    callback(docs);
  });
};

/* GET home page. */
router.get('/getData/lost', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  getDataLost((data) =>
    res.send(data)
  );
});

router.get('/getData/found', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  getDataFound((data) =>
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
