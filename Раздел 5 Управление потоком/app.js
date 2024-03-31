// Раздел 5. Управление потоком.

// If else

const money = 10

if (money > 50) {
    console.log('Может купить наш продукт')
} else if (money > 5) {
    console.log('Куплен mini продукт')
} else {
    console.log('Не хватает баланса')
}

console.log('Итог')

// Операторы равенства

const secretNumber = '7'

if (secretNumber == 7) {
    console.log('Угадал не строго')
}

if (Number(secretNumber) === 7) {
    console.log('Угадал строго')
}

// Switch

const role = 'manager'

switch (role) {
    case 'manager':
        console.log('Менаджер')
        break
    case 'admin':
        console.log('Админ')
        break
    case 'ceo':
        console.log('СЕО')
        break
    default:
        console.log('Мы тебя не знаем!')
}

const role1 = 'ceo'

switch (role1) {
    case 'manager':
    case 'admin':
        console.log('Не руководитель')
        break
    case 'ceo':
        console.log('Руководитель')
        break
    default:
        console.log('Мы тебя не знаем!')
}

const role2 = 'manager'

switch (role2) {
    case 'manager':
        console.log('Менеджер')
    case 'admin':
        console.log('Не руководитель')
        break
    case 'ceo':
        console.log('Руководитель')
        break
    default:
        console.log('Мы тебя не знаем!')
}

const num = 1

switch (true) {
    case num > 0:
        console.log('Положительный')
        break
    case num < 0:
        console.log('Отрицательный')
        break
    default:
        console.log('Ноль!')
}

// Тернарные операторы

10 > 0 ? console.log('Больше 0') : console.log('Не больше 0')
const str = 20 > 0 ? 'Больше 0' : 'Не больше 0'
console.log(str)

const bmvX3Price = 2000000
const budget = 1000000
console.log(`Я хочу купить ${budget > bmvX3Price ? 'БМВ' : 'Форд'}`)