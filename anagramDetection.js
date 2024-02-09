// DESCRIPTION:
// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"
// SOLUTION:
const isAnagram = function(test, original) {
	const lowerTest = objectСonvert(test.toLowerCase());
	const lowerOriginal = objectСonvert(original.toLowerCase());
	return isObjectsEqual(lowerTest, lowerOriginal);
};
const objectСonvert = (string) => {
	const object = {};
	for (let key of string) {
		object[key] = (object[key] || 0) + 1;
	}
	return object;
};
const isObjectsEqual = (object1, object2) => {
	let keys1 = Object.keys(object1);
	let keys2 = Object.keys(object2);
	if (keys1.length !== keys2.length) {
			return false;
					
	};

	for (let key of keys1) {
			if (object1[key] !== object2[key]) {
					return false;
			}
	}
	return true;
};
console.log(isAnagram("agda", "gada"))