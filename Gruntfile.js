
module.exports = function(grunt) {

	grunt.initConfig({

		express: {
			dev: {
				options: {
					script: 'main.js'
				}
			}
		},

		tape: {

			options: {
				pretty: true,
				output: 'console'
			},

			files: ['test/**/*.test.js']
		},

		watch: {

			options: {
				livereload: true
			},

			scripts: {
				files: [
					'database/**/*.js',
					'routes/**/*.js',
					'views/**/*.js',
					'views/**/*.pug',
					'test/**/*.test.js',
					'main.js'
				],
				tasks: ['test', 'reboot'],
				options: {
					spawn: false
				}
			}
		}
	})

	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.loadNpmTasks('grunt-express-server')
	grunt.loadNpmTasks('grunt-tape')

	grunt.registerTask('default', ['test', 'reboot', 'watch'])
	grunt.registerTask('test', 'tape')
	grunt.registerTask('reboot', ['express:dev:stop', 'express:dev'])
}
