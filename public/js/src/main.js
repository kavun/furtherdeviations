(function(root){

	require([ 'config' ], function(config){

		requirejs.config(config);

		require(['src/gaq', 'src/console', 'App', 'ember'], function(_gaq, console, App, Ember){
			
			console.log(_gaq);
			console.log(console);
			console.log(App);
			console.log(Ember);

			var app_name = config.app_name || 'App';
			root[app_name] = App = Ember.Application.create(App);

		});

	});

})(this);