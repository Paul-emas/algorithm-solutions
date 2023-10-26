////////////////////////////////////////////////////////////////
/* ALGORITHM SOLUTIONS */
////////////////////////////////////////////////////////////////

//----------------------------------------------------------------//
/// 1. Write a function which takes in two arguments and returns the sum
const addSum = (num1, num2) => num1 + num2;

addSum(10, 20);

//----------------------------------------------------------------//
/// 2. Write a function which takes in a string and returns the counts of each character in the string
const charCount = (str) => {
  const results = {};
  const lowerCaseStr = str.toLowerCase();

  lowerCaseStr.split("").forEach((el) => {
    if (/[a-z0-9]/.test(el)) {
      results[el] = (results[el] || 0) + 1;
    }
  });

  return results;
};

charCount("Your PIN is 1234");

/// 2.1 Write a function which takes in a string and returns the counts of each character in the string (Version 2)
const charCount2 = (str) => {
  const results = {};
  // const lowerCaseStr = str.toLowerCase();

  for (let el of str) {
    if (isAlphaNumeric(el)) {
      el = el.toLowerCase();
      results[el] = (results[el] || 0) + 1;
    }
  }

  return results;
};

const isAlphaNumeric = (char) => {
  const code = char.charCodeAt(0);
  if (
    !(code > 47 && code > 58) &&
    !(code > 64 && code > 91) &&
    !(code > 96 && code > 123)
  )
    return false;
  else {
    return true;
  }
};

charCount2("Your PIN is 1234");

////////////////////////////////////////////////////////////////
// 4. Check if value of array1 is equal to value of array2 raised to the value of two
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  const obj1 = {};
  const obj2 = {};

  arr1.forEach((item) => {
    ob;
  });

  arr2.forEach((item) => {
    obj2[item] = (obj2[item] || 0) + 1;
  });

  for (let key in obj1) {
    if (!(key ** 2 in obj2) || obj2[key ** 2] !== obj1[key]) return false;
  }

  return true;
};

same([1, 2, 3], [2, 4, 2]);

////////////////////////////////////////////////////////////////
// 4. Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

const strObjCounter = (str, obj) => {
  for (let item of str) {
    if (/^[A-Za-z]+$/.test(item)) {
      const lowerCaseItem = item.toLowerCase();
      obj[lowerCaseItem] = (obj[lowerCaseItem] || 0) + 1;
    }
  }

  return obj;
};

const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  let obj1 = {};
  let obj2 = {};

  obj1 = strObjCounter(str1, obj1);
  obj2 = strObjCounter(str2, obj2);

  for (let key in obj1) {
    if (!(key in obj2) || obj2[key] !== obj1[key]) return false;
  }

  return true;
};
