var express = require('express');
var app = express();

app.get('/test', function (req, res) {
  res.send('Hello World');
});

app.listen(4000, function() {
  console.log('App listening');
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

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
