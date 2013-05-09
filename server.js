var express = require('express');
var http = require('http');
var path = require('path');
var conf = require('./conf');
var auth = require('./auth');
var db = require('./db');
var router = require('./routes/router');
var app = express();

app.configure(function () {
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.cookieParser());
	app.use(express.session({ secret: conf.session.secret }));
	app.use(auth.middleware(app));
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'app')));
});

// error handlers
app.configure('development', function() {
	app.use(express.errorHandler({ 
		dumpExceptions: true, 
		showStack: true
	}));

	db.connect(conf.db.dev);
});
app.configure('test', function() {
	app.use(express.errorHandler({ 
		dumpExceptions: true, 
		showStack: true
	}));

	db.connect(conf.db.test);
});
app.configure('production', function() {
	app.use(express.errorHandler());

	db.connect(
		process.env.CUSTOMCONNSTR_MONGOLAB_URI || 
		conf.db.prod
	);
});

router.use(app);

// init server
http.createServer(app).listen(app.get('port'), function () {
	console.log(
		'Express server listening on port ' + conf.color.brightcyan + 
		app.get('port') + conf.color.reset);
});

