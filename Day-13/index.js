//Day 13
// Javascript 99days
//callbacks, promises and async awaits
//trycatch block 
//suppose you want to complete one execution and then another but in the middle you get an error then the remaining code will stop working so if you want to catch that issue then we can use try catch block 
//  console.log("first printing");try{
 
//   console.lg("second printing");
  
// }catch(error){
// console.log(error);

// }console.log("third printing");
//output
// first printing
// index.js:11 TypeError: console.lg is not a function
//     at index.js:8:11
// index.js:13 third printing

//synchronous programs
{
  //synchronous is like doing one execution then another then another one by one is call synchronous
  console.log("one");
  console.log("two");
  console.log("three");
}