module.exports = function(grunt) {

  grunt.initConfig({
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          require: [
            'coffee-script/register',
            function(){ expect=require('chai').expect; }
          ]
        },
        src: ['tests/**/*-spec.{js,coffee}']
      }
    },
    watch: {
      files: ['**/*.{js,coffee}'],
      tasks: ['mochaTest']
    },
    coffee: {
      glob_to_multiple: {
        expand: true,
        flatten: false,
        cwd: 'src/',
        src: ['**/*.coffee'],
        dest: 'dist/',
        ext: '.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('build', ['coffee']);
  grunt.registerTask('test', ['mochaTest']);

  grunt.registerTask('default', ['test', 'build']);

};
