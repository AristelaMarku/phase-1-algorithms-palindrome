function isPalindrome(stringToCheck){
  const stringArray = stringToCheck.toLowerCase().split("");
  const reverseStringArray = stringArray.reverse().join("");
  const result = reverseStringArray === stringToCheck.toLowerCase();
}


function isPalindrome(word){
  let start=0
  let finish=word.length-1

  while(start<finish){
    if(word[start]!==word[finish]){
      return false
    }
    start++
    start--
  }
  return true
}




/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
