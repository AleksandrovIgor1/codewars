// DESCRIPTION:
// The problem:
// Having created a function NamedOne which takes first & last names as parameters and returns an object with firstName, lastName and fullName ( = firstName + a space + lastName ) properties which should be all accessibles, we discovered that "accessible" also means "mutable".

// If, for example, we've got a "NamedOne" like this :
// var namedOne = new NamedOne("Naomi","Wang")
// namedOne.firstName -> "Naomi"
// namedOne.lastName -> "Wang"
// namedOne.fullName -> "Naomi Wang"

// ...properties may be changed :
// namedOne.firstName = "John"
// namedOne.firstName -> "John"
// namedOne.lastName = "Doe"
// namedOne.lastName -> "Doe"
// ...but all properties are not updated !
// namedOne.fullName -> "Naomi Wang" 
// //-- Oh no ! we want fullName == "John Doe" now !

// Your mission:
// So the purpose of this kata is to create an object with accessible and "updatable" properties.
// If .firstName or .lastName are changed, then .fullName should also be changed
// If .fullName is changed, then .firstName and .lastName should also be changed.
// Note : "input format" to .fullName will be firstName + space+ lastName. If given fullName isn't valid then no property is changed.
// SOLUTION:
function NamedOne(first, last) {
	this.firstName = first;
	this.lastName = last;
	this.fullName = this.firstName + ' ' + this.lastName;
};
Object.defineProperty(NamedOne.prototype, 'firstName', {
			get: function() {
					return this._firstName; 
			},
	set: function(value) {
			this._firstName = value;
			this.fullName = value + ' ' + this.lastName;
	}
});
Object.defineProperty(NamedOne.prototype, 'lastName', {
			get: function() {
					return this._lastName; 
			},
			set: function(value) {
					this._lastName = value;
					this.fullName = this.firstName + ' ' + value;
			}
});
Object.defineProperty(NamedOne.prototype, 'fullName', {
			get: function() {
					return this._fullName; 
			},
			set: function(value) {
					let arrayFirstAndLast = value.split(' ');
					if (arrayFirstAndLast.length === 2) {
							this._firstName = arrayFirstAndLast[0];
							this._lastName = arrayFirstAndLast[1];
							this._fullName = value;
							
					}
			}
});
var namedOne = new NamedOne("Naomi","Wang")

namedOne.firstName = "John"
namedOne.lastName = "Doe"
// ...then...
console.log(namedOne.fullName); // -> "John Doe"

// -- And :
namedOne.fullName = "Bill Smith"
// ...then...
console.log(namedOne.firstName); // -> "Bill"
console.log(namedOne.lastName);  // -> "Smith"

// -- But :
namedOne.fullName = "Tom" // -> no : lastName missing
namedOne.fullName = "TomDonnovan" // -> no : no space between first & last names
console.log(namedOne.fullName); // -> "Bill Smith" (unchanged)