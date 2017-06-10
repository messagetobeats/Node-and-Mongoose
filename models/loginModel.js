var mongoose = require('mongoose');

//create schema
var LoginSchema = new mongoose.Schema({
  email: String,
  password: String
});

var LoginModel = mongoose.model('users', LoginSchema);

//this login model is connected to user 'table' in db
module.exports = LoginModel;
