console.log("Day-4");

console.log("loops and strings");

//printing all the number user enters
{
  let number = parseInt(prompt("Enter a Number:"));
  for (let i = 1; i <= number; i++) {
    console.log("Number: ", number, "i = ", i);
  }
}
//calculating sum of numbers with for looops

{
  let number = parseInt(prompt("Enter a Number to calculate sum:"));
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum = sum + i;
  }
  console.log(sum);
}
//calculating sum of numbers with while loops
{
  let number = parseInt(prompt("Enter a Number to calculate sum:"));
  let sum = 0;
  let i = 1;
  while (i <= number) {
    sum = sum + i;
    i++;
  }
  console.log(sum);
}
//calculating sum of numbers with do while loops
{
  let number = parseInt(prompt("Enter a Number to calculate sum:"));
  let sum = 0;
  let i = 1;
  do {
    let output = `Entered Number: ${number} \n
    how? \n first number ${sum} + second number ${i}`;
    sum = sum + i;

    console.log(output, "Total: ", sum);
    i++;
  } while (i <= number);
  console.log(sum);
}
// for in loops used in finding (key = value)'s key value from objects

{
  let Bachelor = {
    name: "John",
    occupation: "student",
    blood_group: "B pos",
  };
  //  console.log(Bachelor["name"], Bachelor.blood_group);
  for (let key in Bachelor) {
    console.log(key, "=", Bachelor[key]);
  }
}
//for of loops for strings and trackable variables
{
  let Bachelor = "living like mess";
  let size = 1;
  for (let value of Bachelor) {
    console.log(value, size);
    size++;
  }
}

// Strings

{
  let name = "Khairul islam Kakon";
  console.log(name.length);
  let size = 1;
  for (let i of name) {
    console.log(i, size);
    size++;
  }

  console.log(name.toUpperCase()); //to uppercase all
  console.log(name.toLowerCase()); //to lowercase all
  console.log(name.trim()); //for trimming spaces besides a word
  console.log(name.slice(14, 19)); //only showing specific value under indeces's range
  console.log(name[10]); //checking str's indexes

  let phone = "6s";
  let number = 4;
  let brand = "Iphone";

  console.log(brand.concat(number)); //adds two strings
  console.log(name.charAt(8)); //to find specific letter using charAt
  console.log(phone.replace("s", "S")); //searches for first s and changes it to S
  console.log(phone.replaceAll("s", "S")); //replaces all s to S
  console.log(phone);
}
