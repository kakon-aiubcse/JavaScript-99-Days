//Write a function to return all prime numbers less than a given number n

//solving problem 4
let n = 100;

function allprimenumbers(n) {
  let arr = [];

  for (let i = 2; i <= n; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        
      }
    }

    if (isPrime) {
      arr.push(i);
    }
  }

  console.log(arr);
}

allprimenumbers(n);

