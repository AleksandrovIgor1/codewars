// DESCRIPTION:
// Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string.

// Note:

// Empty string values should be ignored.
// Empty arrays or null/nil/None values being passed into the method should result in an empty string being returned.
// Example: (Input --> output)

// ['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
// ['ninja', '', 'ronin'] --> "ninja and ronin"
// [] -->""
// SOLUTION:
function formatWords(words) {
	if (words === null) return '';
	let resultWords = words.filter(item => item !== '' && item !== null);
	return resultWords.length === 0 ? '' : resultWords.length === 1 ? resultWords[0] : resultWords.length === 2 ? resultWords[0] + ' and ' + resultWords[1] :  resultWords[0] + ', ' + resultWords.slice(1, resultWords.length - 1).join(', ') + ' and ' + resultWords[resultWords.length - 1];
};
console.log(formatWords(['one', '', 'three']));