//practice problem 07
//Write a program to capitalize the first letter of each word in a sentence

let arr = ["this is a sentence"];

function capletter(arr) {
  let words = arr[0].split(" ");
  for (let i = 0; i < words.length; i++) {
    let capword = words[i];
    words[i] = capword[0].toUpperCase() + capword.slice(1);
  }
  return words.join(" ");
}

console.log(capletter(arr));