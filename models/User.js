const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://localhost:27017/lostNFound', function (err) {
 
   if (err) throw err;
 
   console.log('Successfully connected');
 
});

const UserSchema = new mongoose.Schema({
  student_id:{
    type: Number,
    default: ''
  },
  name:{
    type: String,
    default: ''
  },
  lastname:{
    type: String,
    default: ''
  },
  login:{
    type: String,
    default: ''
  },
  password:{
    type:String,
    default: ''
  },
  email:{
    type: String,
    default: ''
  },
  avatar:{
    type: String,
    default: '/images/avatar_default.jpg'
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  signUpDate: {
    type: Date,
    default: Date.now()
  }
});

UserSchema.methods.generateHash = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8),null);
};

UserSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password,this.password);
};

module.exports = mongoose.model('User', UserSchema);