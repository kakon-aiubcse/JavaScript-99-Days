//Day 21
//Practice problems 01
//Write a function to reverse a string


//approach -1 using loop
let str = "Kakon";
function reversing(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  console.log(reversed);
}
reversing(str);

//approach -2 using methods


let strng = "Khairul";
function reverestrng (strng){
    return strng.split('').reverse().join('');
}
console.log(reverestrng(strng));