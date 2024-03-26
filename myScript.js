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
//This is done by periodically removing one letter from the string end and attaching it to the front

// var myVar = setInterval(myFunction, 1000);

// var word = "w3resource";
// var newArray = word.split("");

// function myFunction() {
//   var letter = newArray.pop();
//   var newWord = newArray.unshift(letter);
//   var theWord = newArray.join("");
//   console.log(theWord);
//   document.getElementById("rotate").innerHTML = theWord;
// }

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

// const randomNumber = Math.ceil(Math.random() * 10);
// console.log(randomNumber);

// let guessNum = prompt("Guess the number between 1 and 10");

// if (guessNum == randomNumber) {
//   alert("Good work");
// } else {
//   alert("Not Matched");
// }

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

// Q 19 Write a JavaScript program to find the longest string from a given array of strings.

function longestString() {
  let longestStr = "";
  let longArr = ["Khubaib", "Ali", "Ahmad", "Hassan"];

  for (let i = 0; i < longArr.length; i++) {
    if (longArr.length > longestStr.length) {
      longestStr = longArr[i];
    }
  }
  return longestStr;
}

console.log(longestString());

// Q 20 Write a JavaScript program to divide a given array of positive integers into two parts.
// First element belongs to the first part, second element belongs to the second part, and third
// element belongs to the first part and so on. Now compute the sum of two parts and store it in
// an array of size two.

function divideArray() {
  let divArr = [6, 4, 3, 7, 5, 4];
  let firstSum = 0;
  let secSum = 0;

  for (let i = 0; i < divArr.length; i++) {
    if (i % 2 === 0) {
      firstSum += divArr[i];
    } else {
      secSum += divArr[i];
    }
  }
  return [firstSum, secSum];
}

console.log(divideArray());

// Q 21 Write a JavaScript program to find the maximum difference between any two adjacent elements of a given array of integers.

function findMaxDiff() {
  let maxArr = [6, 5, 4, 8, 6, 4, 7, 4];

  let maxDiff = Math.abs(maxArr[1] - maxArr[0]);

  for (let i = 1; i < maxArr.length - 1; i++) {
    let diff = Math.abs(maxArr[i + 1] - maxArr[i]);
    if (diff > maxDiff) {
      maxDiff = diff;
    }
  }
  return maxDiff;
}

console.log(findMaxDiff());

// Q 22 Write a JavaScript program to find the maximum difference among all possible pairs of a given array of integers.

function maxDiffArr() {
  let arrMax = [6, 3, 9, 1, 7, 4];
  let maxDiffInArr = 0;

  for (let i = 0; i < arrMax.length - 1; i++) {
    for (let j = 1; j < arrMax.length; j++) {
      let diff2 = Math.abs(arrMax[i] - arrMax[j]);
      maxDiffInArr = Math.max(maxDiffInArr, diff2);
    }
  }
  return maxDiffInArr;
}

console.log(maxDiffArr());

// Q 23 Write a JavaScript program to replace all numbers with a specified number in an array of integers.

function replaceNum() {
  let arrRepl = [4, 6, 8, 3, 67, 3, 2];
  let oldNumber = 67;
  let replaceWith = 10;

  for (let i = 0; i < arrRepl.length; i++) {
    if (arrRepl[i] === oldNumber) {
      arrRepl[i] = replaceWith;
    }
  }
  return arrRepl;
}

console.log(replaceNum());

// Q 24 Write a JavaScript program to compute the sum of the absolute differences of consecutive numbers in a given array of integers.

function sumAbsoluteDiff() {
  let absArr = [1, 2, 3, 2, -5];
  let absDiff = 0;

  for (let i = 0; i < absArr.length - 1; i++) {
    absDiff += Math.abs(absArr[i] - absArr[i + 1]);
  }
  return absDiff;
}

console.log(sumAbsoluteDiff());

// Q 25 Write a JavaScript program to find the number of sorted pairs formed by arrays of integers. This is such that one element in the pair is divisible by the other one.

function sortedPairNums(sortArr) {
  let count = 0;

  for (let i = 0; i < sortArr.length; i++) {
    for (let j = i + 1; j < sortArr.length; j++) {
      if (sortArr[i] % sortArr[j] === 0 || sortArr[j] % sortArr[i] === 0) {
        count++;
      }
    }
  }
  return count;
}

console.log(sortedPairNums([1, 2, 3]));
console.log(sortedPairNums([2, 4, 6]));
console.log(sortedPairNums([2, 4, 16]));

// Error Handling

// Q 26 Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.

function checkNum(numb) {
  try {
    if (!Number.isInteger(numb)) {
      throw new Error("Number is not an integer");
    } else {
      console.log("Number is an integer", numb);
    }
  } catch (error) {
    console.log(error.message);
  }
}

console.log(checkNum(9));
console.log(checkNum(9.14));

// Q 27 Write a JavaScript function that accepts two numbers as parameters and throws a custom 'Error' if the second number is zero.

function twoNumbers(number1, number2) {
  try {
    if (number2 === 0) {
      throw new Error("Error, Division by zero is not possible");
    } else {
      return number1 / number2;
    }
  } catch (error) {}
}

