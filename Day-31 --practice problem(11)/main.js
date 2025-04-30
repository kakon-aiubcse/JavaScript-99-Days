//problem 11
//Write a function that flattens a nested array (e.g., [1, [2, [3]], 4] to [1, 2, 3, 4])

let arr = [1, [2, [3]], 4];
function flatenarray(arr) {
  let result=[];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object" && arr[i] !== null && arr[i].length !== undefined)
     {
      let flatagain = flatenarray(arr[i]);
      for(let j= 0 ; j<flatagain.length ; j++){
        result[result.length] = flatagain[j]
      }
    } else{
      result[result.length] = arr[i]
    }
  }
 
  console.log(result)
  return result;
}

flatenarray(arr);
