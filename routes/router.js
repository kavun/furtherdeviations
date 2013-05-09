var deviations = require('../routes/deviations');
var stories = require('../routes/stories')

module.exports.use = function (app) {
	// boilerplate view
	app.get('/', function (req, res) {
		res.render('index');
	});

	app.get('/api/user', function (req, res) {
		res.send(req.user);
	});

	// deviations
	app.get('/api/deviations', deviations.list);
	app.get('/api/deviations/:id', deviations.read);
	app.post('/api/deviations', deviations.create);
	app.put('/api/deviations/:id', deviations.update);
	app.del('/api/deviations/:id', deviations.del);

	// stories
	app.get('/api/stories', stories.list);
	app.get('/api/stories/:id', stories.read);
	app.post('/api/stories', stories.create);
	app.put('/api/stories/:id', stories.update);
	app.del('/api/stories/:id', stories.del);
}