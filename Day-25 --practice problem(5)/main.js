//problem 5

// Find the maximum number in an array

let arr = [13, 22, 42, 2, 24, 4, 55, 52, 58];
let isMax = arr[0];
for (let i = 1; i < arr.length; i++) {
  console.log("first array :", arr[i]);
  console.log("second array:", isMax);

  arr[i] > isMax
    ? ((isMax = arr[i]), console.log("sub-max", isMax))
    : console.log("sub-max", isMax);
}

console.log("Max:", isMax);
