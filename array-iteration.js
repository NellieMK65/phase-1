/**
 * Iteration - run statement once for each element
 *
 * Looping - run statments repetitevly until a certain condition is met
 */

const scores = [34, 87, 56, 28, 76];

// 1. indexOf - it finds the position of a given element and returns the index
// or returns -1 if the element is not found
const index = scores.indexOf(56);

console.log(index);

// 2. find - returns the first element in an array that meets a certain
// condition
const score = scores.find(function (score, index) {
	console.log(index);
	if (score === 28) {
		return score;
	}
});

console.log(score);

const scoreTwo = scores.find((score) => score > 56);

console.log(scoreTwo);

// 3. filter - finds and returns a list of elements that meet a certain
// condition
const filteredScores = scores.filter((score) => {
	console.log(score);
	if (score > 30) {
		return score;
	}
});

console.log(filteredScores);

const aboveAverageScores = scores.filter((score) => score > 50);

console.log(aboveAverageScores);

// 4. map - iterates through the whole array modifying each element and
// returns the modified array
const modifiedScores = scores.map((score, index) => {
	console.log(score);
	console.log(index);
	return score + 1;
});

console.log(scores);
console.log(modifiedScores);

// reduce - creates a summary or aggregation of values in an array
const total = scores.reduce((prevValue, currValue, index) => {
	console.log(prevValue);
	console.log(currValue);
	return prevValue + currValue;
}, 0);

console.log(total);

// forEach
scores.forEach((score, index) => {
	console.log(score);
	console.log(index);
});

for (let i = 0; i < scores.length; i++) {
	const score = scores[i];
	console.log(score);
	console.log(i);
}