// Q 28 There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
// Sample array :
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]

function sumOfArrays() {
  const array1 = [1, 0, 2, 3, 4];
  const array2 = [3, 5, 6, 7, 8, 13];
  const result = [];

  let maxLength = Math.max(array1.length, array2.length);
  for (let i = 0; i < maxLength; i++) {
    const sum = (array1[i] || 0) + (array2[i] || 0);
    result.push(sum);
  }

  return result;
}

console.log(sumOfArrays());

// Q 29 . Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223

function reverseNumber(numberOne) {
  let strNum = numberOne.toString();

  let revNum = strNum.split().reverse().join();

  return revNum;
}

console.log(Number(reverseNumber(5)));

// Q 30 Write a JavaScript function that checks whether a passed string is a palindrome or not?

function palindrome(strOne) {
  const lowerStr = strOne.toLowerCase().replace(/[^a-z0-9]/g, "");

  return lowerStr === lowerStr.split("").reverse().join("");
}

console.log(palindrome("Hello"));
console.log(palindrome("Madam"));

//Q 31 Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.

function firstCapitalLetter(brownFoxStr) {
  let words = brownFoxStr.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

console.log(firstCapitalLetter("the quick brown fox"));

// Q 32 Write a JavaScript program to calculate the factorial of a number.

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));
console.log(factorial(0));

// Q 33 Write a JavaScript program to get integers in the range (x, y) using recursion.
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]

function range(x1, y1, result = []) {
  if (x1 >= y1 - 1) {
    return result;
  } else {
    result.push(x1 + 1);
    return range(x1 + 1, y1, result);
  }
}

console.log(range(2, 9));

// Q 33 Write a JavaScript program to compute the exponent of a number.
// Note: The exponent of a number says how many times the base number is used as a factor.
// 82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.

function exponent(a, b) {
  if (b === 0) {
    return 1;
  } else {
    return a * exponent(a, b - 1);
  }
}
console.log(exponent(4, 2));

// Q 34 Write a JavaScript program to check whether a number is even or not.

function evenNumberCheck(num) {
  if (num === 0) {
    return true;
  }
  if (num === 1) {
    return false;
  }

  return evenNumberCheck(num - 2);
}

console.log(`is even? ${evenNumberCheck(9)}`);
console.log(`is even? ${evenNumberCheck(8)}`);

// Q 35 Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.

let numb1 = 5;
let numb2 = -3;
let numb3 = 6;

let product = numb1 * numb2 * numb3;

if (product > 0) {
  console.log("The sign is positive (+) ");
} else if (product < 0) {
  console.log("The sign is negative (-) ");
} else {
  console.log("There is no product");
}

// Q 36 Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.

let students = [
  ["Ali", 80],
  ["Ahmad", 90],
  ["Moeez", 60],
  ["Ahsan", 50],
  ["Bilal", 75],
];

let total = 0;

for (let i = 0; i < students.length; i++) {
  total += students[i][1];
}
let average = total / students.length;

if (average < 60) {
  console.log("Grade: F");
} else if (average < 70) {
  console.log("Grade: D");
} else if (average < 80) {
  console.log("Grade: C");
} else if (average < 90) {
  console.log("Grade: B");
} else if (average <= 100) {
  console.log("Grade: A");
}

/* Q 37 Write a JavaScript program to construct the following pattern, using a nested for loop.
 *
 * *
 * * *
 * * * *
 * * * * *

 */

function printPattern() {
  let rows = 5;
  for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}

printPattern();

// Q 38 Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }
  details() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Country: ${this.country}`);
  }
}

const person1 = new Person("Khubaib", 22, "Pakistan");
const person2 = new Person("Ali", 22, "USA");

person1.details();
person2.details();

// Q 39 Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  rectangleArea() {
    return this.width * this.height;
  }

  rectanglePerimeter() {
    return 2 * (this.width + this.height);
  }
}

const rectangle = new Rectangle(35, 25);

console.log(rectangle.rectangleArea());
console.log(rectangle.rectanglePerimeter());

// Q 40 Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  vehicleDetails() {
    console.log(`Make:${this.make}`);
    console.log(`Model:${this.model}`);
    console.log(`Year:${this.year}`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.doors = doors;
  }
  vehicleDetails() {
    super.vehicleDetails();
    console.log(`Doors:${this.doors}`);
  }
}

const vehicle = new Vehicle("Honda", "City", 2019);
vehicle.vehicleDetails();

const car = new Car("Honda", "Civic", 2024, 4);
car.vehicleDetails();

// Q 41 Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

class BankAccount {
  constructor(accNum, balance) {
    this.accNum = accNum;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited ${amount} successfully.`);
  }
  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn ${amount} successfully.`);
    } else {
      console.log("Incorrect Amount");
    }
  }
  getBalance() {
    return this.balance;
  }
}

const account = new BankAccount("653472", 2000);

account.withdraw(100);
account.deposit(1000);
console.log(`Account 1 balance: $${account.getBalance()}`);

/* Q 42 Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. 
Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from 
the 'Employee' class and adds an additional property for department. Override the annual salary
calculation method to include bonuses for managers. Create two instances of the 'Manager' class 
and calculate their annual salary.
*/

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  annualSalary() {
    return this.salary * 12;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }
  annualSalary() {
    const yearlySalary = super.annualSalary();
    const bonus = 0.1;
    return bonus * yearlySalary + yearlySalary;
  }
}

const manager1 = new Manager("Khubaib", 30000, "Frontend Developer");
const salary1 = manager1.annualSalary();

console.log(`Manager: ${manager1.name}`);
console.log(`Department: ${manager1.department}`);
console.log(`Salary: ${manager1.salary}`);

const manager2 = new Manager("Ali", 20000, "Backend Developer");
const salary2 = manager2.annualSalary();

console.log(`Manager: ${manager2.name}`);
console.log(`Department: ${manager2.department}`);
console.log(`Salary: ${manager2.salary}`);

/* Q 43 Write a JavaScript program that creates a class `Book` with properties for title, author, 
and publication year. Include a method to display book details. Create a subclass called 'Ebook' 
that inherits from the 'Book' class and includes an additional property for book price. Override 
the display method to include the book price. Create an instance of the 'Ebook' class and display 
its details.
*/

class Book {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }
  bookDetails() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Publication Year: ${this.publicationYear}`);
  }
}

