const User = require('../../models/User');
var router = require('express').Router();

router.post('/api/account/signup', (req, res, next) => {
  console.log('Hola');
  const { body } = req;
  const {
    password
  } = body;
  let {
    email
  } = body;
  let {
    student_id
  } = body;
  let {
    name
  } = body;
  let {
    lastname
  } = body;
  let {
    login
  } = body;
  console.log(body);
  if (!email) {
    return res.send({
      success: false,
      message: 'Error: Email cannot be blank.'
    });
  }
  if (!password) {
    return res.send({
      success: false,
      message: 'Error: Password cannot be blank.'
    });
  }
  email = email.toLowerCase();
  email = email.trim();
  // Steps:
  // 1. Verify email doesn't exist
  // 2. Save
  console.log('Todo bien');
  User.find({
    email: email
  }, (err, previousUsers) => {
    console.log('Estoy en el find')
    if (err) {
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
    } else if (previousUsers.length > 0) {
      return res.send({
        success: false,
        message: 'Error: Account already exist.'
      });
    }
    // Save the new user
    console.log('voy a guardar (?');
    const newUser = new User();
    newUser.student_id = student_id;
    newUser.name = name;
    newUser.lastname = lastname;
    newUser.login = login;
    newUser.email = email;
    newUser.password = newUser.generateHash(password);
    newUser.save((err, user) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      }
      return res.send({
        success: true,
        message: 'Signed up'
      });
    });
  });
});

module.exports = router;