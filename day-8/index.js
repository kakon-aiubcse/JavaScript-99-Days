//Day 7 Functions and methods Part(2)
// foreach loops in arrays

//for one array we can modify each value on another function using foreach like

let phones = ["Vivo", "Iphone", "Samsung"];
phones.forEach(function newphones(phonenames) {
  console.log(phonenames);
});
//using arrow and first one for storing in new parameter then second one is index and last one is the same arrow printing
let marks = [33, 56, 34];
marks.forEach((newmarks, index, marks) => {
  console.log(newmarks, index, marks);
});
//problem solving

//for a given array finding the square value

let number = [3, 5, 6, 2];
number.forEach((sqr) => {
  console.log(sqr ** 2);
});
//another way to using foreach

let food = ["burger", "pizza", "sandwich"];

function displayfoodname(food) {
  console.log(food.toUpperCase());
}

food.forEach(displayfoodname);

//map method
//this map creates a new copy array and perform operations

let cars = ["Range Rover", "BMW", "Marcedes"];
cars.map((val) => {
  console.log(val);
});
// result parameter is holding new copy of marks array with specified operation
marks.map((result, index, marks) => {
  if (result * 2 == 0) {
    console.log(result, index, marks);
  }
});
let multiplication = marks.map((result) => {
  return result * result;
});
console.log(multiplication);

//filter method
// this method works for finding the result based on condition

marks.filter((result, index, marks) => {
  if (result % 2 == 0) {
    console.log("using filter method: ", result, index, marks);
  }
});
// map() adds/changes properties without removing anything.
// filter() removes items that don’t meet the condition.

//reduce method
// it will have prev value and next value and it will do operation and return a single value
let addition = number.reduce((result, firstone) => {
  return result < firstone ? result : firstone;
});
console.log("result:", addition);

//problem solving
// we are given array of marks of students.filter out the marks of students that score 90+
//take a number n as input from user. create an array of numbers from 1 to n
//use the reduce method to calculate sum of all numbers in the array and calculate product of all numbers

//first one

let score = [85, 92, 98, 93, 45, 78, 87, 92];

let A = score.filter((res) => {
  return res >= 90 ? res : 0;
});
console.log("Answer of students avobe 90+", A);

{
  let input = prompt("Enter Numbers to add");
  let n = input.split(",").map(Number);
  let sumofall = n.reduce((res, first) => {
    return res + first;
  });
  console.log("Result", sumofall);
}
{
  let input1 = Number(prompt("Enter first Numbers to multiply"));
  let input2 = Number(prompt("Enter second Number to multiply"));
  let n = [input1, input2];
  let multiofall = n.reduce((res, first) => {
    return res * first;
  });
  console.log("Result", multiofall);
}

{
  let input = prompt("Enter Numbers to find production");
  let n = input.split(",").map(Number);
  let multiofall = n.reduce((res, first) => {
    return res * first;
  });
  console.log("Result", multiofall);
}

let num = prompt("Enter numbers separated by commas");
let n = num.split(",").map(Number);

let array = [];
for (let i = 0; i < n.length; i++) {
  array[i] = n[i];
}

console.log(array);
