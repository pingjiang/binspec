'use strict';

var util = require('util');
var binspec = require('../lib/binspec.js');

binspec.parseGrammar('/Volumes/data/Code/synalyze_it_grammar/gif.grammar', function(err, result) {
  if (err) {
    throw err;
  }
  
  var gif = result.ufwb.grammar[0].structure;
  var parts = gif[0].structure;
  parts.forEach(function(part) {
    console.log(part.$.name);
  });
  // console.log(util.inspect(result, false, null));
});
