/*global describe,it*/
'use strict';
var assert = require('assert'),
  binspec = require('../lib/binspec.js');

describe('binspec node module.', function() {
  it('must be awesome', function() {
    assert( binspec .awesome(), 'awesome');
  });
});
