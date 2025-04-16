import { shop } from './shop';

//Day 20
//learning Modern javascript ES6+ Features by Mosh.
//prev function creation
//part-2

//spread operator for arrays




let data = [1, 2, 3];
let response = ["kakon", "khairul"];

let combine = [...data, "Islam", 2, ...response];
console.log(combine);

//for objects
let dataobj = {
  name: "kakon",
  occupation: "job seeker",
};
let responseobj = {
  gotJob: false,
};

let objcombine = { ...dataobj, stillsearching: "yes", ...responseobj };
console.log(objcombine);


let myshop = new shop("Samsung", "Samsung Gadget");
myshop.origin("Singapore");
myshop.shopOrigin("Bangladesh");