class Ebook extends Book {
  constructor(title, author, publicationYear, bookPrice) {
    super(title, author, publicationYear, bookPrice);
    this.bookPrice = bookPrice;
  }
  bookDetails() {
    super.bookDetails();
    console.log(`Book Price: ${this.bookPrice}`);
  }
}

const book1 = new Ebook("To Kill a Mockingbird", "Harper Lee", 1960, 2000);
book1.bookDetails();

// Q 44 Write a JavaScript program that creates a button and add a click event listener to log a message when it's clicked.

const button = document.getElementById("click_btn");

button.addEventListener("click", function () {
  console.log("Button Clicked");
});

// Q 45 Write a JavaScript function to clone an array.

function arrayClone(arr) {
  return [...arr];
}

console.log(arrayClone([1, 2, 4, 0]));
console.log(arrayClone([1, 2, [4, 0]]));

// Q 46 Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.

function last(arr, n = 1) {
  if (n <= 0) {
    return [];
  }
  return n === 1 ? arr[arr.length - 1] : arr.slice(-n);
}

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));

// Q 47 Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

let myColor = ["Red", "Green", "White", "Black"];

let joinedWithComma = myColor.join(",");
console.log(joinedWithComma);

let joinedWithPlus = myColor.join("+");
console.log(joinedWithPlus);

// Q 48 Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

function insertDashes(num) {
  let strNum = num.toString();
  let result = "";

  for (let i = 0; i < strNum.length; i++) {
    result += strNum[i];
    if (parseInt(strNum[i]) % 2 === 0 && parseInt(strNum[i + 1]) % 2 === 0) {
      result += "-";
    }
  }

  return result;
}

console.log(insertDashes("025468"));

// Q 49  Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

var arrSort1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

arrSort1.sort(function (a, b) {
  return a - b;
});

console.log(arrSort1.join(","));

// Q 50 Write a JavaScript program to compute the sum and product of an array of integers.

function computeSumAndProduct(arrCompute) {
  let sum = 0;
  let product = 1;

  for (let i = 0; i < arrCompute.length; i++) {
    sum += arrCompute[i];
    product *= arrCompute[i];
  }

  return { sum: sum, product: product };
}

var arrCompute = [1, 2, 3, 4, 5];
var result = computeSumAndProduct(arrCompute);

console.log("Sum:", result.sum);
console.log("Product:", result.product);

// 51 Write a JavaScript program to display the colors in the following way.

// Here is the sample array:
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Output
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."

var color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
var o = ["th", "st", "nd", "rd"];

function displayColorChoices(colors) {
  for (let i = 0; i < colors.length && i < o.length; i++) {
    let suffix = o[i];
    let choice = colors[i];
    console.log(`${i + 1}${suffix} choice is ${choice}.`);
  }
}

displayColorChoices(color);

// Q 52 Find the leap years in a given range of years.

function findLeapYears(startYear, endYear) {
  const leapYears = [];

  for (let year = startYear; year <= endYear; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      leapYears.push(year);
    }
  }

  return leapYears;
}

const leapYearsInRange = findLeapYears(2000, 2024);

console.log("Leap years in the range:", leapYearsInRange);

// Q 53 Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0

let num1 = -5,
  num2 = -2,
  num3 = -6,
  num4 = 0,
  num5 = -1;

let largestNum = num1;
if (num2 > largestNum) {
  largestNum = num2;
}
if (num3 > largestNum) {
  largestNum = num3;
}
if (num4 > largestNum) {
  largestNum = num4;
}
if (num5 > largestNum) {
  largestNum = num5;
}

console.log(
  "The largest number among " +
    num1 +
    ", " +
    num2 +
    ", " +
    num3 +
    ", " +
    num4 +
    ", and " +
    num5 +
    " is: " +
    largestNum
);

// Q 54 Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz".

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
