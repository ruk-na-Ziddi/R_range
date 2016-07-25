var r = {};
exports.r = r;

r.range = function(from, to){
	return ((from + 1) == to) ? [from] : [from].concat(r.range(++from, to));
}
