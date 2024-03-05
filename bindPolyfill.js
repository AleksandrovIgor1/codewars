// DESCRIPTION:
// Implement the bind method polyfill. Let's call it bind2.
// Do not use call, apply or bind methods in your solution.
// SOLUTION:
Function.prototype.bind2 = function(context, ...args) {
  let object = {...context};
  let key = Symbol();
  object[key] = this;
  return function() {
    return object[key](...args);
  };
};
let obj = {
  name: 'Jack',
  l: 'ss'
};

let myFunc = function () {
  console.log(`${this.name}`);
  console.log(`${this.l}`);
};
let newFunc = myFunc.bind2(obj)
console.log(newFunc()) // Jack