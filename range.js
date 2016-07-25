var r = {};
exports.r = r;

r.range = function(from, to, incrementBy){
	var next = (from + incrementBy) || (from + 1)
	return (next >= to) ? [from] : [from].concat(r.range(next, to, incrementBy));
}
