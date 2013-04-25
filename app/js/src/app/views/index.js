define([
	'text!templates/index.html'
], function (template) {

	return Ember.View.extend({
		defaultTemplate: Ember.Handlebars.compile(template)
	});

});