define({

	app_name: 'Cultivate', 
	baseUrl: '../js/',
	shim : {
		'ember' : {
			deps: [ 'handlebars', 'jquery' ],
			exports: 'Ember'
		},
		'gaq': {
			deps: [ 'jquery' ]
		}
	},

	paths : {
		'init': 'src/app/init',
		'router': 'src/app/router',	
		'models': 'src/app/models',
		'views': 'src/app/views',
		'controllers': 'src/app/controllers',
		'templates': 'src/app/templates',
		'routes': 'src/app/routes',

		// lib
		'handlebars': 'lib/handlebars/handlebars',
		'ember': 'lib/ember/ember',
		'jquery': 'lib/jquery/jquery',

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