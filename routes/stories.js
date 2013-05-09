var db = require('../db');

module.exports = {

	list: function (req, res) {
		db.stories
			.list()
			.then(function (stories) {
				res.send({ "stories": stories });
			});
	},

	read: function (req, res) {
		db.stories
			.read(req.params.id)
			.then(function (story) {
				res.send({ "story": story });
			});
	},

	create: function (req, res) {
		res.send(501, { 
			error: 'stories create not yet implemented'
		});
	},

	update: function (req, res) {
		res.send(501, { 
			error: 'stories update not yet implemented'
		});
	},

	del: function (req, res) {
		res.send(501, { 
			error: 'stories delete not yet implemented'
		});
	}

};