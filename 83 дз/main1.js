// Создаем объект с методом
const myObject = {
    name: "Дмитрий",
    age: 21,
    greet: function (name) {
        return `Hello, ${name}`;
    },
};

// Вызываем метод объекта
console.log(myObject.greet("Алексей"));