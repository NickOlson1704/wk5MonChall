function tshirtSorter(str) {
    let small = ""
    let medium = ""
    let large = ""
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "s") {
        small += "s"
      } else if (str[i] === "m") {
        medium += "m"
      } else {
        large += "l"
      }
    }
    return small + medium + large
  }
  console.log(tshirtSorter('lms'))
  console.log(tshirtSorter('smllms'))

  function tshirtSorter(str) {
   
    return str.split("").sort().reverse().join("")
  } 

  console.log(tshirtSorter('lms'))
  console.log(tshirtSorter('smllms')) 
  
  
  function sortTShirts(str) {
    let sCount = 0, mCount = 0, lCount = 0;
    // Count the number of each t-shirt size
    for (let i = 0; i < str.length; i++) {
      if (str[i] === 's') {
        sCount++;
      } else if (str[i] === 'm') {
        mCount++;
      } else {
        lCount++;
      }
    }
    // Construct the sorted string
    let sortedStr = '';
    for (let i = 0; i < sCount; i++) {
      sortedStr += 's';
    }
    for (let i = 0; i < mCount; i++) {
      sortedStr += 'm';
    }
    for (let i = 0; i < lCount; i++) {
      sortedStr += 'l';
    }
    return sortedStr;
  }

  let tShirts = 'slsmmsllsmsmlmsls';
  let sortedTShirts = sortTShirts(tShirts);
  console.log(sortedTShirts);  