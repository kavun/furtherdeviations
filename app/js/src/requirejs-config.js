define({

	app_name: 'Cultivate', 
	baseUrl: '../js/',
	shim : {
		'ember' : {
			deps: [ 'handlebars', 'jquery' ],
			exports: 'Ember'
		},
		'ember-data': {
			deps: [ 'ember' ],
			exports: 'DS'
		},
		'gaq': {
			deps: [ 'jquery' ]
		}
	},

	paths : {
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