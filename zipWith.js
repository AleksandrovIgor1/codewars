// DESCRIPTION:
// Task
// zipWith ( or zip_with ) takes a function and two arrays and zips the arrays together, applying the function to every pair of values.
// The function value is one new array.

// If the arrays are of unequal length, the output will only be as long as the shorter one.
// (Values of the longer array are simply not used.)

// Inputs should not be modified.

// Examples
// zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )      =>  [1,10,100,1000]
// SOLUTION:
function zipWith(fn, a0, a1) {
  let length = Math.min(a0.length, a1.length);
  let result = [];
  for (let i = 0; i < length; i++) {
      result.push(fn(a0[i], a1[i]));
  }
  return result;
};
console.log(zipWith(function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3]));