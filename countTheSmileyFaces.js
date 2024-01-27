// DESCRIPTION:
// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']) => should return 2;
// SOLUTION:
function countSmileys(arr) {
	return arr.filter(item => (item.indexOf(':') !== -1 || item.indexOf(';') !== -1) && (item.indexOf('D') !== -1 || item.indexOf(')') !== -1)).filter(item => item.length === 3 ? item[1].indexOf('-') !== -1 || item[1].indexOf('~') !== -1 : item.length < 4).length;
};
console.log(countSmileys([":---)" , "))" , ";~~D" , ";D"]));