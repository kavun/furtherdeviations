define([
	'ember',
	'text!templates/cultivations.html'
], function(Ember, template) {

	return Ember.View.extend({
		defaultTemplate: Ember.Handlebars.compile(template)
	});

});