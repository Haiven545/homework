function hello(name){
    return `Hello "${name}"`
}


let firstName = 'Dmitriy' 

console.log (hello(firstName))

// ============================

const numbers = [5, 12, 8, 20, 15, 3, 11, 7];
function printNumbersGreaterThanTen(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            console.log(arr[i]);
        }
    }
}

printNumbersGreaterThanTen(numbers);

// ======================

function calculator(num1, num2, operator) {
    switch (operator) {
        case 'plus':
            return num1 + num2;
        case 'minus':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            if (num2 === 0) {
                return 'Ошибка: деление на ноль';
            }
            return num1 / num2;
        default:
            return 'Ошибка: неизвестный оператор';
    }
}

let result = calculator(2, 3, 'minus');
console.log(result); 

result = calculator(2, 3, 'plus');
console.log(result); 

result = calculator(2, 3, 'multiply');
console.log(result); 

result = calculator(6, 3, 'divide');
console.log(result); 

result = calculator(6, 0, 'divide');
console.log(result); 

result = calculator(6, 3, 'unknown');
console.log(result); 