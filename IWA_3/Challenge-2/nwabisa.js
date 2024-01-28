// nwabisa.js
//exported the role
export const role = "CEO"
//added an event listener for when the DOMContentLoaded happens. I do not understand "", () =>" ask coach to explain"
document.addEventListener('DOMContentLoaded', () => {
//changed variables to const
const firstname = "Nwabisa"
const surname = "Gabe"
const display= firstname + " " + surname + " (" + role + ")"
document.querySelector('#nwabisa').innerText = display
});

/* 

OLD CODE

private firstname = "Nwabisa"
private surname = "Gabe"
public role = "CEO"

private display= firstname + " " + surname + " (" + role + ")"
document.querySelector('#nwabisa').innerText = display */