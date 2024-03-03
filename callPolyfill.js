// DESCRIPTION:
// Implement the call method polyfill. Let's call it call2.
// Do not use call, apply or bind methods in your solution.
// SOLUTION:
Function.prototype.call2 = function(context, ...args) {
	context.this = this;
	return context.this(...args);
};
function f(a, b) {
return this.x + a + b;
};
const obj = {x: 100};
console.log(f.call2(obj, 20, 3)); // => 123