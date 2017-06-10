var jwt = require('jsonwebtoken');
var Cookies = require('cookies');

 var authenticate = function(req, res, next)
 {
         var token = new Cookies(req,res).get('access_token');

         jwt.verify(token, 'Secretkey', function(err, decoded)
         {
            if(err) res.render('pagenotfound')
            else next()
         });
 }

 module.exports = authenticate;
