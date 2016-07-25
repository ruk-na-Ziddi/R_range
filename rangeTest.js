var r = require('./range.js').r;
var assert = require('assert');
var test = {};
exports.test = test;

test.range_gives_all_numbers_in_range = function(){
	assert.deepEqual(r.range(1,5),[1,2,3,4]);
	assert.deepEqual(r.range(2,5),[2,3,4]);
	assert.deepEqual(r.range(-5,1),[-5,-4,-3,-2,-1,0]);
};
