module.exports = (grunt) => {

  grunt.initConfig({
    jshint: {
      files: ['*.js', 'Array/*.js', 'LinkedList/*.js', 'BinarySearchTree/*.js', 'test/*.js' ],
      options: {
        esnext: true,
        expr: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint']);

};