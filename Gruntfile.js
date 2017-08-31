
module.exports = function(grunt) {

	grunt.initConfig({

		express: {
			dev: {
				options: {
					script: 'main.js'
				}
			}
		},

		watch: {

			options: {
				livereload: true
			},

			express: {
				files: [
					'front/source/**/*.handlebars',
					'front/views/**/*.pug',
					'front/source/**/*.js',
					'back/**/*.js',
					'main.js'
				],
				tasks: ['reboot'],
				options: {
					spawn: false
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express-server');

	grunt.registerTask('default', ['watch']);
	grunt.registerTask('reboot', ['express:dev:stop', 'express:dev']);
};
