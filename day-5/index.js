console.log("Day-5");

//checking even and odd numbers
{
  var isStart = false;
  var willContinue = false;
  let opinion = prompt("Start checking even or add? type y to start:");

  if (opinion === "y") {
    isStart = true;

    while (isStart === true) {
      willContinue = true;

      while (willContinue === true && isStart == true) {
        let result;
        let x = Number(prompt("Enter a digit to check even or odd:"));

        while (isNaN(x) || x == 0) {
          x = Number(
            prompt("Wrong input. \n Enter a digit to check even or odd(1-~):")
          );
        }
        result = x % 2;
        if (result === 0) {
          let opinion2 = prompt(
            "It's an Even Number. \n search with Another digit? type y to continue:"
          );
          if (opinion2 === "y") {
            willContinue = true;
          } else if (opinion2 !== "y") {
            let isConfirmed = prompt(
              "Are you sure to exit? ... type yes to confirm:"
            );
            if (isConfirmed === "yes") {
              willContinue == false;
              isStart = false;
            }
          } else {
            willContinue = true;
          }
        } else if (result !== 0) {
          let opinion2 = prompt(
            "It's an Odd Number. \n search with Another digit? type y to continue:"
          );
          if (opinion2 === "y") {
            willContinue = true;
          } else {
            willContinue = false;
          }
        }
      }
      console.log("Program closed.");

      isStart = false;
    }
  } else {
    console.log("Start the program typing only y");
  }
}

{
  let num = prompt("Check Even/Odd number: ");
  while (isNaN(num) || num == 0) {
    num = Number(
      prompt("Wrong input. \n Enter a digit to check even or odd(1-~):")
    );
  }

  while (true) {
    let result = num % 2;
    while (result === 0) {
      num = prompt("It's an Even Number: try another!!!");
      result = num % 2;
    }
    while (result === 1) {
      num = prompt("It's an odd Number: try another!!!");
      result = num % 2;
    }
    while (isNaN(num) || num == 0) {
      num = Number(
        prompt("Wrong input. \n Enter a digit to check even or odd(1-~):")
      );
    }
  }
}
