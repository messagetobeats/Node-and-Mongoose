//Require statments
var config = require('./config/config');
var path = require('path');
var express = require('express');
var ejs = require('ejs');
var middleware = require('./middleware/appMiddleware');
var apiRouter = require('./routers/apiRouter');
var authenticate = require('./middleware/authenticateMiddleware');
var loginController = require('./controllers/loginController');
var registerController = require('./controllers/registerController');




var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
//apply middleware to app
middleware(app);

//secured routes
app.use('/api', authenticate, apiRouter)

//login
app.get('/register', registerController.get);
app.post('/register', registerController.post);

app.get('/login', loginController.get);
app.post('/loginCheck', loginController.loginCheck);


app.listen(config.port, function()
{
  console.dir("Server listening config set to: ");
  console.dir(config)
})
