define([
	'text!templates/deviations.html'
], function (template) {

	return Ember.View.extend({
		defaultTemplate: Ember.Handlebars.compile(template)
	});

});