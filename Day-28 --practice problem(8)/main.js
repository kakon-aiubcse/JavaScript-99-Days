//practice problem 08
//Write a function to check if a string is a palindrome

let str = "level";

function checkingpalindrome(str) {
  let lwrstr = str.toLowerCase();

  function reversres() {
    let reverseresult = "";
    for (let i = lwrstr.length - 1; i >= 0; i--) {
      reverseresult += lwrstr[i];
     
    } 
    
    return reverseresult;
  }

 let reversed = reversres();
if(reversed === lwrstr){
    console.log(`input: ${lwrstr} and output: ${reversed} so its palindrome.`)
}else{
    console.log(`input: ${lwrstr} and output: ${reversed} so its not palindrome.`)
}
}
checkingpalindrome(str);
