// DESCRIPTION:
// A magic index in an array A[1...n-1] is defined to be an index such that A[i] = i. Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A.

// findMagic([-20,-10,2,10,20]) => 2
// SOLUTION:
function magicIndex(arr) {
	let result = +arr.filter((item, index) => item === index);
	return result === 0 ? -1 : result;
};
console.log(magicIndex([-20,-10,2,10,20]));