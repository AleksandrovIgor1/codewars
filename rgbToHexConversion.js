// DESCRIPTION:
// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// 255, 255, 255 --> "FFFFFF"
// SOLUTION:
function rgb(r, g, b) {
	let convertSize = [r, g, b].map(item => item < 0 ? 0 : item > 255 ? 255 : item);
	let result = convertSize.map(item => item.toString(16).length == 2 ? item.toString(16) : 0 + item.toString(16));
	return result.join('').toUpperCase();
};
console.log(rgb(7, -13, 3));