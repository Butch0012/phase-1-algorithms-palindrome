function isPalindrome(word) {
  var check= Math.floor(word.length/2)
  for (i=0;i<check;i++){
    if (word[i] !==word[word.length-1])
    return false;
  else return true;
  }
};
console.log(isPalindrome("mom"));

  // Write your algorithm here
 /* input word the word 
 if the word is palindrome return true 
 if the word is not a palindrome return false



/* 
  Add your pseudocode here
  function isPalindrone 
  reverseStr =reverse(str)
   if str is equal to reversedStr
        return True
    else
        return False
    end if
end function
  
*/

/*
  Add written explanation of your solution here
  palindrone letters are the same from beginning to end except for one in between letter
  so the first letter should be equaal to the last letter
*/
/*boow");isPalindrome("
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;*/

