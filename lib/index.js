'use strict';

var fs = require('fs');
var thenify = require('thenify');

exports.readdir = thenify(fs.readdir);
exports.stat = thenify(fs.stat);
exports.readFile = thenify(fs.readFile);
exports.writeFile = thenify(fs.writeFile);
exports.access = thenify(fs.access);
