// DESCRIPTION:
// Given a number as a parameter (between 2 and 30), return an array containing strings which form a box.
// Like this:

// n = 5

// [
//   '-----',
//   '-   -',
//   '-   -',
//   '-   -',
//   '-----'
// ]
// SOLUTION:
function makeASquareBox(n) {
	let resultArray = [];
	let startEndString = "-".repeat(n);
	let midString = "-" + " ".repeat(n - 2) + "-";
	resultArray.push(startEndString, ...Array(n - 2).fill(midString), startEndString);
	return resultArray;
};
console.log(makeASquareBox(5));