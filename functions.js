/**
 ** FUNCTIONS
 * Group statements together and allows us to reuse the said
 * said statements
 *
 * Parameters - variables listed in the paranthesis of functions
 * Arguments - values that are passed that passed when calling/invoking functions
 */

//  Syntax
function functionName(parameters) {}

// Hoisting
// sayHello();

function sayHello(name, address, cars) {
	console.log(address);
	console.log(cars);
	console.log(`Greetings ${name}`);
}

// call/invoke the function
// p.o.box
sayHello('Tony Stark', { county: 'Nairobi', address: 4500 }, ['BMW', 'Audi']);

// return values from functions
function sum(numberOne, numberTwo) {
	if (typeof numberOne == 'number' && typeof numberTwo == 'number') {
		return numberOne + numberTwo;
	}

	return 'Invalid data type';
}

const firstName = 'Tony';
const results = sum(78, 98);
results;

// Arrow functions
// Syntax
const randomNumber = 968;

const greeting = (name) => `Hi, ${name}`;

console.log(greeting('Bruce Wayne'));

// console.log(sumTwo(34, 54))

/**
 ** CALLBACK FUNCTIONS
 * Functions that are passed as arguments into other functions and
 * might be invoked/called
 *
 * In JS functions can be referred to as first class functions, means
 * we can treat functions like other values
 */
function greetings(evening) {
	console.log('Good evening');

	console.log(evening('Tony'));
}

// Anonymous functions - functions without identifiers/names
greetings(function (name) {
	return `Good evening from ${name}`;
});

greetings(() => `Good evening from arrow function`);

// Returning functions as values
function functionA(name) {
	console.log('I am inside function A');

	return function (named) {
		const name = 'new name';
		console.log(`I am inside a ${name} function`);
	};
}

// Access the function from the return value
const functionB = functionA('returned');

// Execute the funtion by calling/invoking it
functionB('return');

const sumTwo = (numberOne, numberTwo) => numberOne + numberTwo;

const sumOfTwo = sumTwo(21, 54);

sumOfTwo;
