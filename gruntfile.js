module.exports = function(grunt){

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');


  var config = {
    client_dir: 'client/',
    build_dir: 'client/build/',
    build_dir_js: 'client/build/vendor/',

    app: {
      scss: 'client/src/app.scss'
    },

    vendor_files: {
      js: [
        'vendor/angular/angular.js',
        'vendor/angular-route/angular-route.js',
        'vendor/foundation/js/foundation.js',
        'vendor/jquery/dist/jquery.js'
      ]
    }
  };

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    config: config,

    clean: ['<%= config.build_dir %>'],

    copy: {
      html: {
        files: [
          {
            expand: true,
            dest: '<%= config.build_dir %>',
            src: '<%= config.client_dir %>index.html',
            flatten: true
          },
          {
            expand: true,
            cwd: '<%= config.client_dir %>/src/',
            src: '**/*.html',
            dest: '<%= config.build_dir %>'
          }
        ]
      },
      app_js: {
        files: [
          {
            expand: true,
            cwd: '<%= config.client_dir %>/src/',
            src: '**/*.js',
            dest: '<%= config.build_dir %>'
          }
        ]
      },
      vendor_js: {
        files: [
          {
            expand: true,
            flatten: true,
            src: '<%= config.vendor_files.js %>',
            dest: '<%= config.build_dir_js %>'
          }
        ]
      }
    },

    sass: {
      dev: {
        outputStyle: 'nested',
        files: {
          '<%= config.build_dir %><%= pkg.name %>.css' : '<%= config.app.scss %>'
        }
      }
    },

    watch: {
      scss: {
        files: '<%= config.client_dir %>**/*.scss',
        tasks: ['sass:dev'],
        options: {
          livereload: true
        }
      },
      js: {
        files: '<%= config.client_dir %>**/*.js',
        tasks: ['copy:app_js'],
        options: {
          options: {
            livereload: true
          }
        }
      },
      html: {
        files: '<%= config.client_dir %>**/*.html',
        tasks: ['copy:html'],
        options: {
          livereload: true
        }
      }
    }



  });

  grunt.registerTask('build', ['clean', 'sass:dev', 'copy:vendor_js',
    'copy:app_js', 'copy:html']);


  grunt.registerTask('default', ['build', 'watch']);

  grunt.event.on('watch', function(action, filepath, target) {
    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });

};
