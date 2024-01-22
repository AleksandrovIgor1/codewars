// DESCRIPTION
// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.
// SOLUTION:
function expandedForm(num) {
	return Array.from(String(num), Number).map((item, index) => item + "0".repeat(String(num).length - 1 - index)).filter(item => item != 0).join(' + ');
};
console.log(expandedForm(70304));