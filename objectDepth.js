// DESCRIPTION:
// Object depth
// Write a JavaScript function that returns the depth of an object. This function takes one argument that can be any data-type.

// The depth of an object, say obj, is how many nested objects obj contains.

// Assume an empty object has a depth of 0, while an object non-empty but without nested objects has a depth of 1.

// For example :

// var obj = {a: 1, b: {c: 2}};
// has a depth of 2 because it is a non-empty object containing another non-empty object.
// While :
// var emptyObj = {};
// has a depth of 0 because it is empty.
// And :
// var obj = {a: 1, b: 2, c: 3};
// has a depth of 1.

// Arrays should always return a depth of 0.
// Be careful about null
// SOLUTION:
function depth(obj) {
	if (typeof obj !== 'object' || obj === null || Array.isArray(obj) || Object.keys(obj).length === 0) {
		return 0;
	}
	let d = 0;
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			let currDepth = depth(obj[key]);
			if (currDepth > d) {
				d = currDepth;
			}
		}
	}
	return d + 1;
};
console.log(depth({
	a: 1,
	b: {
		c: 2
	}
}));