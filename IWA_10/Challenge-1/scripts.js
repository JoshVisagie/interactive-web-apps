const currentYear = new Date().getFullYear();

const holidays = {
  0: {
    id: 0,
    name: "Day of Reconciliation",
    date: `16 December ${currentYear}`,
  },
  1: {
    id: 1,
    name: "Workers Day",
    date: new Date(`1 April ${currentYear}`),
  },
  2: {
    id: 2,
    name: "Day of Goodwill",
    date: new Date(`26 December ${currentYear}`),
  },
  3: {
    id: 3,
    name: "New Year Day",
    date: new Date(`1 January ${currentYear}`),
  },
  4: {
    id: 4,
    name: "Womens Day",
    date: new Date(`9 August ${currentYear}`),
  },
  5: {
    id: 5,
    name: "Heritage Day",
    date: new Date(`24 September ${currentYear}`),
  },
  6: {
    id: 6,
    name: "Christmas Day",
    date: new Date(`25 December ${currentYear} 13:25`),
  },
  7: {
    id: 7,
    name: "Youth Day",
    date: new Date(`16 June ${currentYear}`),
  },
  8: {
    id: 8,
    name: "Human Rights Day",
    date: new Date(`21 March ${currentYear}`),
  },
};

const christmas = 6;
const futureId = 9;

// Do not change code above this comment

console.log(
  (holidays.futureId && holidays.futureId.name) ||
    `ID ${futureId} not created yet`
); // added the && and fixed the string

let copied = Object.assign({}, holidays[christmas]);//cloned the object
copied.name = "X-mas Day";


correctDate = new Date(copied.date) //created a new date object and set the time to 00:00:00
correctDate.setHours(0, 0, 0)

const isEarlier = correctDate.getTime() < holidays[6].date.getTime()
console.log('New date is earlier:', isEarlier)

if (isEarlier) copied.date = correctDate

console.log('ID change:', holidays[christmas].id !== copied.id)
console.log('Name change:', holidays[christmas].name !== copied.name && copied.name)
console.log('Date change:', holidays[christmas].date !== copied.date && copied.date.getDay(),"/",copied.date.getMonth(),"/" ,copied.date.getFullYear())

const problemDate = new Date(holidays[0].date)

//created a date called problemDate because holidays[0] wasn't a date
const firstHolidayTimestamp = Math.min(
    problemDate.getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime(),
)

const lastHolidayTimestamp = Math.max(
    problemDate.getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime(),
)


const firstDay = new Date(firstHolidayTimestamp).getDate()
const firstMonth = new Date(firstHolidayTimestamp).getMonth()
const lastDay = new Date(lastHolidayTimestamp).getDate()
const lastMonth = new Date(lastHolidayTimestamp).getMonth()

let firstDayZero =firstDay<10 ? "0":""
let firstMonthZero =firstMonth<10 ? "0":""
let lastDayZero =lastDay<10 ? "0":""
let lastMonthZero =lastMonth<10 ? "0":""
//created an turnery query to add a 0 if the number is less than 10

console.log(`${firstDayZero}${firstDay}/${firstMonthZero}${firstMonth+1}/${currentYear}`)
console.log(`${lastDayZero}${lastDay}/${lastMonthZero}${lastMonth+1}/${currentYear}`)

const randomHoliday = new Date(holidays[Math.floor(Math.random() * 8)].date)
//added the function to randomise between one and eight and to choose from the holiday object

const dayZero =randomHoliday.getDate()<10 ? "0":""
const monthZero =randomHoliday.getMonth()+1<10 ? "0":""

console.log(`${dayZero}${randomHoliday.getDate()}/${monthZero}${randomHoliday.getMonth()+1}/${currentYear}`)
