define(function () {

	var deviation = DS.Model.extend({

		title        : DS.attr('string'),
		datePublished: DS.attr('date'),
		description  : DS.attr('string'),
		stories      : DS.hasMany('FurtherDeviations.Story')

	});

	return deviation;
});