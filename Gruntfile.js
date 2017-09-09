
module.exports = function(grunt) {

	grunt.initConfig({

		cssmin: {
			options: {
				mergeIntoShorthands: false,
				roundingPrecision: -1
			},
			target: {
				files: {
					'views/styles/style.css': ['views/styles/src/*.css']
				}
			}
		},

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

		uglify: {
			src: {
				files: {
					'views/scripts/script.js': ['views/scripts/src/*.js']
				}
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
					'views/**/*.css',
					'views/**/*.pug',
					'test/**/*.test.js',
					'main.js'
				],
				tasks: ['build'],
				options: {
					spawn: false
				}
			}
		}
	})

	grunt.loadNpmTasks('grunt-express-server')
	grunt.loadNpmTasks('grunt-contrib-cssmin')
	grunt.loadNpmTasks('grunt-contrib-uglify')
	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.loadNpmTasks('grunt-tape')

	grunt.registerTask('default', ['build', 'watch'])
	grunt.registerTask('build', ['test', 'compress', 'reboot'])

	grunt.registerTask('compress', ['cssmin', 'uglify:src'])
	grunt.registerTask('reboot', ['express:dev:stop', 'express:dev'])
	grunt.registerTask('test', 'tape')
}
