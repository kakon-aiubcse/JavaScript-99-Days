//Day 10
// Javascript 99days
//Dom manupulation part-2
//attributes access
let wc = document.querySelector("#welcome");
console.log(wc);
//getAttribute returns the value of the specified attribute
console.log(wc.getAttribute("id"));
//setAttribute will take an attribute's name and then set a new value
console.log(wc.setAttribute("name", "WelcomeMsg"));
console.log(wc.getAttribute("name"));
//node.style
wc.style.backgroundColor = "purple";
wc.style.color = "white";

let body = document.querySelector("body");
body.style.display = "flex";
body.style.justifyContent = "end";

//creating attribute

let newHead = document.createElement("id");
newHead.innerText = "Day-10";
console.log(newHead.innerText);
newHead.style.marginLeft = "2px";
//adding newattribute
let section = document.querySelector("section");
section.style.display = "flex";
//append provides the new attribute end of node like after section node inside the section block
section.append(newHead);
//prepend provides the new attribute start of node like after section node inside the section block
section.prepend(newHead);

//before provides the new attribute  before the section block
section.before(newHead);
//after provides the new attribute after the section block
section.after(newHead);

// /newHead.remove();

// create a new button element. Give it a text "click me", Background color of red & text color of white
// insert the button as the first element inside the body tag

let newBtn = document.createElement("button");
newBtn.innerText = "click me";
newBtn.innerHTML = `<i>${newBtn.innerText}</i>`;
newBtn.style.backgroundColor = "Red";
newBtn.style.color = "White";
body.prepend(newBtn);
// create a <p> tag in html give it a class and some styling.
// Now create a new class in css and try to append this class to the <p> element
// Did you notice, how you overwrite the class name when you add a new one?
// Solve this problem using classlist
