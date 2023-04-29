//JavaScript Program to find the diagonal of a square where the length of each side is 9.

function findDiagonal(s) {
  return Math.sqrt(2) * s;
}
console.log(findDiagonal(9));

//Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6 and 7.

function areaTriangle(side1, side2, side3) {
  var s = (side1 + side2 + side3) / 2;
  var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
  console.log(area);
}
areaTriangle(5, 6, 7);

//Write a JavaScript program to find the circumference and surface area of a circle whose radius is 4.
let pi = 3.14159265358979323846;
function findArea(r) {
  return pi * r * r;
}
console.log(findArea(4));
