//1.Write a program that calculates the sum of two numbers and displays the result

const num1 = 1;
const num2 = 4;
let sum = num1 * num2;
console.log(sum);

//2.Write a program that calculates the area of a rectangle. Prompt the user to enter the length and width of the rectangle and display the result.

const length = prompt("Enter the length");
const width = prompt("Enter the width");

// Calculating the area
let area = length * width;
console.log("The area of the rectangle is:", area);

//3.Write a program that converts a temperature from Celsius to Fahrenheit. Prompt the user to enter the temperature in Celsius and display the equivalent temperature in Fahrenheit.

const Celsius = prompt("Enter the value of temperature");
let Fahrenheit = (Celsius * 9) / 5 + 32;
console.log("This equivalent temperature in Fahrenheit", Fahrenheit);

//4. Write a program that checks if a given number is even or odd. Prompt the user to enter a number and display whether it is even or odd.

const number = prompt("Enter a number");
if (number % 2 === 0) {
  console.log(number + " is even number");
} else {
  console.log(number + " is odd number");
}
