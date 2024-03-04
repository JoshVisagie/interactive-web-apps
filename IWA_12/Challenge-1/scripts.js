// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 
const elements = {
    status_1 : document.querySelector('#book1 span.status'),
    buttonReserve_1 : document.querySelector('#book1 button.reserve'),
    buttonCheckout_1 : document.querySelector('#book1 button.checkout'),
    buttonCheckin_1 : document.querySelector('#book1 button.checkin'), 

    status_2 : document.querySelector('#book2 span.status'),
    buttonReserve_2 : document.querySelector('#book2 button.reserve'),
    buttonCheckout_2 : document.querySelector('#book2 button.checkout'),
    buttonCheckin_2 : document.querySelector('#book2 button.checkin'), 

    status_3 : document.querySelector('#book3 span.status'),
    buttonReserve_3 : document.querySelector('#book3 button.reserve'),
    buttonCheckout_3 : document.querySelector('#book3 button.checkout'),
    buttonCheckin_3 : document.querySelector('#book3 button.checkin'), 
}
console.log(elements.buttonCheckout_1)

elements.status_1.style.color = STATUS_MAP[elements.status_1.textContent].color
elements.buttonReserve_1.disabled = STATUS_MAP[elements.status_1.textContent].canReserve ? false : true
elements.buttonCheckout_1.disabled = STATUS_MAP[elements.status_1.textContent].canCheckout ? false : true
elements.buttonCheckin_1.disabled = STATUS_MAP[elements.status_1.textContent].canCheckIn ? false : true
elements.buttonCheckin_1.style.color = 'black'

elements.status_2.style.color = STATUS_MAP[elements.status_2.textContent].color
elements.buttonReserve_2.disabled = STATUS_MAP[elements.status_2.textContent].canReserve ? false : true
elements.buttonCheckout_2.disabled = STATUS_MAP[elements.status_2.textContent].canCheckout ? false : true
elements.buttonCheckin_2.disabled = STATUS_MAP[elements.status_2.textContent].canCheckIn ? false : true
elements.buttonCheckin_2.style.color ='black'

elements.status_3.style.color = STATUS_MAP[elements.status_3.textContent].color
elements.buttonReserve_3.disabled = STATUS_MAP[elements.status_3.textContent].canReserve ? false : true
elements.buttonCheckout_3.disabled = STATUS_MAP[elements.status_3.textContent].canCheckout ? false : true
elements.buttonCheckin_3.disabled = STATUS_MAP[elements.status_3.textContent].canCheckIn ? false : true
elements.buttonCheckin_3.style.color ='black'
