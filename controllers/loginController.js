var LoginModel = require('../models/loginModel');
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


module.exports =
{

  get:function(req, res)
      {
          res.render('login');
      },

  loginCheck:function(req, res)
             {
                LoginModel.find({email:req.body.email, password:req.body.password}, function(err, docs)
                {
                          if(docs.length === 1) createToken(req, res, docs);
                          else console.log("no user found")
                });
             }
}
