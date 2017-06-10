var LionModel = require('../models/lionModel');
var db = require('../databaseConnection/db');


//connect to db
db.connect();

module.exports = {

  getLions: function(req, res)
            {
              LionModel.find({}, function (err, lions)
                             {
                                if (err) return handleError(err);
                                req.lions = lions;
                                res.render('lions', {data:req.lions});
                             })
            },

  postLion: function(req, res)
            {

              var newLion = new LionModel({
                                              name:req.body.name,
                                              pride:req.body.pride,
                                              age : req.body.age,
                                              gender: req.body.gender
                                          })

              newLion.save(function (err, newLion) {
                              if (err) return console.error(err);
                              res.redirect(req.originalUrl)

              });
            }
}
