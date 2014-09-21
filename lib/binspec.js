/*
 * 
 * https://github.com/pingjiang
 *
 * Copyright (c) 2014 pingjiang
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs');
var xml2js = require('xml2js');

function Grammar() {
  
}

exports.parseGrammar = function(filepath, done) {
  fs.readFile(filepath, function(err, data) {
    var parser = new xml2js.Parser();
    parser.parseString(data, function (err, result) {
      if (err) {
        return done(err);
      }
      
      done(null, result);
    });
  });
};
