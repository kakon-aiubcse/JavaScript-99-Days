//practice problem 06
//Implement a function to remove duplicates from an array

let arr = ["hello", "new", "Hello", "hi", "hi"];
let numarr = [3, 5, 3, 2, 5, 34, 343, 343];
function rmvduplicates(arr) {
    let isMatch = [];
  for (let i = 0; i < arr.length; i++) {
    let newarrs = arr[i];
  
    let newlowerarrs = typeof newarrs === 'string' ? newarrs.toLowerCase() : newarrs;
    if (!isMatch.includes(newlowerarrs)) {
      isMatch.push(newlowerarrs);
    }
  }
  return isMatch;
}

console.log(rmvduplicates(arr));

console.log(rmvduplicates(numarr));
