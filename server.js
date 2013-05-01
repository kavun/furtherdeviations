var express = require('express');
var	routes = require('./routes');
var	http = require('http');
var	path = require('path');
var	conf = require('./conf');
var auth = require('./auth');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());

//auth
app.use(express.cookieParser());
app.use(express.session({ secret: conf.session.secret }));
app.use(auth.middleware(app));

app.use(app.router);
app.use(express.static(path.join(__dirname, 'app')));

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

//index
app.get('/', routes.index);

app.get('/api/user', function api_everyauth (req, res) {
	res.send(req.user);
});

// init server
http.createServer(app).listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});

