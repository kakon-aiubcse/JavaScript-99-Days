console.log("Day-6 : Concept= Arrays in javascripts");
//array is collection of items and it is kinda object in javascript
//how to create array?
let cars = ["BMW", "Range Rover", "Toyoto", "Nissan"];
let score = [12.5, 25, 50, 100];

//array displaying
console.log(cars);
console.log(score);
console.log(cars[0]);

//array value changing
cars[1] = "Range_Rover";
console.log(cars);

//looping in array

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
  //here cars[i] for first one i = 0 so that cars[0] which means BMW and that's how it works
}
for (let car of cars) {
  console.log(car);
  //here car holds the value of cars one by one without index
}
let i = 0;
let rank = 1;
for (let car of cars) {
  console.log(`here at rank ${rank} at index ${i} name of car = ${car}`);
  i++;
  rank++;
  // here is another process of tracking indexes at for of loop
}

//first question
//For a given array marks of students -> [85, 97,44, 37, 76, 60]
//find the average marks of the entire class

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
let avg = 0;
for (let i = 0; i < marks.length; i++) {
  sum = sum + marks[i];

  console.log(sum);
}
// for (let mark of marks) {
//   sum = sum + mark;
//   console.log(sum);
// }
avg = sum / marks.length;
console.log("average = ", avg);
console.log("_____________");

//another problem solving
//For a given array with prices of 5 items -> [250,645,300,900.50]
//all items have an 10% off on them.
// change the array to store final price after applying offer.

let items = [250, 645, 300, 900, 50];
let newitems = items.slice();
for (let i = 0; i < items.length; i++) {
  let offer = items[i] / 10;
  console.log(
    `after 10% off then item price ${items[i]} got offer of ${offer}`
  );

  newitems[i] = items[i] - offer;
}
console.log("So the new array will be:", newitems);

{
  //array methods:

  //push() this is to add an item in the last of collections of an array
  let cars = ["BMW", "Range Rover", "Toyoto", "Nissan"];
  console.log(cars);
  cars.push("suzuki");

  console.log("new array of cars: ", cars);

  //pop() this method will remove from last
  let removeditems = cars.pop();
  console.log("new array : ", cars, "lastly removed:", removeditems);
  let output = cars.toString();
  console.log(
    "this toString() method converts array into string value : ",
    output
  );
  //concat this method adds two arrays without changing initial array's value
  let price = [35, 24, 35, 33];
  let concatingtwoarrays = cars.concat(price);
  console.log(concatingtwoarrays);

  //unshift (this method is like push but it is adding in first )
  cars.unshift("suzuki", "tesla");
  console.log("New array after unshifting : ", cars);
  //shift( this method works like pop just from the start of the array)
  let newlydeletedusingshift = cars.shift("suzuki");
  console.log(
    "new array after using shift :",
    cars,
    "deleted item",
    newlydeletedusingshift
  );

  //slice(this method works like cutting a particular part and creates a new array)
  //it works like it will have a start index from where it will start cutting and the ending index to cut before stop cutting
  //sometimes without ending index it will cut the full and if no starting index the it will copy the whole array

  let newcars = cars.slice(1);
  console.log("Cars as it is :", cars, "after slice : ", newcars);

  //splice(start index, delete index, new index)
  // start index will pick the index to change
  //delete index will delete the value of that index (number of indexes to delete like 2 will delete two indexes from start to another) and
  //new index will insert new value

  //here toyota will be deleted and tesla will replace
  //let cars = ["BMW", "Range Rover", "Toyoto", "Nissan"]; new will be : let cars = ["BMW", "Range Rover", "tesla", "Nissan"];
  console.log("array before splice:", cars);
  cars.splice(3, 0, "Tesla");
  console.log("new array after splice: ", cars);
  // here on 3rd index it just added tesla
  console.log("array before splice:", cars);
  cars.splice(3, 1, "Tesla2");
  console.log("new array after splice: ", cars);
  //here on 3rd index it deleted tesla and added Tesla2 that's how splice works
}

{
  //last question
  //create an array to store companies -> "Bloomberg","Microsoft", "Uber", "Google", "IBN", "Netflix".
  //a. Remove the first company from the array
  //b. Remove Uber and Add ola in its place
  //c. Add amazon at the end
  let companies = [
    "Bloomberg",
    "Microsoft",
    "Uber",
    "Google",
    "IBN",
    "Netflix",
  ];
  console.log(companies);
  //answer of a
  companies.shift();
  console.log("after removing first company Bloomberg the array: ", companies);
  //answer of b
  companies.splice(1, 1, "Ola");
  console.log(
    "after removing uber and replacing with ola new array: ",
    companies
  );
  //answer of c
  companies.push("Amazon");
  console.log("after adding amazon at the end of the array : ", companies);
}
