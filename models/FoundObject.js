const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb://localhost:27017/lostNFound', function (err) {
  if (err) throw err;
  console.log('Successfully connected');
});


const FoundSchema = new mongoose.Schema({
  foundby_first_name:{
    type:String,
    default: 'NoName'
  },
  foundby_last_name:{
    type:String,
    default: 'NoLastName'
  },
  foundby_login:String,
  object_name: {
    type:String,
    default: 'Objeto sin nombre'
  },
  place:String,
  description:String,
  recovered:String,
  date:String,
  image:{
    type:String,
    default: '/images/image_default.jpg'
  },
  tags: [{
    type: String
  }]
}, {collection: 'found'});

module.exports = mongoose.model('FoundObject', FoundSchema);