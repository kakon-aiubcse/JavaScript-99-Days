//Day 19
//learning Modern javascript ES6+ Features by Mosh.
//prev function creation
const square = function (number) {
  return number * number;
};
let res = square(2);
console.log(res);
//ones6+
const square2 = (number) => number * number;
//if single parameter if no parameter then () and directly can be returned
console.log(square2(4));

//
const man = [
  { id: 1, person: 1, name: "Khairul ", age: 15 },
  { id: 2, person: 1, name: "Islam", age: 16 },
  { id: 3, person: 1, name: "kakon", age: 17 },
];

const prevdata = man.filter(function (res) {
  return res.id;
});
console.log(prevdata);
//in es6+
const newdata = man.filter((res) => res.id);
console.log(newdata);
