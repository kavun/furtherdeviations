define([

	'views/ApplicationView',
	'views/IndexView',

	'controllers/ApplicationController',
	'controllers/IndexController',

	'src/app/router',
	'routes/IndexRoute'

], function(
	ApplicationView,
	IndexView,

	ApplicationController,
	IndexController,

	Router,
	IndexRoute){

	var App = {
		ApplicationView: ApplicationView,
		IndexView: IndexView,

		ApplicationController: ApplicationController,
		IndexController: IndexController,
		
		Router: Router,
		IndexRoute: IndexRoute
	};

	return App;
});
