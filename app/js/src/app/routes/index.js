define([ 'ember' ], function (Ember) {
	var index = Ember.Route.extend({
		model: function () {
			return [
				'HTML5 Boilerplate', 
				'RequireJS',
				'EmberJS'
			];
		}
	});
	return index;
});