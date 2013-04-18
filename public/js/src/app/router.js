define(['ember'], function(Ember){

	var Router = Ember.Router.extend();

	Router.map(function () {
		this.route('index', {
			path: '/'
		});
	});

	return Router;
});