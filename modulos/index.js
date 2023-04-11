const calculadora = require("./calculadora");

console.log("2 + 3=", calculadora.add(2, 3));
console.log("7 - 5=", calculadora.subtract(7, 5));
console.log("4 x 6=", calculadora.multiply(4, 6));
console.log("9 + 3=", calculadora.divide(9, 3));
console.log("8 + 0=", calculadora.divide(8, 0));