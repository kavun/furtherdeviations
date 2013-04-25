module.exports = function (grunt) {

	grunt.initConfig({
		jshint: {
			options: {
				eqnull: true,
				eqeqeq: false,
				quotmark: 'single',
				undef: true,
				unused: true,
				lastsemic: true,
				globals: {
					jQuery: true,
					$: true,
					Ember: true,
					DS: true,
					module: true,
					require: true,
					requirejs: true,
					define: true,
					FurtherDeviations: true
				},
				node: true,
				browser: true
			},
			all: ['Gruntfile.js', 'server.js', 'views/**/*.js', 'routes/**/*.js', 'app/js/src/**/*.js']
		},
		watch: {
			files: '**/*',
			tasks: ['jshint']
		},
		requirejs: {
			compile: {
				options: {
					baseDir: './app/',
					mainConfigFile: './app/js/src/main.js',
					dir: './app/dist/',
					keepBuildDir: false,
					//Comment out the optimize line if you want
					//the code minified by UglifyJS
					optimize: 'uglify2',
					inlineText: true,
					paths: {
						'main':        '../../js/src/main',
						'gaq':         '../../js/src/gaq',
						'console':     '../../js/src/console',

						'init':        '../../js/src/app/init',
						'router':      '../../js/src/app/router',
						'store':       '../../js/src/app/store',
						'models':      '../../js/src/app/models',
						'views':       '../../js/src/app/views',
						'controllers': '../../js/src/app/controllers',
						'templates':   '../../js/src/app/templates',
						'routes':      '../../js/src/app/routes',

						// lib
						'handlebars':  '../../js/lib/handlebars/handlebars',
						'ember':       '../../js/lib/ember/ember',
						'ember-data':  '../../js/lib/ember-data/ember-data',
						'jquery':      '../../js/lib/jquery/jquery',
						'moment':      '../../js/lib/moment/moment',

						// requirejs-plugins
						'text':        '../../js/lib/requirejs-text/text',
						'hbs':         '../../js/lib/requirejs-hbs/hbs'
					},
					modules: [
						{
							name: 'main'
						},
						{
							name: 'init'
						}
					]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.registerTask('default', ['jshint']);
};