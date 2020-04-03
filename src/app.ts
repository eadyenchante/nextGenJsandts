let userName = "eady";

userName = "blah";

// let age = 40;
// age = 40;

// if(age > 20){
//     let isOld = true;
//     console.log(isOld);
// }

const add = (a: number, b: number = 1) => {
  return a + b;
};

console.log(add(2, 2));

// const printOutput = (output: string | number) => {
//     console.log(output);
// }

// printOutput(add(5, 2));

// const printOutput: (a:string | number) => void = output => {
//     console.log(output);
// }

// printOutput(add(5, 2));

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", event => console.log(event));
}

// const hobbies = ['sports', 'cooking'];
//const activeHobbies = ['hiking', ...hobbies];

// activeHobbies.push('running', ...hobbies);

// console.log(activeHobbies);

// const person = {
//     name: 'max',
//     age: 30
// };

// const copiedPerson = {
//     ...person,
//     hairColour: 'blue'
// };

// console.log(copiedPerson);

// array destructuring

// const hobbies = ['sports', 'cooking', 'cycling', 'running'];

// const [h1, h2, ...rh] = hobbies;

// console.log(h1, h2, rh);

// object destructuring

const person = {
  firstName: "max",
  age: 30
};

const { firstName: newName, age } = person;

console.log(newName, age);

