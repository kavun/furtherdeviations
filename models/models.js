module.exports = (function () {

	var Schema = require('mongoose').Schema;

	var StorySchema = new Schema({

		deviation_id: { type: Schema.Types.ObjectId, ref: 'Deviation' },
		title       : String,
		author      : String,
		date_written: Date,
		description : String

	});

	function StoryModel(db) {
		db.model('Story', StorySchema);
		return db.model('Story');
	}

	var DeviationSchema = new Schema({

		title         : String,
		date_published: Date,
		description   : String,
		stories       : [{ type: Schema.Types.ObjectId, ref: 'Story' }]

	});

	function DeviationModel(db) {
		db.model('Deviation', DeviationSchema);
		return db.model('Deviation');
	}

	return {
		Deviation: DeviationModel,
		Story: StoryModel
	};

})();