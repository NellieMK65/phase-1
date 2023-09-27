// const myHeader = document.getElementById('my-header');

// console.log(myHeader);

// const divElements = document.getElementsByClassName('my-div');

// console.log(divElements);

const h1Tags = document.getElementsByTagName('div');

console.log(h1Tags);

// const secondHeader = h1Tags[1];

// console.log(secondHeader);
// secondHeader.textContent = 'New header';

// Query selector
// body > div:nth-child(1) > ul > li:nth-child(2) > div > ul > li
const element = document.querySelector('ul.ranked-list li ul li');

console.log(element);

const secondElement = document.querySelector('ul.unranked-list li div');

console.log(secondElement);

// Query selectorAll
const divs = document.querySelectorAll('div');

console.log('Divs', divs);

// DOM Manipulation

// 1. creating elements dynamically
const paragraph = document.createElement('p');

// Adding content to elements
paragraph.innerText = 'This is my first dynamic paragraph tag';

// 2. Adding elements to the dom
const domManipulationDiv = document.getElementById('dom-manipulation');

domManipulationDiv.append(paragraph);

// Adding elements using innerHtml
const h1Tag = `<h1>H1 Tag</h1>`;

// domManipulationDiv.innerHTML = h1Tag;
domManipulationDiv.append(document.createElement('h1'));

//
const headerTwo = document.createElement('h2');

headerTwo.innerText = 'This is my second header';

domManipulationDiv.append(headerTwo);

// create anchor tag
const link = document.createElement('a');
link.innerText = 'Wikipedia';
link.href = 'https://en.wikipedia.org/wiki/Ada_Lovelace';

domManipulationDiv.append(link);

const secondDiv = document.getElementById('dom');
secondDiv.style.backgroundColor = '#f2f';
// secondDiv.style.

const elements = `
    <p  class="paragraph">This is the second div ${new Date().getFullYear()}</p>
    <h1></h1>
    <h2>This is inside the second div</h2>
    <a href="https://en.wikipedia.org/wiki/Ada_Lovelace">Ada Lovelace</a>
`;

secondDiv.innerHTML = elements;
