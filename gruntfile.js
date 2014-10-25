module.exports = function(grunt){

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-sass');


  var config = {
    client_dir: 'client/',
    build_dir: 'client/build/'
  };

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    config: config,

    clean: ['<%= config.build_dir %>'],

    copy: {
      html: {
        src: '<%= config.client_dir %>index.html',
        dest: '<%= config.build_dir %>'
      }
    }



  });

  grunt.registerTask('build', ['clean', 'copy:html']);


  grunt.registerTask('default', function(){
    console.log('initial grunt command... Does nothing');
  });

};
