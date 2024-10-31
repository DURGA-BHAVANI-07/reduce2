// Given an array of numbers [2, 4, 6, 8, 10], use the reduce method to calculate the total sum of the values in the array.
const numbers = [2, 4, 6, 8, 10];
const totalSum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(totalSum); 


// Given an array of numbers [1, 3, 5, 7], use the reduce method to calculate the total product of the values in the array.
const number = [1, 3, 5, 7];
const totalProduct = number.reduce((accumulator, currentValue) => accumulator * currentValue,1);
console.log(totalProduct);


// Given an array of lowercase words ['apple', 'banana', 'cherry'], use the map method to create a new array where each word is converted to uppercase.
const words = ["bhavani", "satya", "divya"];
const uppercasedWords = words.map((word) => word.toUpperCase());
console.log(uppercasedWords); 


// Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 10.
const numbers2 = [1, 2, 3, 4, 5];
const multipliedNumbers = numbers2.map((number) => number * 10);
console.log(multipliedNumbers);


// Given an array of objects representing people:
// const people = [
//   { name: 'John', age: 25 },
//   { name: 'Sarah', age: 30 },
//   { name: 'Mike', age: 35 }
// ];

// Use the map method to create an array of just the ages.
const people = [
  { name: "John", age: 25 },
  { name: "Sarah", age: 30 },
  { name: "Mike", age: 35 },];
const ages = people.map((person) => person.age);
console.log(ages);


// Given an array of fruits ['apple', 'banana', 'cherry'], use the forEach method to log each fruit to the console.
const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit) => console.log(fruit));


// To count how many numbers in the array [1, 2, 3, 4, 5, 6] are even using the forEach method in JavaScript, you can use the following code:
const numbers3 = [1, 2, 3, 4, 5, 6];
let evenCount = 0;
numbers.forEach(number => {
  if (number % 2 === 0) {
    evenCount++;}});
console.log(evenCount);
