//javascript crash course by programming with mosh

//variables

let nameE = "Mosh";
console.log(nameE);
//variable names rules
// cannot be a reserved keyword
//should be meaningful
//cannot start with a number(exp: 1name)
//cannot contain a space or hyphen (-)
//are case-sensitive

//constant

// let interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate)
//here interestRate changes it's value so we should use

const interestRate = 0.3;

// types of variable

//two types of types
//primitive and reference
let name = "name"; // string literal
let age = 30; // number literal
let isApproved = false; //  Boolean literal(true or false)
let username = undefined; //undefined
let lastName = null; //no selection but refers in future

//Dynamic typing

//two type of language static and dynamic
//typeof keyword uses to know the type of a variable
//like typeof name will display string

//reference variable
//object array and function

//object

//let person = {};// object literal

let person = {
  // in key:'value' pair
  name: "mosh",
  age: 30,
};

//dot. notation to read object's property
person.name;
//bracket [] notation

person["name"]; //select object's name property

arrays;

let selectedColors = ["red", "blue"]; //array literal
selectedColors[2] = "green"; //adds green in the array can be number or string
typeof selectedColors; //object in console

selectedColors.length; // number of items in the array

Function;

//function greet(){}  function literal

function greet() {
  // works
  console.log("helloworld");
}

//calling function

greet();

//passing parameters
function greet(name) {
  // works
  console.log("hello", name);
}

//calling function

greet("john "); // here john is argument and name is paramete

function square(number) {
  return number * number;
}
console.log(square(2)); //displays 4
//console.log() is a function

//OOP
//4 pillers of oop encapsulation , abstraction, inheritance, polymorphism

//encapsulation

let calculator = {
  a: 5,
  b: 5,
  c: 6,
  sum: function () {
    return this.a + this.b;
  },
};

calculator.sum(); //here sum function is inside of calculator object

//abstract
//simpler interface
//reduce the impact of change

//inheritance
//inheritance helps us to redundant code

//polyforms
//many form

//benefits of oop

// encapsulation = reduce complexity + increase reusability
// abstraction = reduce complexity + isolate impact of changes
// inheritance = eliminate redundant code
// polymorphism = refactor ugly switch / case statements

{
  const circle = {
    redius: 1,
    location: { x: 1, y: 1 },
    draw: function () {
      console.log("draw");
    },
  };
  circle.draw();

  //factory function
  function createCircle(radius) {
    return {
      radius,
      draw: function () {
        console.log("draw");
      },
    };
  }
}

const circle = createCircle(1);

//constructor function
class Circle {
  constructor(radius) {
    this.radius = radius;
    this.draw = function () {
      console.log("draw");
    };
  }
}

const another = new Circle(1);

//constructor

{
  //let x = {}; // let x = new Object();

  //primitive are copied by their value

  // let x = 29;
  // let y = x ; // here y will take x's value
  // x = 30;

  // objects are copied by their reference

  let x = { value: 30 };
  let y = x; //{y will take x's address}
  x.value = 40;
}

//adding/removing object

{
  class circle {
    constructor(radius) {
      this.radius = radius;
      this.draw = function () {
        console.log("draw");
      };
    }
  }
  const circle = new Circle(10);
}
circle.location = { x: 1 }; //to add object
circle["location"] = { x: 1 };
delete circle.location; //remove object

for (let key in circle) {
  console.log(circle[key]);
} //

const keys = Object.keys(circle); // to get all keys of an object

//to check an property in object use in property

if ("radius" in circle) {
  console.log("circle has radius");
}

abstraction;

//hide the details and only show essentials
class Circle {
  constructor(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };
    let computeOptimumLocation = function () {};

    this.draw = function () {
      computeOptimumLocation();
      console.log("draw");
    };
  }
}
const circle = new Circle(10);

//getter/setter

class Circle {
  constructor(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };
    this.getDefaultLocation = function () {
      return defaultLocation;
    };

    this.draw = function () {
      console.log("draw");
    };

    Object.defineProperty(this, "defaultLocation", {
      get: function () {
        return defaultLocation;
      },
      set: function (value) {
        if (
          !value ||
          typeof value.x !== "number" ||
          typeof value.y !== "number"
        ) {
          throw new Error("Invalid location");
        }
        defaultLocation = value;
      },
    });
  }
}

const circle = new Circle(10);
console.log(circle.defaultLocation); // { x: 0, y: 0 }
circle.draw(); // "draw"

// Updating defaultLocation
circle.defaultLocation = { x: 5, y: 5 };
console.log(circle.defaultLocation); // { x: 5, y: 5 }



