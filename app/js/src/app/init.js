define([
	
	'router',
	'store',

	'views/application',
	'controllers/application',

	'routes/index',
	'views/index',
	'controllers/index',

	'views/about',

	'models/deviation',
	'views/deviation',
	'routes/deviations',
	'views/deviations',

	'models/story'
	
], function (

	Router,
	Store,

	ApplicationView,
	ApplicationController,

	IndexRoute,
	IndexView,
	IndexController,

	AboutView,

	Deviation,
	DeviationView,
	DeviationsRoute,
	DeviationsView,

	Story

	){

	var App = {

		Router: Router,
		Store: Store,

		ApplicationView: ApplicationView,
		ApplicationController: ApplicationController,

		IndexRoute: IndexRoute,
		IndexView: IndexView,
		IndexController: IndexController,

		AboutView: AboutView,

		Deviation: Deviation,

		DeviationsRoute: DeviationsRoute,
		DeviationsView: DeviationsView,

		DeviationView: DeviationView,

		Story: Story
		
	};

	return App;
});