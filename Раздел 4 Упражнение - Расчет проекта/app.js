// Раздел 4. Основы.

// Упражнение - расчет проекта

/*
Ваша часовая ставка 80$ и вы готовы работать не
более 5 часов в день 5 дней в неделю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40
часов работы.
Сейчас понедельник.
Вы должны уехать через 11 дней.
Выведете в консоль:
- Boolean переменную успеете ли вы взяться за работу
- Сколько вы за неё попросите?
*/

const hourlyRate = 80
const maxWorkingHours = 5
const WorkingDaysAWeek = 5
const hoursOfWork = 40
const maxWorkingDays = 11

let daysToComplete = hoursOfWork / maxWorkingHours
let theCostOfTheWork = hoursOfWork * hourlyRate
console.log('Максимальный срок выполнения работы: ' + maxWorkingDays)
console.log('Потребуется дней на выполнение: ' + daysToComplete)
console.log('Успеете ли вы взяться за работу: ' + (daysToComplete < maxWorkingDays))
console.log('Стоимость работы: ' + theCostOfTheWork + '$')


