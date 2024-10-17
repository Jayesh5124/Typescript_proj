const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let currentResult = 0;

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
        throw new Error('Error: Division by zero is not allowed.');
    }
    return a / b;
}

// Function to ask for the next operation
function askForOperation() {
    rl.question('Choose an operation (add, subtract, multiply, divide) or type "exit" to quit: ', (operation) => {
        if (operation === 'exit') {
            console.log('Calculator exited.');
            rl.close();
            return;
        }

        rl.question('Enter a number: ', (input) => {
            const number = parseFloat(input);
            if (isNaN(number)) {
                console.log('Please enter a valid number.');
                askForOperation(); // Ask for operation again
                return;
            }

            try {
                switch (operation) {
                    case 'add':
                        currentResult = add(currentResult, number);
                        break;
                    case 'subtract':
                        currentResult = subtract(currentResult, number);
                        break;
                    case 'multiply':
                        currentResult = multiply(currentResult, number);
                        break;
                    case 'divide':
                        currentResult = divide(currentResult, number);
                        break;
                    default:
                        console.log('Invalid operation. Please try again.');
                        break;
                }
                console.log('Current Result:', currentResult);
                askForOperation(); // Ask for the next operation
            } catch (error) {
                console.log(error.message);
                askForOperation(); // Ask for operation again
            }
        });
    });
}

// Start the calculator
console.log('Welcome to the Calculator!');
askForOperation();
