// DESCRIPTION:
// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string.

// If the score < 0, return 0.

// For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// SOLUTION:
function checkExam(array1, array2) {
	let result = 0;
	array1.map((item, index) => array2[index].includes(item) ? result += 4 : !array2[index].includes(item) && array2[index].length ? --result : result);
	return result < 0 ? 0 : result;
}
console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));