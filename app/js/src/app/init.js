define([

	'views/ApplicationView',
	'views/IndexView',

	'controllers/ApplicationController',
	'controllers/IndexController',

	'routes/IndexRoute',

	'router'

], function(
	ApplicationView,
	IndexView,

	ApplicationController,
	IndexController,

	IndexRoute,

	Router){

	var App = {
		ApplicationView: ApplicationView,
		IndexView: IndexView,

		ApplicationController: ApplicationController,
		IndexController: IndexController,
		
		IndexRoute: IndexRoute,

		Router: Router
	};

	return App;
});
