var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DeviationSchema = new Schema({

	title         : String,
	date_published: Date,
	description   : String,
	stories       : [{ type: Schema.Types.ObjectId, ref: 'Story' }]

});

module.exports = mongoose.model('Deviation', DeviationSchema);