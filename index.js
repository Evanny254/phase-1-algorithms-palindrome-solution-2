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

Here's a breakdown of the code:

for (let i = 0; i < word.length / 2; i++) { ... }: This is a loop that starts from the beginning of the word (i = 0) and goes up to half the length of the word (word.length / 2). It iterates through the characters in the first half of the word.
const j = word.length - 1 - i;: Within the loop, for each i, it calculates j which corresponds to the character from the end of the word that aligns with the current i.
if (word[i] !== word[j]) return false;: At each step, it compares the character at position i with the character at position j (the corresponding position from the end). If they're not equal, it means the word is not a palindrome, and it immediately returns false.
return true;: If the loop completes without finding any non-matching characters, it means the word is a palindrome, and it returns true.
*/

if (require.main === module) {
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
