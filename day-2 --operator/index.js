let a = 10;
let b = 5;
console.log("a =", a, "b =", b);
{
  //arithmatic operator
  console.log("arithmetic operators");

  console.log("a+b =", a + b);
  console.log("a-b =", a - b);
  console.log("a*b =", a * b);
  console.log("a/b =", a / b);
  console.log("a%b =", a % b);
  console.log("a^b =", a ** b);
  console.log("b^a =", b ** a);
  console.log("------------------");
}
{
  //unary operator
  console.log("unary operators");
  console.log("a++ = ", a++);
  console.log("a after a++ = a+1 :", a);
  console.log("a after ++a = 1+a ", ++a);
  console.log("present value of a in block:", a);
  console.log("a-- = ", a--);
  console.log("a after a-- = a-1 :", a);
  console.log("a after --a = 1- a ", --a);
  console.log("present value of a in block:", a);
  console.log("------------------");
}
{
  //assignment operators
  console.log("assingment operators");
  console.log("a += 4 a=a+4 :", (a += 4));
  console.log("a -= 4 a=a-4 :", (a -= 4));
  console.log("a *= 4 a=a*4 :", (a *= 4));
  console.log("a /= 4 a=a/4 :", (a /= 4));
  console.log("a **= 4 a = a^4 :", (a **= 4));
  console.log("a %= 4 a=a%4 :", (a %= 4));
  console.log("------------------");
}
{
  //comparison operators
  console.log("comparison operators");
  console.log("comparison operators returns values in true or false");
  let s = "kakon";
  let x = 10;
  let ss = "10";
  console.log("kakon == 10? ", s == x);
  console.log(
    "10 == [10(ten)] string and number matches when == sign ",
    x == ss
  );
  console.log(
    "10 == [10(ten)] string and number doesn't match when === sign types and value doesn't meet ",
    x === ss
  );
  console.log(
    "10 == [10(ten)] string and number matches when == sign ",
    x == ss
  );
  console.log(
    "10 == [10(ten)] string and number matches so if I use not matches then it will return false ",
    x != ss
  );
  console.log(
    "10 == [10(ten)] string and number doesn't matches so if I use not matches then it will return true ",
    x !== ss
  );
  a = 10;
  console.log("a =", a, "b =", b);
  console.log("a is greater than b? ", a > b);
  console.log("a is less than b? ", a < b);
  b = 11;
  console.log("a =", a, "b =", b);
  console.log("a is greater than or equal to b? ", a >= b);
  console.log("a is less than or equal to b? ", a <= b);
  console.log("------------------");
}
{
  //logical operators
  console.log("logical operator:");

  console.log("&& And operator only comes true when both value is true");
  let subscribed = true;
  let user = true;
  console.log("Subscribed?", subscribed, "already user?", user);
  console.log(
    "1. if it is a user and he has subscribed channel then it will display true :",
    subscribed && user
  );
  subscribed = false;
  console.log("Subscribed?", subscribed, "already user?", user);
  console.log(
    "2. if it is a user and he hasn't subscribed channel then it will display false :",
    subscribed && user
  );
  user = false;
  console.log("Subscribed?", subscribed, "already user?", user);
  console.log(
    "3. if it is not a user and he has not subscribed channel then it will display false :",
    subscribed && user
  );
  console.log("~~~~~~~~~~");
  console.log("|| OR operator only shows true only when one value is true");
  console.log("Subscribed?", subscribed, "already user?", user);
  console.log(
    "4. if it is not a user and he hasn't subscribed channel then it will display false :",
    subscribed || user
  );
  subscribed = true;
  console.log("Subscribed?", subscribed, "already user?", user);
  console.log(
    "5. if it is not a user and he hasn't subscribed channel then it will display false :",
    subscribed || user
  );
  subscribed = true;
  console.log("Subscribed?", subscribed, "already user?", user);
  console.log(
    "5. if it is not a user but he has subscribed channel then it will display true :",
    subscribed || user
  );
  user = false;
  console.log("Subscribed?", subscribed, "already user?", user);
  console.log(
    "6. if it is not a user but he has subscribed channel then it will display true :",
    subscribed || user
  );
  console.log("~~~~~~~~~~");
  console.log("! this is not operator which changes true values to false");

  user = true;
  subscribed = true;
  console.log("Subscribed?", subscribed, "already user?", user);
  console.log(
    "7. changed the boolean value of these using not operator !user and !subscriped "
  );
  console.log("Subscribed?", !subscribed, "already user?", !user);
  console.log("------------------");
}
{
  //if else condition
  console.log("If and else if and else conditions");

  let opiNion = prompt("Start a calculator?:(press y to start...)");
  switch (opiNion) {
    case "y":
      console.log("Started short calculator to learn if and else ");
      let x = prompt("Enter first Digit:");
      let operator = prompt("Enter operator like (+,-,*,/,%,**)");
      let y = prompt("Enter second digit :");
      x = parseInt(x);
      y = parseInt(y);
      if (operator == "+") {
        console.log("Result of ", x, operator, y, "=", x + y);
      } else if (operator == "-") {
        console.log("Result of ", x, operator, y, "=", x - y);
      } else if (operator == "*") {
        console.log("Result of ", x, operator, y, "=", x * y);
      } else if (operator == "/") {
        console.log("Result of ", x, operator, y, "=", x / y);
      } else if (operator == "%") {
        console.log("Result of ", x, operator, y, "=", x % y);
      } else if (operator == "**") {
        console.log("Result of ", x, operator, y, "=", x ** y);
      } else {
        console.log(
          "Wrong Operator/value inserted",
          "first value :",
          x,
          operator,
          "Second value",
          y
        );
        break;
      }
      break;

    default:
      let anotherOpinion = Boolean(
        prompt("Confirm Day:2 done? press yes to confirm")
      );
      var yes = "Okay Tata";
      var n = "what's next?";
      anotherOpinion ? console.log(yes) : console.log(n);
  }
}
