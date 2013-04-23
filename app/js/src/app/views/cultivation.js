define([
	'ember',
	'text!templates/cultivation.html'
], function(Ember, template) {

	return Ember.View.extend({
		defaultTemplate: Ember.Handlebars.compile(template)
	});

});