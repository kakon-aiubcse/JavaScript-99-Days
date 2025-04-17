//today's topic is to learn DOM (document object model) part-1

//to watch window in console and we can use window keyword its by default
//window.console.log(window);
// window.document display's html file in console
//console.log(window.document);

//getting ID
//this returns the date as like html formation

// let date = document.getElementById("date");
// console.log(date);

//getting class
//this return as HTML collections array and all the classes with same classname

// let headings = document.getElementsByClassName("headings");
// console.log(headings);

//getting tags
//also works the same like previous

// let buttag = document.getElementsByTagName("button");
// console.log(buttag);

//get with querySelector()
// this works like auto finding and using as like others
// dot(.) uses for classes and (#) uses for id and need to mention for query selector
// let qs = document.querySelector("h1");
// console.log(qs);
// let qsid = document.querySelector("#date");
// console.log(qsid);
//for classes if only selector then will print only one from that class
// this is where selectorAll comes to access all the classes
// let qscls = document.querySelector(".headings");
// console.log(qscls);
// let qsclsall = document.querySelectorAll(".headings");
// console.log(qsclsall);
// //for loop inside that class array
// let number = 1;
// for (let qsaccessing of qsclsall) {
//   console.log(qsaccessing, number);
//   number++;
// }

// using tag name property returns the tag name of tags

// let findingtagname = document.querySelector("#date");
// console.log(findingtagname.tagName);

// let ft = document.querySelector(".headings");
// console.log(ft.tagName);

//queryselector return list and that's why tag name can be accessible by it's array
// let ft = document.querySelectorAll(".headings");
// console.log(ft[1].tagName);
//

// //using innerText properties

// let fheadings = document.querySelectorAll(".headings");
// console.log(fheadings[0].innerText);
// //innerText properties has changed that
// fheadings[0].innerText = fheadings[0].innerText + "completed?";
// console.log(fheadings[0].innerText);

//using innerHTML

// let htmlheadings = document.querySelectorAll(".headings");
// console.log(htmlheadings[1].innerHTML);
// htmlheadings[1].innerHTML = `<i>${htmlheadings[1].innerHTML}</i>`;
// console.log(htmlheadings[1].innerHTML);

//using TextContent
//works for hidden contents
// let hdlvl = document.querySelector("label");
// console.log(hdlvl.tagName);
// console.log(hdlvl.innerHTML);
// console.log(hdlvl.innerText);
// console.log(hdlvl.textContent);

//practices
// create 3 divs with common class name - "box". access them and add some unique value of them

//solution 1

// let boxes = document.querySelectorAll(".box");
// console.log(boxes);
// let number = 1;
// for (let box of boxes) {
//   console.log(box.innerText);
//   box.innerText = `this is new Name of box number ${number}`;

//   console.log(box.innerText);
//   number++;
// }
// console.log(boxes[0].innerText);
// console.log(boxes[1].innerText);
// console.log(boxes[2].innerText);
