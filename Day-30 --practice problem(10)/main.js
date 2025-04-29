//Return the second largest number from an array

// let numbers = [23, 224, 2, 22, 44,56 , 100];

// function secondhighestnum(numbers) {
//   let sorted = numbers.sort((a, b) => b - a);
//   console.log(`Given Array: ${numbers} \narray shorted from highest to lowest ${sorted} \nso the second largest number is : ${sorted[1]}`)

// }

// secondhighestnum(numbers);

//second approach

//loop on each
//take the greater one top
//swap the greater one to another greater one
//make a list of sorted higher to lower
let array = [23, 224, 2, 22, 44, 56, 100];
function sortingHtoL(array) {
  let result= [...array]
  let temp;

  for (let i = 0; i < result.length; i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (result[j] > result[i]) {
        temp = result[i]; //temp =23 
        result[i] = result[j]; //23 turns into 224 || 23 turns into 44 || 
        result[j] = temp; // temp now 224 || temp now adds 44
      }
    }
    
  }console.log(result);
  console.log(result[1]);
}
sortingHtoL(array);
