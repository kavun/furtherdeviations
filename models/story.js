var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StorySchema = new Schema({

	deviation_id: { type: Schema.Types.ObjectId, ref: 'Deviation' },
	title       : String,
	author      : String,
	date_written: Date,
	description : String

});

module.exports = mongoose.model('Story', StorySchema);