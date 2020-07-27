// Given 2 strings, write a function to determine if the 2nd string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of anotherm
// such as cinema, formed from iceman.

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    // automatically returns false if the string length dont match (can't be anagram if string length dont match)
    return false;
  }

  let freqCounter1 = {};
  let freqCounter2 = {};

  for (let val of str1) {
    // for loop for value of the string.
    // let the value be a KEY, with the value itself being a counter of the key.
    freqCounter1[val] = (freqCounter1[val] || 0) + 1;
  } // both of these for loops are O(n) so avoids the nested loop (brute force = O(n^2))

  for (let val of str2) {
    // doing the same thing for the 2nd string. setting the key and value.
    freqCounter2[val] = (freqCounter2[val] || 0) + 1;
  }

  for (let key in freqCounter1) {
    if (!(key in freqCounter2)) {
      //if the key isn't in freqCounter 2. return false.
      return false;
    }
    if (freqCounter2[key] !== freqCounter1[key]) {
      return false;
    }
  }
  console.log(freqCounter1);
  console.log(freqCounter2);

  return true;
}
