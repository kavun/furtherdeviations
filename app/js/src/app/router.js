define(['ember'], function (Ember){

	var router = Ember.Router.extend();

	router.map(function () {
		this.resource('about');
		this.resource('cultivations', function () {
			this.resource('cultivation', { 
				path: ':cultivation_id' 
			});
		});
		this.route('index', {
			path: '/'
		});
	});

	return router;
});