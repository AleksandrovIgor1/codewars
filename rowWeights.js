function rowWeights(array) {
	let evenCounter = 0;
	let oddCounter = 0;
	let result = [];
	array.map((item, index) => index % 2 === 0 ? evenCounter += item : oddCounter += item);
	result.push(evenCounter, oddCounter);
	return result;
};
console.log(rowWeights([13, 27, 49]));