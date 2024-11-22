const inputLists = document.querySelectorAll("li")
const paragraphErrors = document.querySelectorAll("p[class='error-text']")

function clearErrorStates() {
    inputLists[0].classList.remove('error')
    paragraphErrors[0].innerText = ''
    inputLists[1].classList.remove('error')
    paragraphErrors[1].innerText = ''
    inputLists[2].classList.remove('error')
    paragraphErrors[2].innerText = ''
}

function isDateValid(valueDay, valueMonth, valueYear) {
    if (valueDay > 31 || valueDay <= 0) {
        inputLists[0].classList.add('error')
        paragraphErrors[0].innerText = 'Must be a valid day'
        return
    } else if (valueDay === '') {
        inputLists[0].classList.add('error')
        paragraphErrors[0].innerText = 'This field is required'
        return
    }

    if (valueMonth > 12 || valueMonth <= 0) {
        inputLists[1].classList.add('error')
        paragraphErrors[1].innerText = 'Must be a valid month'
        return
    } else if (valueMonth === '') {
        inputLists[1].classList.add('error')
        paragraphErrors[1].innerText = 'This field is required'
        return
    }

    if (valueYear === '') {
        inputLists[2].classList.add('error')
        paragraphErrors[2].innerText = 'This field is required'
        return
    }

    if (valueMonth == 2 || valueMonth == 4 || valueMonth == 6 || valueMonth == 9 || valueMonth == 11) {
        if (valueDay > 30) {
            inputLists[0].classList.add('error')
            inputLists[1].classList.add('error')
            inputLists[2].classList.add('error')
            paragraphErrors[0].innerText = 'Must be a valid date'
            return
        }
    }

    return true
}

function calculatingDate(valueDay, valueMonth, valueYear) {
    const birthdayDate = new Date(`${valueYear}-${valueMonth}-${valueDay}`)
    const actualDate = new Date()
    const millisecondsDifference = actualDate - birthdayDate

    if (millisecondsDifference < 0) {
        inputLists[0].classList.add('error')
        inputLists[1].classList.add('error')
        inputLists[2].classList.add('error')
        paragraphErrors[2].innerText = 'Must be in the past'
        return
    }

    const responseYears = Math.floor(millisecondsDifference / (365.25 * 24 * 60 * 60 * 1000))
    const remainderYear = millisecondsDifference % (365.25 * 24 * 60 * 60 * 1000)
    const responseMonth = Math.floor(remainderYear / (30.44 * 24 * 60 * 60 * 1000))
    const remainderMonth = remainderYear % (30.44 * 24 * 60 * 60 * 1000)
    const responseDays = Math.floor(remainderMonth / (24 * 60 * 60 * 1000))

    document.getElementById('result-year').innerText = responseYears
    document.getElementById('result-months').innerText = responseMonth
    document.getElementById('result-days').innerText = responseDays
}

export {clearErrorStates, isDateValid, calculatingDate}