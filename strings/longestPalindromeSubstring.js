// Given a string s, return the longest palindromic substring in s.

 //longest palindrome substring

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
 
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function longestPalindromebruteforce(s) {
  let maxLength = 0;
  let result = "";

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      let substr = s.substring(i, j);
      if (isPalindrome(substr) && substr.length > maxLength) {
        result = substr;
        maxLength = substr.length;
      }
    }
  }

  return result;
}