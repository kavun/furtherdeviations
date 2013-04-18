define([ 'ember' ], function (Ember) {
	var IndexRoute = Ember.Route.extend({
		model: function () {
			return [
				'HTML5 Boilerplate', 
				'RequireJS',
				'EmberJS'
			];
		}
	});
	return IndexRoute;
});