console.log("Day-4");
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

//Guess and win task
{
  let opinion = prompt(" will you play? ");
  if (opinion == "y" || opinion == "yes") {
    let gameNum = 35;
    let x = Number(prompt("Guess and win : "));

    while (gameNum !== x) {
      x = Number(prompt("Wrong! Try again :"));
    }

    console.log("Congratulations. You have won.");
  } else {
    console.log("do second part");
  }
}
//username generator
{
  let name = prompt("Enter your name to generate username:");
  let x = name.length;
  let username = ` @${name}${x}`;
  const output = `Entered value: ${name} \n Generated Username : ${username}`;

  console.log(output);
}
