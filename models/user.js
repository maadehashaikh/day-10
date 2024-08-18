const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/crudapp");

const UserSchema = mongoose.Schema({
  image:String,
  email:String,
  name:String
})

module.exports = mongoose.model('user',UserSchema);