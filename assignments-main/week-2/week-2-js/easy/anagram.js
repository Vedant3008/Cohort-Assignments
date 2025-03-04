/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if 
  those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, 
  such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const lowerCaseStr1 = str1.toLowerCase();//OR const sortedStr1 = str1.toLowerCase().split("").sort().join("");
  const arr1 = lowerCaseStr1.split("");
  arr1.sort();
  const arr1Sorted = arr1.join("");

  const lowerCaseStr2 = str2.toLowerCase();//OR const sortedStr2 = str2.toLowerCase().split("").sort().join("");
  const arr2 = lowerCaseStr2.split("");
  arr2.sort();
  const arr2Sorted = arr2.join("");

  if (arr1Sorted === arr2Sorted){
    return true;
  }
  else{
    return false;
  }
}
console.log(isAnagram("Vedant","avednt"));
//module.exports = isAnagram; 
