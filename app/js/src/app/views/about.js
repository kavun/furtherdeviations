define([
	'ember',
	'text!templates/about.html'
], function(Ember, template) {

	var about = Ember.View.extend({
		defaultTemplate: Ember.Handlebars.compile(template)
	});

	return about;
});