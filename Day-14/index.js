//Fetch API

//fetch api method works to bring data from an api and it takes url and options and by default it is in GET method
let data = document.querySelector("#data");
let h1 = document.querySelector("#h1");
let h2 = document.querySelector("#h2");
let btn = document.querySelector("#button");
let body = document.querySelector("body");

body.style.padding = "20px";
btn.addEventListener("click", getdata);
async function getdata() {
  let response = await fetch(`https://catfact.ninja/fact`);
  //json or javascript object notation uses the api data to convert into readable text
  console.log(response);
  let apidata = await response.json();
  data.innerHTML = `<b>${apidata.fact}</b>`;
  data.style.margin = "10px";
  h1.innerText = `Length : ${apidata.length}`;
  h2.innerText = `Status code : ${response.status}`;
}
let t1 = document.getElementById("t1");
let t2 = document.getElementById("t2");
let t3 = document.getElementById("t3");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let responseData = document.getElementById("responseData");

btn1.addEventListener("click", sendData);

// Function to send data (POST request)
async function sendData() {
  let title = t1.value;
  let body = t2.value;
  let userId = t3.value;

  let data = {
    title: title,
    body: body,
    userId: userId,
  };

  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      // Parse the response JSON and display the result
      let responseResult = await response.json();
      console.log(responseResult);
      responseData.innerText = `Post created with ID: ${responseResult.id}, Title: ${responseResult.title}`;
    } else {
      responseData.innerText = `Error: ${response.status}`;
    }
  } catch (e) {
    responseData.innerText = `Error: ${e}`;
  }
}

btn2.addEventListener("click", getapidata);

// Function to get data (GET request)
async function getapidata() {
  let postId = t3.value; // Assuming user wants to fetch post by ID
  let newurl = `https://jsonplaceholder.typicode.com/posts/${postId}`;

  try {
    let response = await fetch(newurl);
    if (response.ok) {
      let data = await response.json();
      console.log(data);
      responseData.innerText = `Fetched Post:\n\nTitle: ${data.title}\nBody: ${data.body}`;
    } else {
      responseData.innerText = `Error: ${response.status}`;
    }
  } catch (e) {
    responseData.innerText = `Error: ${e}`;
  }
}
