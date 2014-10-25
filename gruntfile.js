module.exports = function(grunt){

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-sass');


  var config = {
    client_dir: 'client/',
    build_dir: 'client/build/',

    app: {
      scss: 'client/src/app.scss'
    }
  };

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    config: config,

    clean: ['<%= config.build_dir %>'],

    copy: {
      html: {
        src: '<%= config.client_dir %>index.html',
        dest: '<%= config.build_dir %>',
        flatten: true
      }
    },

    sass: {
      includePaths: ['client/src/assets/settings'],
      dev: {
        outputStyle: 'nested',
        files: {
          '<%= config.build_dir %>test.css' : '<%= config.app.scss %>'
        }
      }
      /*build: {

      }*/
    }



  });

  grunt.registerTask('build', ['clean', 'sass:dev', 'copy:html']);


  grunt.registerTask('default', function(){
    console.log('initial grunt command... Does nothing');
  });

};
