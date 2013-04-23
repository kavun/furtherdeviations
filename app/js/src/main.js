(function(root){

	require([ 'config' ], function(config){

		requirejs.config(config);

		require([
			'src/gaq', 
			'src/console', 

			'init', 
			'ember',
			'moment'
		], function(_gaq, console, init, Ember, moment){
			
			console.log(_gaq);
			console.log(console);
			console.log(init);
			console.log(Ember);

			var app_name = config.app_name || 'App';
			root[app_name] = init = Ember.Application.create(init);

			Ember.Handlebars.registerBoundHelper('date', function (date) {
				return moment(date).fromNow();
			});
			
		});

	});

})(this);