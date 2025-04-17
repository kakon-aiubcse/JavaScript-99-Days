//Day 7 Functions and methods Part(1)
// function initialisations
//basic
function helloworld() {
  console.log("this will print hello world when function will be called ");
}
helloworld();
//Function with parameters
function cgpa(cg) {
  console.log("This will print my assigned cg: ", cg);
}
cgpa(3.66);

//two parameters

function addition(x, y) {
  console.log(`Sum of ${x} and ${y} is : `, x + y);
}
addition(5, 7);

//function with return key
//return key will only return one value

function koko(mood) {
  return mood;
}
let output = koko("thinking");
console.log(output);

//here mood is parameter and koko() function is returning the string
//  it is getting and storing it in output cause function is returning only one value

function multi(x, y, z) {
  let res = x * y * z;
  return res;
}
let multiplicationresult = multi(3, 5, 6);
console.log(multiplicationresult);

//arrowfunctions
const multisum = (x, y, z) => {
  let res = x + y + z;
  return res;
};
let sumresult = multisum(5, 8, 9);
console.log(sumresult);

//direct
const kakon = () => {
  console.log("Khairul Islam Kakon");
};
kakon();

// problem solving
// create a function using the "function keyword"
// that takes a sring as an argument & returns the
// number of vowels in the string
// create an arrow function to do the same task
function checkVowel(string) {
  let count = 0;
  for (let val of string) {
    if (
      val === "a" ||
      val === "e" ||
      val === "i" ||
      val === "o" ||
      val === "u"
    ) {
      console.log(val);
      count++;
    }
  }
  return count;
}
let numberofVowels = checkVowel("Kakon");
console.log(numberofVowels);

const numberofVowel = (string) => {
  let count = 0;
  for (let val of string) {
    if (
      val === "a" ||
      val === "e" ||
      val === "i" ||
      val === "o" ||
      val === "u"
    ) {
      console.log(val);
      count++;
    }
  }
  return count;
};
let printvowelnumber = numberofVowel("Koko");
console.log(printvowelnumber);
