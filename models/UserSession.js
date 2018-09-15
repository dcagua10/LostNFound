const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/lostNFound', function (err) {
 
   if (err) throw err;
 
   console.log('Successfully connected');
 
});
const UserSessionSchema = new mongoose.Schema({
  email: {
    type: String,
    default: ''
  },
  timestamp: {
    type: Date,
    default: Date.now()
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('UserSession', UserSessionSchema);