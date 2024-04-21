// DESCRIPTION:
// Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.

// The time limited function should follow these rules:

// If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
// If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".
// SOLUTION:
var timeLimit = function(fn, t) {
	return async function(...args) {
			return new Promise((resolve, reject) => {
					const timeoutId = setTimeout(() => {
							reject("Time Limit Exceeded");
					}, t);
					fn(...args)
							.then((result) => {
									clearTimeout(timeoutId);
									resolve(result);
							})
							.catch(error => {
									clearTimeout(timeoutId);
									reject(error);
							});
			});
	};
};
// TEST
const fakeAsyncFunction = async (input) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Processed: ${input}`);
    }, 1000);
  });
};
const limitedAsyncFunction = timeLimit(fakeAsyncFunction, 1500);
limitedAsyncFunction("Test Input")
  .then((result) => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });