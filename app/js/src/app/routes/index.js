define(function () {
	
	return Ember.Route.extend({
		model: function () {
			return [
				'HTML5 Boilerplate', 
				'RequireJS',
				'EmberJS'
			];
		}
	});

});