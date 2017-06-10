
var bodyParser = require('body-parser');

var middleware = function(app)
{
  app.use(bodyParser.urlencoded({ extended: false }))// parse application/json
  app.use(bodyParser.json());
}

module.exports = middleware;
