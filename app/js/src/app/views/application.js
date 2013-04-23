define([
	'ember',
	'text!templates/application.html'
], function(Ember, template) {

	var application = Ember.View.extend({
		defaultTemplate: Ember.Handlebars.compile(template)
	});

	return application;
});