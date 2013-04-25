define([
	'text!templates/application.html'
], function (template) {

	return Ember.View.extend({
		defaultTemplate: Ember.Handlebars.compile(template)
	});

});