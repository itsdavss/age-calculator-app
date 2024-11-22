import {clearErrorStates, isDateValid, calculatingDate} from './functions.js'

const submitButton = document.querySelector("button[name='button']")
const inputDay = document.querySelector("input[name='day']")
const inputMonth = document.querySelector("input[name='month']")
const inputYear = document.querySelector("input[name='year']")

submitButton.addEventListener('click', function () {
    const valueDay = inputDay.value
    const valueMonth = inputMonth.value
    const valueYear = inputYear.value

    clearErrorStates()

    if (!isDateValid(valueDay, valueMonth, valueYear)) {
        return
    }

    calculatingDate(valueDay, valueMonth, valueYear)
})

