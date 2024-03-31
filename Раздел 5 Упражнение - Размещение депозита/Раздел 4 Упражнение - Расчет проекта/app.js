// Раздел 5. Управление потоком.

// Упражнение - размещение депозита

const amount = 12000
const rate = 7
const costOfHouse = 13500
const termInYears = 2
let ratePerMonth = (7 / 100) / 12
let termInMonths = termInYears * 12
let result = 0

result = amount * (1 + ratePerMonth) ** termInMonths

console.log(result)

if (result >= costOfHouse) {
    console.log(`Вася накопил: ${result}$. Он сможет через ${termInYears} года купить дом за ${costOfHouse}$. У него останется ${result - costOfHouse}$.`)
} else {
    console.log(`Вася накопил: ${result}$. Он не сможет через ${termInYears} года купить дом за ${costOfHouse}$.`)
}






