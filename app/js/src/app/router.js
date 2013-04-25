define(function () {

	var router = Ember.Router.extend();

	router.map(function () {

		this.resource('about');

		this.resource('deviations', function () {
			this.resource('deviation', { 
				path: ':deviation_id' 
			});
		});
		
		this.route('index', {
			path: '/'
		});
	});

	return router;
});