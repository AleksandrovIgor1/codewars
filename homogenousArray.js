// DESCRIPTION:
// Given a two-dimensional array, return a new array which carries over only those arrays from the original, which were not empty and whose items are all of the same type (i.e. homogenous). For simplicity, the arrays inside the array will only contain characters and integers.

// Example:

// Given [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]], your function should return [[1, 5, 4], ['b']].
// SOLUTION:
function filterHomogenous(arrays) {
	const isNum = ((currArray) => typeof currArray == "number");
	const isStr = ((currArray) => typeof currArray == "string");
	const isEmpty = ((currArray) => currArray.length === 0);
	return arrays.filter(item => (item.every(isNum) || (item.every(isStr))) && !isEmpty(item));
};
console.log(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]));