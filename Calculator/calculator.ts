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

// Basic Calculator using  Functions

function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

function divide(a: number, b: number): number | string {
    if (b === 0) {
        return 'Error: Division by zero is not allowed.';
    }
    return a / b;
}

const a = 10;
const b = 5;

console.log('Addition:', add(a, b));            
console.log('Subtraction:', subtract(a, b));    
console.log('Multiplication:', multiply(a, b)); 
console.log('Division:', divide(a, b));         
console.log('Division by zero:', divide(a, 0)); 
