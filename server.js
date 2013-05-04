var express = require('express');
var	routes = require('./routes');
var	http = require('http');
var	path = require('path');
var	conf = require('./conf');
var auth = require('./auth');
var mongoose = require('mongoose');

var app = express();
	app.set('env', 'development');

app.configure('development', function() {
	mongoose.connect(conf.db.dev);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, conf.color.brightred + 'connection error:' + conf.color.reset));
	db.once('open', function () {
		console.log('mongoose connected to ' + conf.color.brightcyan + conf.db.dev + conf.color.reset);
	});
});
app.configure('test', function() {
	mongoose.connect(conf.db.test);
});
app.configure('production', function() {
	mongoose.connect(process.env.CUSTOMCONNSTR_MONGOLAB_URI || conf.db.prod);
});

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
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
}

//api
app.get('/', routes.index);


// get user
app.get('/api/user', function api_user (req, res) {
	res.send(req.user);
});

var models = require('./models/models');

var Deviation = models.Deviation(mongoose);
var Story = models.Story(mongoose);

new Deviation({
	title         : 'Test Deviation 3',
	date_published: new Date,
	description   : 'this is a little bit of a description'
}).save(function (err, dev) {
	if (err) console.log(err);
	else console.log(conf.color.brightyellow + dev._id + conf.color.reset);

	new Story({
		deviation_id: dev._id,
		date_written: new Date,
		title: 'First Story',
		author: 'Kevin Reed',
		description: 'ehh pretty good'
	}).save(function (err, story) {
		if (err) { console.log(err); }
		else {
			dev.stories.push(story._id);
			dev.save();
			console.log(conf.color.brightgreen + story._id + conf.color.reset);
		}
	});

	new Story({
		deviation_id: dev._id,
		date_written: new Date,
		title: 'Second Story',
		author: 'Kevin Reed',
		description: 'terrible'
	}).save(function (err, story) {
		if (err) { console.log(err); }
		else {
			dev.stories.push(story._id);
			dev.save();
			console.log(conf.color.brightgreen + story._id + conf.color.reset);
		}
	});
});

new Deviation({
	title         : 'Test Deviation 4',
	date_published: new Date,
	description   : 'this is a little bit of a description'
}).save(function (err, dev) {
	if (err) console.log(err);
	else console.log(conf.color.brightyellow + dev._id + conf.color.reset);

	new Story({
		deviation_id: dev._id,
		date_written: new Date,
		title: 'First Piece',
		author: 'Kevin Reed',
		description: 'ehh pretty good'
	}).save(function (err, story) {
		if (err) { console.log(err); }
		else {
			dev.stories.push(story._id);
			dev.save();
			console.log(conf.color.brightgreen + story._id + conf.color.reset);
		}
	});

	new Story({
		deviation_id: dev._id,
		date_written: new Date,
		title: 'Second Piece',
		author: 'Kevin Reed',
		description: 'terrible'
	}).save(function (err, story) {
		if (err) { console.log(err); }
		else {
			dev.stories.push(story._id);
			dev.save();
			console.log(conf.color.brightgreen + story._id + conf.color.reset);
		}
	});
});



// list
app.get('/api/deviations', function api_list_deviations (req, res) {
	debugger;
	Deviation
		.find()
		.populate('stories')
		.exec(function (err, deviations) {
			if (!err) res.send({ deviations: deviations });
		});
});
// read
app.get('/api/deviations/:id', function api_read_deviations (req, res) {
	debugger;
	Deviation
		.findById(req.params.id)
		.populate('stories')
		.exec(function (err, deviation) {
			if (!err) res.send({ deviation: deviation});
		});
});
// create
app.post('/api/deviations', function api_create_deviations (req, res) {

});
// update
app.put('/api/deviation/:id', function api_update_deviations (req, res) {
	res.send('/api/deviation' + req.params.id);
});
//delete
app.del('/api/deviation/:id', function api_delete_deviations (req, res) {
	res.send('/api/deviation' + req.params.id);
});




// list
app.get('/api/stories', function api_list_stories (req, res) {
	Story.find().populate('deviation').exec(function (err, stories) {
		if (!err) res.send({ stories: stories });
	});
});
// read
app.get('/api/stories/:id', function api_read_stories (req, res) {
	Story.findById(req.params.id).populate('deviation').exec(function (err, story) {
		if (!err) res.send({ story: story });
	});
});
// create
app.post('/api/stories', function api_create_stories (req, res) {
	res.send('/api/stories');
});
// update
app.put('/api/stories/:id', function api_update_stories (req, res) {
	res.send('/api/stories');
});
//delete
app.del('/api/stories/:id', function api_delete_stories (req, res) {
	res.send('/api/stories');
});




// init server
http.createServer(app).listen(app.get('port'), function () {
	console.log('Express server listening on port ' + conf.color.brightcyan + app.get('port') + conf.color.reset);
});

