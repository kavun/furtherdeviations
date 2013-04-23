define([
	'ember',
	'text!templates/index.html'
], function(Ember, template) {

	var index = Ember.View.extend({
		defaultTemplate: Ember.Handlebars.compile(template)
	});

	return index;
});