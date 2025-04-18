//Solving problem 2
//Count the number of vowels in a string

//first approach
{
  let str = prompt("Enter data to check vowels");

  function vwlcounter(str) {
    let count = 0;
    const lwrstr = str.toLowerCase();
    console.log("Entered String: ", lwrstr);
    for (let i = 0; i < lwrstr.length; i++) {
      if (
        lwrstr[i] === "a" ||
        lwrstr[i] === "e" ||
        lwrstr[i] === "i" ||
        lwrstr[i] === "o" ||
        lwrstr[i] === "u"
      ) {
        console.log(lwrstr[i]);
        count++;
      }
    }

    return count;
  }
  console.log(vwlcounter(str));
}
//second approach using includes
{
    let str = "Kakon";
  
    function vowelFinder(str) {
      let count = 0;
      const vowels = ["a", "e", "i", "o", "u"];
      const lowstr = str.toLowerCase();
      for (let data of lowstr) {
        console.log(data);
        if (vowels.includes(data)) {
          count++;
        }
      }
      console.log( count);
    }
    vowelFinder(str);
  }
  