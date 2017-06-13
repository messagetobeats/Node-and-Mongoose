var UserModel = require('../models/userModel');



module.exports =
{

  get:function(req, res)
      {
          res.render('register');
      },

  post:function(req, res)
      {
        var newUser = new UserModel({
                                        email:req.body.email,
                                        password:req.body.password
                                    })

        newUser.save(function (err, newLion) {
                        if (err) return console.error(err);
                        res.redirect(req.originalUrl)

        });
      }
}
