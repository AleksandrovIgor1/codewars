// DESCRIPTION:
// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3.

// Note that the number will always be non-negative (>= 0).
// SOLUTION:
function insertDash(num) {
    let answerString = "";
    let string = Array.from(String(num)).join('');
    for (let i = 0; i < string.length; i++) {
        answerString += string[i];
        if (string[i] % 2 !== 0 && string[i + 1] % 2 !== 0 && i < string.length - 1) {
            answerString += '-';
        }
    }
    return answerString;
};
console.log(insertDash(454793));