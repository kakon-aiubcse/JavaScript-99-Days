// Day-18 
//stack and heap 

// stack memory uses primitive data


let myName = "Kakon";
let newName = myName;
console.log(myName, newName);
newName = "koko";

console.log(myName, newName);

//heap memory uses reference data

let userI= {
 email: "kakon@gmail.com", 
 id: 1
}
let userII = userI;

console.log(userII);
userII.email = "khairul@gmail.com";
console.log(userII);
