let apples: number = 5;

let nothingMuch: null = null;

let hasName: boolean = true;

let nothing: undefined = undefined;

//built in objects
let now: Date = new Date();

//Array
let colors: string[] = ['red', 'green', 'blue'];

let myNums: number[] = [1, 2, 3, 4, 5, 6];

let truths: boolean[] = [true, true, false];

//classes
class Car {}

let car: Car = new Car();

//Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//when to use annotations
//10 function that returns the 'any' type
const json = '{"x":10,"y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);
