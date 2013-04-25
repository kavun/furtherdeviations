requirejs.config({

	app_name: 'Further Deviations', 
	baseUrl: '../js/',
	shim : {
		// ember
		'ember' : {
			deps: [ 'handlebars', 'jquery' ],
			exports: 'Ember'
		},
		'ember-data': {
			deps: [ 'ember' ],
			exports: 'DS'
		},
		'bootstrap': {
			deps: [ 'jQuery' ]
		}
	},

	paths : {
		'gaq': 'src/gaq',
		'console': 'src/console',
		
		'init': 'src/app/init',
		'router': 'src/app/router',
		'store': 'src/app/store',
		'models': 'src/app/models',
		'views': 'src/app/views',
		'controllers': 'src/app/controllers',
		'templates': 'src/app/templates',
		'routes': 'src/app/routes',

		// lib
		'handlebars': 'lib/handlebars/handlebars',
		'ember': 'lib/ember/ember',
		'ember-data': 'lib/ember-data/ember-data',
		'jquery': 'lib/jquery/jquery',
		'moment': 'lib/moment/moment',
		'bootstrap': 'lib/bootstrap/bootstrap',

		// requirejs-plugins
		'text': 'lib/requirejs-text/text',
		'hbs': 'lib/requirejs-hbs/hbs'
	},

	// hbs plugin options
	hbs: {
		disableI18n: true,
		templateExtension: 'html'
	}

});

require([

	'gaq', 
	'console', 
	'ember',
	'ember-data',
	'moment'
	
], function (_gaq, console, Ember, DS, moment) {
	
	require([ 'init' ], function (init) {
		var app_name = 'FurtherDeviations';
		window[app_name] = init = Ember.Application.create(init);

		Ember.Handlebars.registerBoundHelper('date', function (date) {
			return moment(date).fromNow();
		});
	});

});