define([
	'ember',
	'text!templates/IndexTemplate.html'
], function(Ember, IndexTemplate) {

	var IndexView = Ember.View.extend({
		defaultTemplate: Ember.Handlebars.compile(IndexTemplate)
	});

	return IndexView;
});