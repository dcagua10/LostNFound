const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb://localhost:27017/lostNFound', function (err) {
  if (err) throw err;
  console.log('Successfully connected');
});


const LostSchema = new mongoose.Schema({
  object_name: {
    type:String,
    default: 'Objeto sin nombre'
  },
  image:{
    type:String,
    default: '/images/image_default.jpg'
  },
  lostby_first_name:{
    type:String,
    default: 'NoName'
  },
  lostby_last_name:{
    type:String,
    default: 'NoLastName'
  },
  lostby_login:String,
  date:String,
  place:String,
  description:String,
  tags: [{
    type: String
  }]
}, {collection: 'lost2'});

module.exports = mongoose.model('LostObject', LostSchema);