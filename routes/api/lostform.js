const LostObject = require('../../models/LostObject');
//const UserSession = require('../../models/UserSession');
var router = require('express').Router();
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

router.post('/api/lost', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  const { body } = req;
  const {
    //id,
    lostby_first_name,
    lostby_last_name,
    lostByLogin,
    obj,
    place,
    description,
    date,
    img,
    tags 
  } = body;
  console.log(body);
  const newLost = new LostObject();
  //newLost.object_id = id;
  newLost.lostby_first_name = lostby_first_name;
  newLost.lostby_last_name = lostby_last_name;
  newLost.lostby_login = lostByLogin;
  newLost.object_name = obj;
  newLost.place = place;
  newLost.description = description;
  newLost.date = date;
  newLost.image = img;
  newLost.tags = tags;
  console.log(newLost); /*
  newLost.save((err,user) => {
    if (err) {
      console.log('Error post lost');
      return res.send({
        success: false,
        message: 'Error: Server error posting lost object'
      });
    }
    console.log('Post lost OK');
    return res.send({
      success: true,
      message: 'Object Accepted.'
    });
  });*/
  //Mongoose no funciona en dev pero ya aprendí usando solo MongoDB 😁
  MongoClient.connect(url, function (err,db) {
    if(err) throw err;
    const dbo = db.db(dbName);
    dbo.collection('lost2').insertOne(newLost, function(err,res){
      if (err) throw err;
      console.log('1 document inserted');
      db.close();
    });
  });


});


module.exports = router;