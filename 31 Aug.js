console.log("========Print odd numbers in an array=======")
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumbers = arr.filter(num => num % 2 !== 0);
console.log("Odd numbers in the array:", oddNumbers);

console.log("========Convert all the strings to title caps in a string array=======")
let strArray = ["hello", "world", "javascript", "programming"];
let titleCaseArray = strArray.map(str => str.charAt(0).toUpperCase() + str.slice(1));
console.log("Title case strings in the array:", titleCaseArray);

console.log("========Sum of all numbers in an array=======")
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, current) => acc + current, 0);
console.log("Sum of numbers in the array:", sum);

console.log("========Return all the prime numbers in an array=======")
const isPrime = (number) => {
    if (number <= 1) {
      return false;
    }
    if (number <= 3) {
      return true;
    }
    if (number % 2 === 0 || number % 3 === 0) {
      return false;
    }
    let i = 5;
    while (i * i <= number) {
      if (number % i === 0 || number % (i + 2) === 0) {
        return false;
      }
      i += 6;
    }
    return true;
  };
  
  let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let primeNumbers = num.filter(isPrime);
  
  console.log("Prime numbers in the array:", primeNumbers);

console.log("========Return all the palindromes in an array=======")
const isPalindrome = (str) => {
str = str.toLowerCase();
let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  };
  
let words = ["level", "hello", "deified", "world", "racecar"];
let palindromes = words.filter(isPalindrome);
  
console.log("Palindromes in the array:", palindromes);