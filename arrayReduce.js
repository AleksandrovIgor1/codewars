// DESCRIPTION:
// In this kata, you must define the Array.reduce method.

// ['a','b','a'].reduce( function(obj, elem){if(!obj[elem]) obj[elem] = 0; obj[elem] += 1; return obj}, {})
// // => {'a':2, 'b':1}
// Summary: The reduce method goes through each element of an array, applies the function to whatever the function returned last, and returns the last outcome. On the first iteration, it should pass the initial value to the function, as well as the first element of the array. If no initial value is passed, skip to the first element of the array.
// SOLUTION
Array.prototype.reduce2 = function(process, initial) {
	let acc = initial === undefined ? this[0] : initial;
	for (let i = initial === undefined ? 1 : 0; i < this.length; i++) {
			acc = process(acc, this[i], i, this);
	}
	return acc;
};
console.log([1,2,3].reduce2( function(sum, next){return sum+next}, 0)); 
// => 6