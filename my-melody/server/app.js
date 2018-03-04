// Imports
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var history = require('connect-history-api-fallback');
var passport = require('passport');

// Route Imports
var users = require('./routes/users');
var spotify = require('./routes/spotify')
var posts = require('./routes/posts');
var auth = require('./routes/auth')(passport);

let app = express();

// Configuring Passport
var passport = require('passport');
var expressSession = require('express-session');
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());

var flash = require('connect-flash');
app.use(flash());

var initPassport = require('./passport/init');
initPassport(passport);

// Middleware
app.use(cors());
// app.use(favicon(path.join(__dirname, '../client/dist', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(passport.initialize());
app.use(passport.session());

// Route Registration
app.use('/api/users', users);
app.use('/api/spotify', spotify);
app.use('/api/posts', posts);
app.use('/api/auth', auth);

app.get('/', function(req, res) {
    	// Display the Login page with any flash message, if any
		res.render('index', { message: req.flash('message') });
	});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.jsonp({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.jsonp({
    message: err.message,
    error: err
  });
});

module.exports = app;
