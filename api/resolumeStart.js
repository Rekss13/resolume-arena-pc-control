'use strict';

const spawn = require('child_process').spawn;

const cmd = 'C:\\Program Files\\Resolume Arena 6\\Arena.exe';

exports.load = function() {
  return spawn(cmd);
}