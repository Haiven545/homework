const users = [
    { name: "Иван", isAdmin: false },
    { name: "Мария", isAdmin: true },
    { name: "Алексей", isAdmin: false },
    { name: "Ольга", isAdmin: false },
];

let regularUsersCount = 0;

users.forEach(user => {
    if (!user.isAdmin) {
        regularUsersCount++;
    }
});

console.log(`Количество простых пользователей: ${regularUsersCount}`);
