// Day-18
//stack and heap

// stack memory uses primitive data

let myName = "Kakon";
let newName = myName;
console.log(myName, newName);
newName = "koko";

console.log(myName, newName);

//heap memory uses reference data

let userI = {
  email: "kakon@gmail.com",
  id: 1,
};
let userII = userI;

console.log(userII);
userII.email = "khairul@gmail.com";
console.log(userII);

//lexical scope and closure
//to learn closure must have to learn lexical scoping

//lexical scope
function outer() {
  let firstlayer = "1layer";
  function inner() {
    let secondlayer = "2nd layer"
    console.log("inner", secondlayer);
    console.log("outside variable accessing from inside function:", firstlayer);
  } console.log("Outer: ", firstlayer);
  console.log("inner accessing from outside:", secondlayer);
  return inner;

 
}
// outer();
let funoutlayer =  outer();
console.log(funoutlayer)
//inner();


//parent function's variable can be called inside its child's function

//closure

//in closure when calling function then it will
//return the whole function including  the
//lexical function
function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();
  //here name is accessible inside the display name function and creating myFunc like new function is returning that inside's displayname property.