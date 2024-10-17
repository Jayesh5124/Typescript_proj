// class Calculator {
//     add(a: number, b: number): number {
//         return a + b;
//     }
//     subtract(a: number, b: number): number {
//         return a - b;
//     }
//     multiply(a: number, b: number): number {
//         return a * b;
//     }
//     divide(a: number, b: number): number | string {
//         if (b === 0) {
//             return 'Error: Division by zero is not allowed.';
//         }
//         return a / b;
//     }
// }
// // Example usage
// const calculator = new Calculator();
// console.log('Addition:', calculator.add(5, 3));            
// console.log('Subtraction:', calculator.subtract(5, 3));    
// console.log('Multiplication:', calculator.multiply(5, 3)); 
// console.log('Division:', calculator.divide(5, 0));         
// console.log('Division:', calculator.divide(5, 2));         
// Basic Calculator Functions
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        return 'Error: Division by zero is not allowed.';
    }
    return a / b;
}
// Example usage
var a = 10;
var b = 5;
console.log('Addition:', add(a, b)); // Output: 15
console.log('Subtraction:', subtract(a, b)); // Output: 5
console.log('Multiplication:', multiply(a, b)); // Output: 50
console.log('Division:', divide(a, b)); // Output: 2
console.log('Division by zero:', divide(a, 0)); // Output: Error: Division by zero is not allowed.
