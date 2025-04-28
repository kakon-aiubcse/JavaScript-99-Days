//practice problem 09
//Implement a fizzBuzz logic from 1 to 100
//If a number can be divided by 3, say Fizz. If by 5, say Buzz. If by both 3 and 5, say FizzBuzz. Otherwise, just say the number.


//using for loop and if else
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz", i);
    } else if (i % 3 === 0) {
      console.log("Fizz", i);
    } else if (i % 5 === 0) {
      console.log("Buzz", i);
    } else {
      console.log(i);
    }
  }
}
fizzBuzz();

//using switch case

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    switch (true) {
      case (i % 3 === 0 && i % 5 === 0):
        console.log("FizzBuzz", i);
        break;
      case (i % 3 === 0):
        console.log("Fizz", i);
        break;
      case (i % 5 === 0):
        console.log("Buzz", i);
        break;
      default:
        console.log(i);
    }
  }
}
fizzBuzz();
