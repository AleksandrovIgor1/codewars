// DESCRIPTION:
// Given a node object representing a binary tree:

// Node:
//   value: <int>,
//   left: <Node> or null,
//   right: <Node> or null
// write a function that returns the sum of all values, including the root. Absence of a node will be indicated with a null value.

// Examples:

// 10
// | \
// 1  2
// => 13

// 1
// | \
// 0  0
//     \
//      2
// => 3
// SOLUTION:
let tree = {value: 11, left: {value: 0, left: null, right: null}, right: {value: 0, left: null, right: {value: 1, left: null, right: null}}};
const sumTheTreeValues = (tree) => {
  const iter = (obj) => {
    const keys = Object.keys(obj);
    return keys.flatMap((key) => {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
          return iter(obj[key]);
      }
      return obj[key];
    });
  };
  return iter(tree).reduce((sum, curr) => sum + curr, 0);
};
console.log(sumTheTreeValues(tree));