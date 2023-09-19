// JS Variables - container used to store values for later retrieval

/**
 ** RULES
 * Starts with lowercase
 * Uses camelCase naming convention
 * Don`t uppercase
 * No reserved keywords
 * No spaces in between if having more than one word
 * Don`t use shortforms
 */

/**
 ** DECLARING/CREATING variables
 * 1. const
 * --> Immutability - (Value cannot change)
 * --> Cannot be redeclare/reassign
 * 2. let
 * --> Mutable - (Value can change)
 * --> Cannot redeclare but you can reassign
 * !3. var
 * --> Can be redeclared and reassigned (mutable)
 * --> Does not have block scope
 * ! DON`T USE IT
 *
 */

/**
 * * DATATYPES
 * 1. Numbers (045, 0.034, -34, Infinity)
 * 2. Strings
 * 3. Boolean (true/false)
 * 4. Null
 * 5. Undefined
 * 6. Objects
 * 7. Arrays
 * 8. Symbols
 */

//  Strings
const fullName = 'John'; //double quote
const age = '12'; //Single quote

// String interpolation (Injecting values of an expression into a string using ${})
const address = 'Kinoo';
const town = `Nairobi, ${address}`; //backticks

// String concatination using (+) operator
const fullAddress = town + ' ' + fullName;
console.log(fullAddress);

console.log(typeof fullAddress);

// Objects - collection data consisting of key/value pairs (properties) separated by commas
const student = {
	name: 'John Doe',
	cohort: 'FT06',
	age: 20,
	nationality: 'Kenyan',
	courses: ['Phase 0', 'Phase 1'],
};

// Accessing values in Objects
// 1. Dot notation (.)
console.log(student.age);
// 2. Square bracket notation ([])
console.log(student['courses']);

// Adding/Updating values to an object
student.email = 'john@gmail.com';

console.log(student);

student.age = 21;

console.log(student);

// Deleting values
delete student.email;

console.log(student);

// Arrays - an ordered list of related data
const scores = [45, 43, 54, 23];

// Index - position of an element in an array (starts at index 0)

// Accessing values
console.log(scores[2]);

/**
 * * COMPARISION OPERATORS
 * Boolean expression - anything that evaluates to true or false
 * 1. Strict Equality Operator (===) - compares the values & the data type
 * 2. Strict Inequality Operator (!==) - NOT equal
 * 3. Loose Equality Operator (==) - compares the values & doesnot compare the data type
 * 4. Loose Inequality Operator (!=)
 *
 */

// 1.
console.log(45 === '45');

// 2
console.log(45 != '46');

/**
 ** NUMBER OPERATORS
 * Greater than (>)
 * Less than (<)
 * Less than or equal (<=)
 * Greater than or equal (>=)
 */
console.log(98 >= 99);

/**
 ** LOGICAL OPERATORS
 * 1. NOT/bang operator (!) - returns the opposite
 * 2. Double bang operator (!!)
 * 2. AND (&&)
 * 3. OR (||) - double pipe
 */
console.log(!false);
console.log(!true);

// Boolean()
console.log(Boolean(''));
console.log(!!'');

// AND
console.log(45 != '46' && 98 >= 98);

// OR
console.log(45 != '45');
console.log(45 != '45' || 98 >= 98);
