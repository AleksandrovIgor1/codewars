// DESCRIPTION:
// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.
// "CodEWaRs" --> [0,3,4,6]
//Solution
const capitals = function (word) {
	let wordArray = word.split('');
	let upperArray = wordArray.filter((item) => item == item.toUpperCase());
	return upperArray.map((item) => wordArray.indexOf(item));
}
console.log(capitals('CodEWaRs'));