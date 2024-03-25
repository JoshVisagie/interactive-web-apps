// scripts.js

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 
//create a function that makes an array of a size
const createArray = (length) => {
    const result = []

    for (let i = 0 ; i < length; i++) {
        result.push(i)
    }

    return result
}
// function to create data for the calendar
const createData = () => {
    const current = new Date()
    const month =current.getMonth()//get the current month

    const lastDay = new Date(current.getFullYear(), month + 1, 0).getDate()//gets the last day of the current month
    current.setDate(lastDay-1)
    
    const startDay = current.getDay() - 1 // Get the day of the week of the first day of the month
    const daysInMonth = getDaysInMonth(current) //gets the number of days in current month
  
    const weeks = createArray(Math.ceil(daysInMonth/7))  //calculates the number of weeks needed to display the month
    const days = createArray(7)// creates an array for the 7 days of the week
    const result = []

    for (const weekIndex of weeks) {
       
        result.push({
            week: weekIndex + 1,// week number
            days: []//days of this week
        })

        for (const dayIndex of days ) {
            const day = dayIndex - startDay + (weekIndex * 7) + 1 // Calculate the day value 

            const isValid = day > 0 && day <= daysInMonth  //checks if it is a valid day
            result[weekIndex].days.push({
                dayOfWeek: dayIndex + 1,// Day of the week (1-7)
                value: isValid ? day : '', // sets the valye to a day or emtpy string
            })
        }
    }

    return result
}


const addCell = (existing, classString, value) => {
    const result = /* html */ `
        ${existing}

        <td class="${classString}">
            &nbsp;${value}&nbsp;
        </td>
    `

    return result
}

const createHtml = (data) => {
    let result = ''
 // loop through each week
    for (const { week, days } of data) {
        let inner = ""
        inner = addCell(inner, 'table__cell table__cell_sidebar', `[Week ${week}]`)
    // loop through each day in the week
       for(const { dayOfWeek, value } of days){
            const isToday = new Date().getDate() === value
            const isWeekend = dayOfWeek === 1  | dayOfWeek === 7
            const isAlternate = week % 2 === 0
            
						let classString = 'table__cell'
//if it has any classes set the classes add them to the class string
            if (isToday) classString = `${classString} table__cell_today`
            if (isWeekend) classString = `${classString} table__cell_weekend`
            if (isAlternate) classString = `${classString} table__cell_alternate`
            inner = addCell(inner, classString, value)
        }

        result = `
            ${result}
            <tr>${inner}</tr>
        `
    }
    
    return result
}

// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)