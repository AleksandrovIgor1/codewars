// DESCRIPTION:
// Add a groupBy method to Array.prototype so that elements in an array could be grouped by the result of evaluating a function on each element.
// The method should return an object, in which for each different value returned by the function there is a property whose value is the array of elements that return the same value.
// If no function is passed, the element itself should be taken.
// SOLUTION:
Array.prototype.groupBy = function(fn) {
	let object = {};
	if (typeof fn === 'function') {
			this.map(item => object[fn(item)] ? object[fn(item)].push(item) : object[fn(item)] = [item]);
			return object;
	}
	else {
			this.map(item => object[item] ? object[item].push(item) : object[item] = [item]);
			return object;
	}
};

console.log([1,2,3,2,4,1,5,1,6].groupBy(function(val) { return val % 3;}));
// {"0":[3,6],"1":[1,4,1,1],"2":[2,2,5]}