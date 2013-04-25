define([
	'text!templates/about.html'
], function (template) {

	return Ember.View.extend({
		defaultTemplate: Ember.Handlebars.compile(template)
	});

});