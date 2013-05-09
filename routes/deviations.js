var db = require('../db');

module.exports = {

	list: function (req, res) {
		db.deviations
			.list()
			.then(function (deviations) {
				res.send({ "deviations": deviations });
			});
	},

	read: function (req, res) {
		db.deviations
			.read(req.params.id)
			.then(function (deviation) {
				res.send({ "deviation": deviation });
			});
	},

	create: function (req, res) {
		res.send(501, { 
			error: 'deviations create not yet implemented'
		});
	},

	update: function (req, res) {
		res.send(501, { 
			error: 'deviations update not yet implemented'
		});
	},

	del: function (req, res) {
		res.send(501, { 
			error: 'deviations delete not yet implemented'
		});
	}

}