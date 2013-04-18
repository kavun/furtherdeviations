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
		'App': 'src/app/app',		
		'models': 'src/app/models',
		'views': 'src/app/views',
		'controllers': 'src/app/controllers',
    	'templates': 'src/app/templates',
    	'routes': 'src/app/routes',

		// lib
		'handlebars': 'lib/handlebars/handlebars-1.0.rc.3',
		'ember': 'lib/ember/ember-1.0.0-rc.2',

		// requirejs-plugins
		'text': 'lib/requirejs/text-2.0.3',
		'hbs': 'lib/requirejs/hbs-0.4.4',
		'domReady': 'lib/requirejs/domReady-2.0.1'
	},

	// hbs plugin options
	hbs: {
		disableI18n: true,
		templateExtension: 'html'
	}

}); 

