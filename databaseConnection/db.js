var mongoose = require('mongoose');


function connectToDB()
{
    mongoose.connect('mongodb://zain:zain@ds163681.mlab.com:63681/misc_db', function(err){
      if(err) console.log("Damn error!!")
      else console.log("Connectedx!!!")
    });
}

module.exports = {connect: connectToDB}
