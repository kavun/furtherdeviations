define([
	'ember',
	'text!templates/applicationTemplate.html'
], function(Ember, ApplicationTemplate) {

	var ApplicationView = Ember.View.extend({
		defaultTemplate: Ember.Handlebars.compile(ApplicationTemplate)
	});

	return ApplicationView;
});