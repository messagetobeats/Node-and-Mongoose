var UserModel = require('../models/userModel');
var bcryptjs = require('bcryptjs')

var jwt = require('jsonwebtoken');
var Cookies = require('cookies');


function createToken(req, res, docs)
{
  var id = {id:docs[0]["_id"]};

  var token = jwt.sign(id, "Secretkey", {expiresIn:4000});

  // This save the cookie 'access_token' to the client browser and uses npm module  https://www.npmjs.com/package/cookies
  new Cookies(req,res).set('access_token',token,{ httpOnly: true, secure: false });
  res.end();
}

var checkHashedPassword = function(req, res, docs)
{
  var password = req.body.password;
  var hashed_password = docs[0]["password"];

  bcryptjs.compare(password, hashed_password, function(err, match)
  {
      if(match) createToken(req, res, docs);
      else console.log("incorrect password")
  });

}


module.exports =
{

  get:function(req, res)
      {
          res.render('login');
      },

  loginCheck:function(req, res)
             {
                UserModel.find({email:req.body.email}, function(err, docs)
                {
                          if(docs.length === 1) checkHashedPassword(req, res, docs)//createToken(req, res, docs);
                          else console.log("no user found")
                });
             }
}
