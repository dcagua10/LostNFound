const LostObject = require('../../models/LostObject');
//const UserSession = require('../../models/UserSession');
var router = require('express').Router();

router.post('/api/lost', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  const { body } = req;
  const {
    //id,
    lostbyName,
    lostbyLastname,
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
  newLost.lostby_first_name = lostbyName;
  newLost.lostby_last_name = lostbyLastname;
  newLost.lostby_login = 'Sapo';
  newLost.object_name = obj;
  newLost.place = place;
  newLost.description = description;
  newLost.date = date;
  newLost.image = img;
  newLost.tags = tags;
  console.log(newLost);
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
  });
});


module.exports = router;