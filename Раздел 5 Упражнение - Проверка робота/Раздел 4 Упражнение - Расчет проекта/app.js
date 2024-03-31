// Раздел 5. Управление потоком.

// Упражнение - проверка робота

let answer = ''

answer = prompt('Сколько будет 7 + или - 15?')

switch (true) {
    case answer === 'Я не робот':
    case Number(answer) === 22:
    case Number(answer) === -8:
        console.log('Успех')
        break
    default:
        console.log('Вы робот!')
}


