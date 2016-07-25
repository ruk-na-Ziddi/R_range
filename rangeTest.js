var r = require('./range.js').r;
var assert = require('assert');
var test = {};
exports.test = test;

test.range_gives_all_numbers_in_range = function(){
	assert.deepEqual(r.range(1,5),[1,2,3,4]);
	assert.deepEqual(r.range(2,5),[2,3,4]);
	assert.deepEqual(r.range(-5,1),[-5,-4,-3,-2,-1,0]);
};

test.range_can_work_on_decimals = function(){	
	assert.deepEqual(r.range(1.2,5),[1.2,2.2,3.2,4.2]);
	assert.deepEqual(r.range(2.1,5.1),[2.1,3.1,4.1]);
	assert.deepEqual(r.range(-5.25,1.3),[-5.25,-4.25,-3.25,-2.25,-1.25,-0.25,0.75]);
};

test.range_can_move_at_given_frequency = function(){	
	assert.deepEqual(r.range(1,3.1,0.5),[1,1.5,2,2.5,3]);
	assert.deepEqual(r.range(2.1,3.1,0.25),[2.1,2.35,2.6,2.85]);
};
