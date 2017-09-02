
module.exports = function(grunt) {

	grunt.initConfig({

		express: {
			dev: {
				options: {
					script: 'main.js'
				}
			}
		},

		mochaTest: {
			test: {
				options: {
					reporter: 'spec'
				},
				src: ['tests/**/*.test.js']
			}
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
					'main.js'
				],
				tasks: ['test-scripts', 'reboot'],
				options: {
					spawn: false
				}
			}
		}
	})

	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.loadNpmTasks('grunt-mocha-test')
	grunt.loadNpmTasks('grunt-express-server')

	grunt.registerTask('default', ['watch'])
	grunt.registerTask('test-scripts', 'mochaTest')
	grunt.registerTask('reboot', ['express:dev:stop', 'express:dev'])
}
