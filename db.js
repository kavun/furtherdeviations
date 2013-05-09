var mongoose = require('mongoose');
var conf = require('./conf');
var Deviation = require('./models/deviation');
var Story = require('./models/story');

module.exports = {
	connect: function(url) {
		mongoose.connect(url);
		var db = mongoose.connection;
		db.on('error', console.error.bind(console, conf.color.brightred + 'connection error:' + conf.color.reset));
		db.once('open', function () {
			console.log('mongoose connected to ' + conf.color.brightcyan + url + conf.color.reset);
		});
	},

	deviations: {
		list: function () {
			return Deviation
				.find()
				.populate('stories')
				.exec();
		},
		read: function (id) {
			return Deviation
				.findById(id)
				.populate('stories')
				.exec();
		},
		create: null,
		update: null,
		del: null
	},

	stories: {
		list: function () {
			return Story
				.find()
				.populate('deviation')
				.exec();
		},
		read: function (id) {
			return Story
				.findById(id)
				.populate('deviation')
				.exec();
		},
		create: null,
		update: null,
		del: null
	}
}