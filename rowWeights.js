// // DESCRIPTION:
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
// rowWeights([13, 27, 49])  ==>  return (62, 27)
// SOLUTION:
function rowWeights(array) {
	let evenCounter = 0;
	let oddCounter = 0;
	let result = [];
	array.map((item, index) => index % 2 === 0 ? evenCounter += item : oddCounter += item);
	result.push(evenCounter, oddCounter);
	return result;
};
console.log(rowWeights([13, 27, 49]));