//Solving problem 3
//Return the factorial of a given number

//first approach
//suppose 5 is given you have to return 1*2*3*4*5

let digit = 3;

function factorial(digit) {
  let result = 1;
  for (let i = digit; i >= 1; i--) {
    console.log(i);
    result = result * i;
  }
  console.log(`Factorial Value of ${digit} is: `, result);
  return result;
}
console.log(factorial(digit));
