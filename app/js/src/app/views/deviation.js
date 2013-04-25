define([
	'text!templates/deviation.html'
], function (template) {

	return Ember.View.extend({
		defaultTemplate: Ember.Handlebars.compile(template)
	});

});