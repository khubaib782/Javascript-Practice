// Q1 Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

let currentDate = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let currentDay = days[currentDate.getDay()];

let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

let timePeriod = hours >= 12 ? "PM" : "AM";

if (hours >= 12) {
  hours = hours % 12;
  if (hours === 0) hours = 12;
} else {
}

console.log(`Today is: ${currentDay}`);
console.log(
  `Current time is: ${hours} ${timePeriod} : ${minutes} : ${seconds}`
);

// Q3 Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

let a = 5;
let b = 6;
let c = 7;

let s = (a + b + c) / 2;

let area = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));

console.log(area);

//Q4 Write a JavaScript program to rotate the string 'w3resource' in the right direction.
// This is done by periodically removing one letter from the string end and attaching it to the front

var myVar = setInterval(myFunction, 1000);

var word = "w3resource";
var newArray = word.split("");

function myFunction() {
  var letter = newArray.pop();
  var newWord = newArray.unshift(letter);
  var theWord = newArray.join("");
  console.log(theWord);
  document.getElementById("rotate").innerHTML = theWord;
}

// Q5 Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
function leapyear(year) {
  return year % 4 === 0;
}

console.log(leapyear(2024));
console.log(leapyear(2025));

// Q6 Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.

for (let year = 2014; year <= 2050; year++) {
  var d = new Date(year, 0, 1);
  if (d.getDay() === 0) {
    console.log("1st January is being a Sunday  " + year);
  }
}

// Q7 Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number.
//The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

const randomNumber = Math.ceil(Math.random() * 10);
console.log(randomNumber);

let guessNum = prompt("Guess the number between 1 and 10");

if (guessNum == randomNumber) {
  alert("Good work");
} else {
  alert("Not Matched");
}

// Q8 Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).

function multiplyNumbers() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  let result = num1 * num2;

  document.getElementById("result").innerHTML =
    "Multiplication result" + result;
}

function divideNumbers() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  let result = num1 / num2;
  document.getElementById("result").innerHTML = "Division result" + result;
}

// Q9 Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.

// let inputNum = prompt("Enter any number");
let inputNum = 30;

let differenceNum = inputNum - 13;

if (differenceNum > 13) {
  console.log(differenceNum * 2, "Double absolute difference");
} else {
  console.log(differenceNum, " Difference num");
}

// Q 10 Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.

// let str1 = prompt("Enter any string");
let str1 = "thon";
if (str1.startsWith("Py")) {
  console.log(str1);
} else {
  console.log("Py" + str1);
}

// Q 11 Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.

let string = "Hello";
let index = 2;

let newString = string.slice(0, index) + string.slice(index + 1);

console.log(newString);

// Q 12 Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters.
//The string length must be broader than or equal to 1.

function swap() {
  let inputStr = "Hello";

  if (inputStr.length >= 1) {
    let firChar = inputStr[0];
    let lastChar = inputStr[inputStr.length - 1];
    let newStr =
      lastChar + inputStr.substring(1, inputStr.length - 1) + firChar;
    console.log(newStr);
  } else {
    console.log("Your length is small");
  }
}

swap();

// Q 13 Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string.
//If "Script" appears in the string, return the string without "Script" otherwise return the original one.

function removeScript() {
  let orignalString = "JavaScript";
  if (orignalString.length > 4 && orignalString.slice(4, 10) === "Script") {
    console.log(orignalString.slice(0, 4));
  } else {
    console.log(orignalString);
  }
}

removeScript();

// Q 14
// Write a JavaScript program to evaluate a student's total marks across various examinations and determine their grade. The grading criteria are as follows:
// If the total marks fall within the range of 89 to 100 (inclusive), the student receives an A+ grade.
// If the examination is labeled as "Final-exam," the student will receive an A+ grade only if their total marks are 90 or greater. Assume that final examination means we pass 'true' as second parameter otherwise blank.
// If the student achieves an A+ grade, the program should return 'true'; otherwise, it should return 'false'.

function studentGrades() {
  let grade = "false";
  let isFinalExam = true;
  let marks = 70;

  if (marks >= 89 && marks <= 100) {
    if (isFinalExam && marks >= 90) {
      grade = "true";
    } else if (!isFinalExam) {
      grade = "true";
    }
  }

  console.log(grade);
}

studentGrades();

// Q 15  Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.

let arr1 = [4, 6, 1];

arrSum = arr1[0] + arr1[1] + arr1[2];

console.log(arrSum);

// Q 16  Write a JavaScript program to check whether 1 appears in the first or last position of a given array of integers.
//The array length must be larger than or equal to 1.

function oneArray(arrOne) {
  if (
    (arrOne.length >= 1 && arrOne[0] == 1) ||
    arrOne[arrOne.length - 1] == 1
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(oneArray([1, 2, 3]));
console.log(oneArray([4, 2, 3]));

// Q 17 Write a JavaScript program to reverse the elements of a given array of integers of length 3.

function reverseArr(revArr) {
  if (revArr.length === 3) {
    let temp = revArr[0];
    revArr[0] = revArr[2];
    revArr[2] = temp;

    return revArr;
  } else {
    console.log("Array length must be 3");
  }
}

console.log(reverseArr([2, 3, 4]));
console.log(reverseArr([2, 3, 4, 5]));

// Q 18 Write a JavaScript program to count the number of vowels in a given string.

function vowels(vowelsStr) {
  let count = 0;
  for (let i = 0; i < vowelsStr.length; i++) {
    if (
      vowelsStr[i] === "a" ||
      vowelsStr[i] === "e" ||
      vowelsStr[i] === "i" ||
      vowelsStr[i] === "o" ||
      vowelsStr[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}

console.log(vowels("hello how are you"));

// Q 19 Write a JavaScript program to replace each character in a given string with the next in the English alphabet.
// Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.
