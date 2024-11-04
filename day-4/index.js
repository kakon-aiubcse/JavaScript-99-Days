//finding prime numbers
{
  let isPrime = true;
  let number = parseInt(prompt("Enter a number:"));

  while (isNaN(number) || number <= 2) {
    number = parseInt(
      prompt("prime numbers will be greater than 2. Try another:")
    );
  }
  let sqrRoot = Math.sqrt(number);
  for (let i = 2; i <= sqrRoot; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(number);
    console.log("This is a prime number.");
  } else {
    console.log("It's not a prime number.");
  }
}
