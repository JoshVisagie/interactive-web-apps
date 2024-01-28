// alex.js
export const role = "Head of Marketing"

document.addEventListener('DOMContentLoaded', () => {
const firstname = "Alex"
const surname = "Naidoo"

const display= firstname + " " + surname + " (" + role + ")"
document.querySelector('#alex').innerText = display

});