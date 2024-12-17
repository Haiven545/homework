// Массив объектов с описанием пользователей
const users = [
    { name: "Иван", isAdmin: false },
    { name: "Мария", isAdmin: true },
    { name: "Алексей", isAdmin: false },
    { name: "Ольга", isAdmin: false },
];

// Переменная для хранения количества простых пользователей
let regularUsersCount = 0;

// Обходим массив пользователей
users.forEach(user => {
    if (!user.isAdmin) {
        regularUsersCount++;
    }
});

// Выводим количество простых пользователей
console.log(`Количество простых пользователей: ${regularUsersCount}`);