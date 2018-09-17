const FoundObject = require('../../models/FoundObject');
//const UserSession = require('../../models/UserSession');
var router = require('express').Router();

router.post('/api/found', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  const { body } = req;
  const {
    foundby_last_name,
    foundby_first_name,
    foundby_login,
    object_name,
    place,
    description,
    recovered,
    date,
    image,
    tags
  } = body;
  console.log(body);
  const newFound = new FoundObject();
  //newFound.object_id = id;
  newFound.foundby_last_name = foundby_last_name;
  newFound.foundby_first_name = foundby_first_name;
  newFound.foundby_login = foundby_login;
  newFound.object_name = object_name;
  newFound.place = place;
  newFound.description = description;
  newFound.recovered = recovered;
  newFound.date = date;
  newFound.image = image;
  newFound.tags = tags;
  console.log(newFound);
  newFound.save((err,user) => {
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