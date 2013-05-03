define(function () {

	var story = DS.Model.extend({

		title      : DS.attr('string'),
		author     : DS.attr('string'),
		dateWritten: DS.attr('date'),
		description: DS.attr('string'),
		deviation  : DS.belongsTo('FurtherDeviations.Deviation')

	});

	return story;
});