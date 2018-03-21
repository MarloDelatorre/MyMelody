// Imports
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var fs = require('fs');
var history = require('connect-history-api-fallback');
var passport = require('passport');
var flash = require('connect-flash');

// Route Imports
var users = require('./routes/users');
var spotify = require('./routes/spotify')
var posts = require('./routes/posts');
var auth = require('./routes/auth')(passport);

let app = express();

//Resolving Client/Server Routing
app.use(history({
  verbose: true,
  rewrites: [
    { from: /^(\/api\/)/, to: context => context.parsedUrl.pathname }
  ]
}));

// Configuring Passport
var passport = require('passport');
var expressSession = require('express-session');
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());

var initPassport = require('./passport/init');
initPassport(passport);

// Middleware
app.use(cors());
// app.use(favicon(path.join(__dirname, '../client/dist', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(flash());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(passport.initialize());
app.use(passport.session());

// Route Registration
app.use('/api/users', users);
app.use('/api/spotify', spotify);
app.use('/api/posts', posts);
app.use('/api/auth', auth);

// const render = (req, res, context) => {
// 	const s = Date.now()
//
// 	console.log(`Rendering: ${req.url}`)
//
// 	res.setHeader("Content-Type", "text/html")
//
// 	const errorHandler = (err) => {
// 		// TODO: Render Error Page
// 		console.error(`Fatal error when rendering : ${req.url}`)
// 		console.error(err)
//
// 		res.status(500)
// 		res.end(`500 | Fatal error: ${err}`)
//
// 		console.log(`Whole request: ${Date.now() - s}ms`)
// 	}
//
// 	renderer.renderToString(context, (err, html) => {
// 		if (err) return errorHandler(err)
//
// 		res.status(context.meta.httpStatusCode || 200)
// 		res.end(html)
//
// 		console.log(`Whole request: ${Date.now() - s}ms`)
// 	})
// }
//
// app.get('*', (req, res) => {
//   const context = {
//     url: req.url
//   }
//   render(req, res, context);
// });

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
