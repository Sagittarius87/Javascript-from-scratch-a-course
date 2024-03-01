// Раздел 4. Основы.

// Переменные и значения

let name = 'Антон'
name = 'Вася'
console.log(name)
const age = 65
age = 95
console.log(age)

let userName = 'Вася'
let myClass8 = 8
let $myVar = 'var'
let _name = 'Антон'


// Базовые арифметические операторы

const width = 10
const height = 5

const space = width * height
console.log(space)

const newWidth1 = width + 2
console.log(newWidth1)

const newWidth2 = width - 2
console.log(newWidth2)

const division = newWidth1 / newWidth2
console.log(division)

const volume = 2 ** 2 // 2 в степени 3 или 2 * 2 * 2
console.log(volume)

// Строки

const city = 'Москва'
const street = 'Новослободская'
console.log(city + ', ' + street + ' ' + 5)


// Операторы присваивания и сравнения

// Операторы присваивания

let age = 44 + 5
age += 5 // age = age + 5
age -= 5 // age = age - 5
age *= 5 // age = age * 5
age /= 5 // age = age / 5

age++ // age = age + 1
age-- // age = age - 1
console.log(age)

// Операторы сравнения

let vasia = 55
console.log(vasia > age)
console.log(vasia >= age)
console.log(vasia < age)
console.log(vasia <= age)
console.log(vasia == age)


// Порядок операторов

const isSuited = 100 - 10 > 90 - 5
console.log(isSuited)
// 100 - (12 приоритет) 10 > (10 приоритет) 90 - (12 приоритет) 5
const a = (6 + 10) / 2 // группировка имеет 19 приоритет
console.log(a)

let b
let c
c = b = 100 + 50 // операторы присваивания работают справо налево
console.log(c)
console.log(b)


// Типы данных

// Примитив
let age = 55 // число
let name = 'Антон' // строка
let isAdmin = true // булево значение, true или false
let data1 = undefined // не заданное значение
let data2             //
let data = null // пустое значение
let admin = Symbol('Admin') // уникальное неизменное значение
let big = BigInt(999999999999999)  // Большое число

// Обьект
const user = {
    name: 'Вася',
    age: 33
}
console.log(user)

// Как узнать тип данных
console.log(typeof age)


// Шаблонные строки

const projectName = 'Ozone'
const price = 2000
const author = 'Василий Пупкин'

const template = `Клиент ${author} заказал товар в интернет магазине ${projectName} на сумму ${price} рублей.`
console.log(template)


// Преоброзование типов

const age = '45'
console.log(Number(age) + 5) // явное преобразование типов
console.log(String(4) + 7)
console.log(Boolean(1))
console.log(age - 5) // неявное преобразование типов
console.log(age * 5)
console.log(age / 5)


// False из других типов

console.log(Boolean(0))
console.log(Boolean(''))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(Number('sxa')))
console.log(Boolean(NaN))