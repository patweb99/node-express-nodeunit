
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , program = require('commander')
  , UnitTestRunner = require('./com/util/UnitTestRunner');

// options upon startup
program
	.version('0.0.1')
	.option('-t, --tests [boolean]', 'Run unit tests upon load', Boolean, false)
	.parse(process.argv);

// initialize express aling with the unit test runner
var app = express()
	, utRunner = new UnitTestRunner();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
  
  // run unit tests once the server has loaded
  if ( program.tests )
 	utRunner.run( './tests/'); 

});
