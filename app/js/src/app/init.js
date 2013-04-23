define([
	'models/cultivation',

	'views/application',
	'views/index',
	'views/about',
	'views/cultivations',
	'views/cultivation',

	'controllers/application',
	'controllers/index',

	'routes/index',
	'routes/cultivations',

	'router',
	'store'

], function (
	Cultivation,

	ApplicationView,
	IndexView,
	AboutView,
	CultivationsView,
	CultivationView,

	ApplicationController,
	IndexController,

	IndexRoute,
	CultivationsRoute,

	Router,
	Store){

	var App = {
		Cultivation: Cultivation,

		ApplicationView: ApplicationView,
		IndexView: IndexView,
		AboutView: AboutView,
		CultivationsView: CultivationsView,
		CultivationView: CultivationView,

		ApplicationController: ApplicationController,
		IndexController: IndexController,
		
		IndexRoute: IndexRoute,
		CultivationsRoute: CultivationsRoute,

		Router: Router,
		Store: Store
	};

	return App;
});
