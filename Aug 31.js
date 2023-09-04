// Do the below programs in anonymous function & IIFE
// 
// 
// Sum of all numbers in an array
// Return all the prime numbers in an array
// Return all the palindromes in an array
// .
// Remove duplicates from an array
// Rotate an array by k times

//
(function(){
console.log("===========Print odd numbers in an array=============")
const arr=[1,2,3,4,5,6,7,8,9,10]
const ans=function(num){
    for(let i=0;i<=arr.length;i++){
        if(num[i]%2!=0){
            console.log(num[i]);
        }
    }
}
ans(arr);

console.log("====Convert all the strings to title caps in a string array====")
var word=["stalin","sam","raja","guvi","fsd"];
for(i=0;i<word.length;i++){ 
    var newArr=word[i].split(""); 
    var first=newArr.shift()
    var words=newArr.join("")
    var upper=first.toUpperCase() 
    anss=upper+words
    console.log(anss)
}

console.log("======Sum of all numbers in an array=======")
let num = [1, 2, 3, 4, 5,6,7,8,9,10];
let sum = 0;
for (let i = 0; i < num.length; i++ ) {
  sum += num[i];
}
console.log(sum)

console.log("======return prime numbers in an array=======")
function isPrime(number) {
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
  }
let primeNumbers = num.filter(isPrime);
  console.log("Prime numbers in the array:", primeNumbers);
  
console.log("====Return all the palindromes in an array====") 
let wordss = ["level", "hello", "deified", "world", "racecar"];

    function isPalindrome(str) {
      str = str.toLowerCase();
      let reversedStr = str.split('').reverse().join('');
      return str === reversedStr;
    }
  
   
    let palindromes = wordss.filter(isPalindrome);
  
    console.log("Palindromes in the array:", palindromes);
  
console.log("=======Return median of two sorted arrays of the same size=======")
 
// Return median of two sorted arrays of the same size
let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];
function findMedianSortedArrays(nums1, nums2) {
  let mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
  let length = mergedArray.length;

  if (length % 2 === 0) {
    let mid1 = mergedArray[length / 2 - 1];
    let mid2 = mergedArray[length / 2];
    return (mid1 + mid2) / 2;
  } else {
    return mergedArray[Math.floor(length / 2)];
  }
}
let median = findMedianSortedArrays(arr1, arr2);

console.log("Median of the two sorted arrays:", median);  

console.log("==========Remove duplicates from an array==========")

let numbers = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
let uniqueNumbers = [...new Set(numbers)];

  console.log("Array with duplicates removed:", uniqueNumbers);

  console.log("==========Rotate an array by k times==========")

  function rotateArray(arr, k) {
    k = k % arr.length;
    let rotated = arr.slice(k).concat(arr.slice(0, k));
    return rotated;
  }

  let originalArray = [1, 2, 3, 4, 5]; 
  let k = 3;
  let rotatedArray = rotateArray(originalArray, k);

  console.log("Rotated array by", k, "times:", rotatedArray);
})();

