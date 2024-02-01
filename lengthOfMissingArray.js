// DESCRIPTION:
// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!


// You have to write a method, that return the length of the missing array.

// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3
// SOLUTION:
function getLengthOfMissingArray(arrayOfArrays) {
	if (arrayOfArrays === null || arrayOfArrays.some(arr => arr === null)) {
		return 0;
	}
	let lengthOfArrays = arrayOfArrays.map(item => (item === null) ? 0 : item.length);
	if (lengthOfArrays.includes(0)) {
		return 0;
	}
	let maxArrayElem = Math.max(...lengthOfArrays);
	let minArrayElem = Math.min(...lengthOfArrays);
	let totalLengthOfArrays = Array.from({ length: maxArrayElem - minArrayElem + 1 }, (_, index) => index + minArrayElem);
	let result = totalLengthOfArrays.find(item => lengthOfArrays.indexOf(item) == -1);
	return result !== undefined ? result : 0;
};

console.log(getLengthOfMissingArray([ [ null ], [ null, null, null ] ]));