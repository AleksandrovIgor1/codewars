// DESCRIPTION:
// Tale's dean wants to print a sortet list of his students by the gpa, last name and age and post it on the walls so everybody can be impressed of his great students.

// Given a list of students, sort them by (from most important to least important):

// GPA (descending)
// First letter of last name (ascending)
// Age (ascending)
// And the class Student:

// class Student {
//   constructor(age, gpa, fullName) {
//     this.age = age;
//     this.gpa = gpa;
//     this.fullName = fullName;
//   };
// };
// Return the sorted result as full names string, comma separated.

// For Example, given the list (name, age, gpa):

// David Goodman, 23, 88
// Mark Rose, 25, 82
// Jane Doe, 22, 90
// Jane Dane, 25, 90
// sort(students) should return "Jane Doe,Jane Dane,David Goodman,Mark Rose"
// SOLUTION:
function sort(students) {
	students.sort((a, b) => {
			if (b.gpa !== a.gpa) return b.gpa - a.gpa
			else 
					if (a.fullName.split(' ')[1][0] !== b.fullName.split(' ')[1][0]) return a.fullName.split(' ')[1].localeCompare(b.fullName.split(' ')[1]);
					else return a.age - b.age;
	});
	return students.map(item => item.fullName).join(',');
};