/**
 *
 */

const phrases = {
	greeting: 'Hello there!',
	time: () => {
		const currentTime = new Date();
		return `The time is ${currentTime.getHours()}:${currentTime.getMinutes()}`;
	},
};

console.log(phrases.greeting);
console.log(phrases.time());

// this keyword - allows us to access the context
const person = {
	firstName: 'John',
	lastName: 'Doe',
	age: 45,
	address: {
		county: 'Mombasa',
	},
	// it`s important to use the normal function and not the arrow function as
	// it cannot access the the context through `this` keyword
	fullName: function () {
		// this.firstName = 'dsd'
		return `${this.firstName} ${this.lastName}`;
	},
	greet: function () {
		console.log(this);
	},
};

person.greet();

console.log(person.fullName());
// console.log(this.)

function PersonConstructor(name) {
	this.name = name;
	this.career = 'TM';
}

const personTwo = new PersonConstructor('Jane');

console.log(personTwo);

// Destructuring

const firstName = person.firstName;

console.log(firstName);

const { lastName, age, address } = person;

const { county } = address;

console.log(county);

const days = ['Monday', 'Tuesday'];

const [mon, tue, wed] = days;

console.log(wed);

// function default values
function greet(age = 18, name = 'Tony') {
	console.log(`Hi ${name} ${age}`);
}

greet(45, 'another');

// Rest / spread
function add(a, b, c, ...rest) {
	rest;
	return a + b + c;
}

const arr = [1, 2, 7, 45, 45, 23, 3];

console.log(add(...arr));
