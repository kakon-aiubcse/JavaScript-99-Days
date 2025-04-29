//Return the second largest number from an array

let numbers = [23, 224, 2, 22, 44,56 , 100];

function secondhighestnum(numbers) {
  let sorted = numbers.sort((a, b) => b - a);
  console.log(`Given Array: ${numbers} \narray shorted from highest to lowest ${sorted} \nso the second largest number is : ${sorted[1]}`) 
  
}

secondhighestnum(numbers);
