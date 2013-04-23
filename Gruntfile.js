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
					module: true,
					require: true,
					requirejs: true,
					define: true,
					Cultivate: true
				},
				node: true,
				browser: true
			},
			all: ['Gruntfile.js', 'server.js', 'views/**/*.js', 'routes/**/*.js', 'app/js/src/**/*.js']
		},
		watch: {
			files: '**/*',
			tasks: ['jshint']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['jshint']);
};