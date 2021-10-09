/**
 * Given a string that contains words seperated by digits(0-9). Reverse words in place
 * Eg: asd1fa -> dsa1af
 **/

/**
 * Algorithm
 * create function for reverseWords
 * check for not string and return invalid string if condition is true
 * convert the string in array with split and separate alphabets and number
 * loop the value of array and again convert value of array into array with split
 * check value of array is string and number
 * if string then reverse the words and convert it into string
 * else number do nothing
 * return final string
 */

function reverseWords(str) {
  if (typeof str !== "string") {
    return "This is not a String";
  }
  let arr1 = str.split(/(\d+)/);
  let finalstr = "";
  for (let val of arr1) {
    let arr2 = val.split("");
    if (typeof val === "string" && !Number(val)) {
      finalstr = finalstr + arr2.reverse().join("");
    } else {
      finalstr = finalstr + val;
    }
  }
  return finalstr;
}

console.log(reverseWords("asts7hg8jsgtred5lyaass")); // stsa7gh8dertgsj5ssaayl
console.log(reverseWords("asts77hg8jsgtred5lyaass")); // stsa77gh8dertgsj5ssaayl
console.log(reverseWords("123")); // 123
console.log(reverseWords("asd")); // dsa
console.log(reverseWords("asd1f")); // dsa1f
console.log(reverseWords("abc23de")); // cba23ed
console.log(reverseWords("1ab")); // 1ba
