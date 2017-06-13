var mongoose = require('mongoose');

//create schema
var UserSchema = new mongoose.Schema({
  email: String,
  password: String
});

var UserModel = mongoose.model('users', UserSchema);

//this login model is connected to user 'table' in db
module.exports = UserModel;
