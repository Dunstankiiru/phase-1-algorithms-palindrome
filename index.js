function isPalindrome(string) {
  // Write your algorithm here
  const reversedString = string.split("").reverse().join("");


  return string === reversedString;
}

/* 
  Add your pseudocode here

  1. Define function is palindrome that receives a string as argument

  2. Reverse the string by converting string to array and reversing the array and changing it to string\

  3. compare reversed string and original

  4. If same return true and if not return false


*/

//optimization
function isPalindrome(string) {
  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    if (string[left] !== string[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
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
