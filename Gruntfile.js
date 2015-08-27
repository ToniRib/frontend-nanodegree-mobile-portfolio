// ngrok & pagespeed insights capability per James Cryer
// http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/

// Declare the ngrok variable
var ngrok = require('ngrok');

module.exports = function(grunt) {

    // Load grunt tasks
    require('load-grunt-tasks')(grunt);

    // Grunt configuration tasks
    grunt.initConfig({

        // Read the package.json file
        pkg: grunt.file.readJSON('package.json'),

        // Minify the javascript file
        uglify: {
            build: {
                src: 'js/perfmatters.js',
                dest: 'js/perfmatters.min.js'
            }
        },

        // Minify the CSS files
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css/',
                    ext: '.min.css'
                }]
            }
        },

        // compress: {
        //     main: {
        //         options: {
        //             mode: 'gzip'
        //         },
        //         expand: true,
        //         cwd: 'css/',
        //         src: ['**/*'],
        //         dest: 'css/zip/'
        //     }
        // },

        // Optimize the images in the img/ folder
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'img/build/'
                }]
            },
        },

        // Inline the CSS into the index.html file
        inlinecss: {
            main: {
                options: {},
                files: {
                    'index_production.html': 'index.html'
                }
            }
        },

        // Run a clean up function so images don't get recursively optimized
        clean: {
            build: {
                src: 'img/build/'
            }
        },

        // Add task to use pagespeed insights with a threshold of 90
        pagespeed: {
            options: {
                nokey: true,
                locale: "en_GB",
                threshold: 90
            },
            local: {
                options: {
                    strategy: "desktop"
                }
            },
            mobile: {
                options: {
                  strategy: "mobile"
                }
            }
        }
    });

    // Register customer task for ngrok using port 8080
    grunt.registerTask('psi-ngrok', 'Run pagespeed with ngrok', function() {
        var done = this.async();
        var port = 8080;

        ngrok.connect(port, function(err, url) {
            if (err !== null) {
                grunt.fail.fatal(err);
                return done();
            }
            grunt.config.set('pagespeed.options.url', url);
            grunt.task.run('pagespeed');
            done();
        });
    });

    // Tell grunt to use the plugins
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-inline-css');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // grunt.loadNpmTasks('grunt-contrib-compress');


    // Register the tasks as default actions for the 'grunt' command
    grunt.registerTask('default', ['clean', 'uglify', 'cssmin', 'imagemin', 'inlinecss', 'psi-ngrok']);

};