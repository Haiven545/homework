const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) {
        console.log('Чётное число ' + number[i])
    }
}


const colors = ["красный", "оранжевый", "желтый", "зеленый", "голубой", "синий", "фиолетовый"];

for (let i = colors.length - 1; i >= 0; i--) {
    console.log(colors[i]);
}