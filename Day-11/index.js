//Day 11
// Javascript 99days
//event handling in javascript
// event is something that is like you are going to change dynamically based on your requirements

let wc = document.querySelector("h1");
console.log(wc.innerText);

// here I have accessed h1 in the wc variable let's do changes

wc.onclick = () => {
  console.log("heading was click");
};
//here e is an event
wc.ondblclick = (e) => {
  console.log("heading was clicked double time");
  console.log(e.target);
};

//keyboardhandling events
let data = document.querySelector("#data");
//here when I am writing something on the inbox then it is printing that key pressed down  while removing keypressup
// data.onkeyup = () => {
//   console.log("key pressed up ");
// };
// data.onkeydown = () => {
//   console.log("key pressed down ");
// };
data.onkeydown = (e) => {
  data.placeholder = "";
  console.log(
    e.target,
    e.type,
    e.key,
    e.code,

    e.shiftKey
  );
  if (e.shiftKey) {
    alert("you can't provide space");
  }
};
// data.onkeyup = (e) => {
//   data.placeholder = "Write something";
//   console.log(data.placeholder);
// };

// event listener
//picking a node then writing addeventLister("event details", "using function")

let btn = document.querySelector("button");
const clk = () => {
  console.log("button has moverovered");
};

let alt = () => {
  console.log("button was first hovered and then clicked");
  alert("Started");
};
const rmv = () => {
  console.log(
    "will display in single click but in double click this won't display"
  );
};
btn.addEventListener("click", alt);

btn.addEventListener("mouseover", clk);
btn.addEventListener("dblclick", rmv);
btn.removeEventListener("dblclick", rmv);

let txtb = document.querySelector("#textb");

let btnb = document.querySelector("#btnb");
let txtw = document.querySelector("#textw");

let btnw = document.querySelector("#btnw");
let body = document.querySelector("body");

const mdb = () => {
  txtw.style.display = "none";
  btnw.style.display = "none";
  txtb.style.display = "block";
  btnb.style.display = "block";
  body.style.backgroundColor = "black";
  txtb.style.color = "White";
  console.log("dark mood activated");
  btnb.innerText = "Change to White Mood?";
};
const mdw = () => {
  txtw.style.display = "block";
  btnw.style.display = "block";
  txtb.style.display = "none";
  btnb.style.display = "none";
  body.style.backgroundColor = "white";
  txtb.style.color = "black";
  btnw.innerText = "Change to Dark Mood?";
};

btnb.addEventListener("click", mdw);

btnw.addEventListener("click", mdb);
