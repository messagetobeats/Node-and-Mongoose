var bcryptjs = require('bcryptjs')

module.exports =
{
                   hashPassword : function(req, res, next)
                   {
                           var password = req.body.password;

                           bcryptjs.genSalt(10, function(err, salt)
                            {
                               bcryptjs.hash(password, salt, function(err, hash)
                               {
                                   req.body.password = hash;
                                   next()
                               });
                             });
                   }


}








    //module.exports.checkHashedPassword = checkHashedPassword;
