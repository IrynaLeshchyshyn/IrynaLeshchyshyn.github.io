module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'src/sass',
        src: ['*.scss'],
        dest: 'www/css',
        ext: '.css'
      }]
    }
  },
  
  concat:{   
    dist:{
      src:['src/js/script.js', 'src/js/vendor/slick.min.js','src/js/vendor/lightslider.js'],
      dest:'www/js/mainscript.js'
    }
  },    

  watch: {
    sass: {
      // We watch and compile sass files as normal but don't live reload here
      files: ['**/*.scss'],
      tasks: ['concat','sass'],
    },
  }
  });
  

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default',['sass'],['watch'],['concat']);

};