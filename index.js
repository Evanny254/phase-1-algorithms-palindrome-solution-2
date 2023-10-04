function isPalindrome(word) {
  // Write your algorithm here:
  for (let i = 0; i < word.length / 2; i++) {
    const j = word.length - 1 - i;

    if (word[i] !== word[j]) return false;
  }
  return true;
}

/* 
  Pseudocode:
  1. Iterate from the start and end of the word simultaneously towards the middle.
  2. Compare the characters at the current positions.
  3. If any pair of characters doesn't match, return false (indicating not a palindrome).
  4. If all pairs of characters match, return true (indicating a palindrome).

  Explanation:
  - This implementation iterates through the word from both ends, checking for equality of characters.
  - If at any point the characters don't match, it's not a palindrome. Otherwise, it is a palindrome.
*/

if (require.main === module) {
  // add your own custom tests here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("=>", isPalindrome("abba"));
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;
