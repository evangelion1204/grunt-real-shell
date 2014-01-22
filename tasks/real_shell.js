/*
 * grunt-real-shell
 * https://github.com/evangelion1204/grunt-real-shell
 *
 * Copyright (c) 2014 Michael Geppert
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('real_shell', 'Run a shell script synchronously', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var execute = require('exec-sync');
        var cmd = this.data.command;
        grunt.verbose.writeln('Command:', cmd);
        grunt.log.writeln( execute(cmd) );
    });

};
