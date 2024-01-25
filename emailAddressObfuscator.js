// DESCRIPTION:
// Many people choose to obfuscate their email address when displaying it on the Web. One common way of doing this is by substituting the @ and . characters for their literal equivalents in brackets.

// Example:
// user_name@example.com => user_name [at] example [dot] com
// SOLUTION:
emailAddressObfuscator = (email) => {
	return email.split('').map(item => item === "@" ? item = " [at] " : item === "." ? item = " [dot] " : item).join('');
};
console.log(emailAddressObfuscator('test@123.com'));