module.exports = function(grunt) {

  grunt.initConfig({
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          require: [
            function() { expect = require('chai').expect; }
          ]
        },
        src: ['tests/**/*-spec.js']
      }
    },
    watch: {
      files: ['**/*.js'],
      tasks: ['mochaTest']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('test', ['mochaTest']);

  grunt.registerTask('default', ['test']);

};
