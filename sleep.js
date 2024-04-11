// DESCRIPTION:
// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
// SOLUTION:
async function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
};

// let t = Date.now()
// sleep(100).then(() => console.log(Date.now() - t)) // 100
