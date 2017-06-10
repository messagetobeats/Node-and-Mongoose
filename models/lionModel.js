var mongoose = require('mongoose');

//create schema
var LionSchema = new mongoose.Schema({
  name: String,
  pride: String,
  age: String,
  gender:String
});

LionSchema.post('save', function(next)
{
  console.log("Lion just saved woohooo")
})

//create docmodel
var LionModel = mongoose.model('lions', LionSchema); 



module.exports = LionModel;
