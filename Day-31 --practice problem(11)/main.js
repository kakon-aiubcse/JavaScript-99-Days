//problem 11
//Write a function that flattens a nested array (e.g., [1, [2, [3]], 4] to [1, 2, 3, 4])
{
  let arr = [1, [2, [3]], 4];
  function flatenarray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (
        typeof arr[i] === "object" &&
        arr[i] !== null &&
        arr[i].length !== undefined
      ) {
        let flatagain = flatenarray(arr[i]);
        for (let j = 0; j < flatagain.length; j++) {
          result[result.length] = flatagain[j];
        }
      } else {
        result[result.length] = arr[i];
      }
    }

    return result;
  }

  console.log(flatenarray(arr));
}
//simplified with methods like reduce , isArray and concat
{
  let arr = [1, [2, [3]], 4];

  function flattenArray(arr) {
    return arr.reduce(
      (
        acc,
        val // acc is the accumulated result array, val is the current element from the array
      ) =>
        Array.isArray(val) // check if the current element is an array (i.e., nested)
          ? acc.concat(flattenArray(val)) // if it's an array, recursively flatten it and concatenate the result to acc
          : acc.concat(val), // if it's not an array, just add the value to acc
      [] // initial value for acc is an empty array
    );
  }

  console.log("simpliefied", flattenArray(arr));
}
