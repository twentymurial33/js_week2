//Write a JavaScript program that accepts two integers and displays the larger of the two.

function twoCalculations(a, b) {
  if (a > b) {
    console.log(true);
  } else if (b > a) {
    console.log(false);
  }
}
console.log(twoCalculations(6, 4));

//Write a JavaScript program that checks whether an integer is an even or an odd number.
const number = 10;
if (number % 2 == 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}
