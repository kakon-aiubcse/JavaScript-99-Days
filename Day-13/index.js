// //Day 13
// // Javascript 99days
// //callbacks, promises and async awaits
// //trycatch block
// //suppose you want to complete one execution and then another but in the middle you get an error then the remaining code will stop working so if you want to catch that issue then we can use try catch block
// //  console.log("first printing");try{

// //   console.lg("second printing");

// // }catch(error){
// // console.log(error);

// // }console.log("third printing");
// //output
// // first printing
// // index.js:11 TypeError: console.lg is not a function
// //     at index.js:8:11
// // index.js:13 third printing

// //synchronous programs and asynchronous programs
// {
//   //synchronous is like doing one execution then another then another one by one is call synchronous
//   // console.log("one");
//   // console.log("two");
//   // console.log("three");
//   //asynchronous program is like if one work is taking time then the next one won't work for the previous work to be completed
//   //it will go to complete work three without waiting for previous work to do
// }
// //settimeout function
// // function hello (){
// //   console.log("hello kakon");
// // }
// // setTimeout(hello,3000);

// // function sum (a, b){
// //   console.log(a+b);
// // }
// //here in calculator function I am giving back a function and inside is the parameter or that function
// // function calculator(a,b,Callback){
// //   Callback(a,b);
// // }
// // //here used set timeout method to use timer and it takes a function and seconds and inside a function I have sent two value of a and b and a function where add these a and b and sent it to calculator's function with a and b value then callback
// // //workflow first giving two value of a and b then it goes to calculator and this calculator function sends this value to Callback parameter and it then comes inside settimer's internal function of adding those value
// // setTimeout(()=>{
// //   calculator(2,4,(a,b)=>{
// //     console.log(a+b);
// //   })

// // },1000)

// //this is nested hell of callback's which is really hell to define
// // function getData(id, nextid) {
// //   setTimeout(() => {
// //     console.log("Data of", id);
// //     setTimeout(() => {
// //       if (nextid) {
// //         nextid();}else{

// //         setTimeout(() => {
// //           if (nextid) {
// //             nextid();
// //             console.log("inside five second");
// //           }
// //         }),
// //           5000;
// //       }
// //     }, 3000);
// //   }, 1000);
// // }
// // getData(1, () => {
// //   getData(3, () => {
// //     getData(5);
// //   });
// // });

// //promises
// //promises has three states like pending,success,reject
// // let promisestate1 = new Promise((resolve, reject) => {
// //   console.log("pending state");
// // });
// // console.log(promisestate1);
// // let promisestate2 = new Promise((resolve, reject) => {
// //   console.log("success state");
// //   resolve("Success",200);
// // });
// // console.log("state changed to success: ", promisestate2);
// // let promisestate3 = new Promise((resolve, reject) => {
// //   console.log("failed state");
// //   reject("failed",404);
// // });
// // console.log("state changed to success: ", promisestate3);

// //using promises to get data
// //here Promise(resolve,reject) are the way of creating promise method it returns result

// // function getData(id) {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       if (id) {
// //         console.log("Fetching data of", id);
// //         resolve("success");
// //       } else {
// //         reject("No id provided");
// //       }
// //     }, 2000);
// //   });
// // }
// // let promisedata = getData();
// // promisedata.then((res) => {
// //   console.log(res);
// // });
// // promisedata.catch((err) => {
// //   console.log(err);
// // });

// //promisechain

// // function firstone(id) {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       console.log("fetch data:", id);
// //       resolve("success");
// //     }, 1000);
// //   });
// // }
// // function secondone(id) {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       console.log("fetch data:", id);
// //       resolve("success");
// //     }, 3000);
// //   });
// // }
// // let f1 = firstone(1);
// // f1.then((res) => {
// //   let f2 = secondone(2);
// //   f2.then((res) => {
// //     console.log("completed fetch");
// //   });
// // });

// //for previous example

// function getData(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (id) {
//         console.log("fetched data of", id);
//         resolve("success");
//       } else {
//         reject("No id provided");
//       }
//     }, 2000);
//   });
// }
// // getData(1).then((res)=>{
// //   getData(2).then((res)=>{
// //     getData(3).then((res)=>{
// //       console.log("completed");
// //     })
// //   })
// // })

// // getData(1)
// //   .then((res) => {
// //     return getData(2);
// //   })
// //   .then((res) => {
// //     return getData(3);
// //   })
// //   .then((res) => {
// //     return getData(4);
// //   });

// //async await example
// //auto returns promises
// //async direct printing
// (async  () =>{
//   console.log("loading data....")
//   await getData(1);
//   console.log("loading data....")
//   await getData(2);
//   console.log("loading data...")
//   await getData(3);

// })();
