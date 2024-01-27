const MAX_NUMBER = 15;
const MIN_NUMBER = -5;
const STEP_AMOUNT =5;

const number = document.querySelector('[data-key="number"]')
const add = document.querySelector('[data-key="add"]')
const subtract = document.querySelector('[data-key="subtract"]')

const subtractHandler =()=>{
   
    console.log( 'subtract was clicked')
    const newValue =parseInt(number.value) -STEP_AMOUNT
    number.value= newValue;
    if (newValue <= MAX_NUMBER){
        add.disabled =false
    } 
    if (newValue <= MIN_NUMBER ){
        subtract.disabled =true
    } 

}

const addHandler =()=>{
    console.log( 'add was clicked')
    const newValue =parseInt(number.value) +STEP_AMOUNT
    number.value= newValue;
    if (newValue >= MIN_NUMBER ){
        subtract.disabled =false
    } 

    if (newValue >= MAX_NUMBER){
        add.disabled =true
    } 
}

subtract.addEventListener('click', subtractHandler)
add.addEventListener('click', addHandler)