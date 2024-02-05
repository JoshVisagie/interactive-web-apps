const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'

//all my links to my HTML elements
const locationSelector = document.getElementById('locationSelector')
const shoesInput =document.getElementById('shoesInput')
const shirtsInput =document.getElementById('shirtsInput')
const toysInput =document.getElementById('toysInput')
const batteriesInput =document.getElementById('batteriesInput')
const pensInput =document.getElementById('pensInput')
const checkoutMessage = document.getElementById('checkoutMessage')
const customersInput = document.getElementById('customersInput')
const checkoutButton =document.getElementById('checkout')


//checkout function that will run when the checkout button is clicked
const checkoutFunct =()=>
{
    let shipping = 800 //set default shipping and currency to 800 and $ because apart from Namibians and South Africans it wont change.
    let currency = '$'
    let location = locationSelector.value //gets all the values from the text boxes and selectors
    let customers =customersInput.value
    let shoes = shoesInput.value * 300
    let shirts = shirtsInput.value * 150
    let toys = toysInput.value * 100
    let batteries = batteriesInput.value *35
    let pens = pensInput.value * 5
    let itemTotal = shoes+shirts+toys+batteries+pens//creates a new variable to tally all of the purchased items

    if (location === 'RSA') { 
        currency ='R' 
        //only South Africa uses "R" so this is the only time it needs to change
      if (itemTotal>=1000){
        shipping=0//this checks if the item value exceeds 1000 for South Africans and sets shipping to 0 otherwise it sets the shipping to 400
      }else{
        shipping=400
      }
    }

if (location === 'NAM') { 
    if (itemTotal>=1000){
        shipping=0//this checks if the item value exceeds 1000 for Namibians and sets shipping to 0 otherwise it sets the shipping to 600
      }else{
        shipping=600
      }
     }
    total= itemTotal+shipping //setst the new total

    if (shipping === 0 && customers > 1 && location ==='RSA') 
        { 
          total =total+400
          
         checkoutMessage.value= FREE_WARNING + currency + total

//this sets the warning that the special doesn't apply to more than 1 customer

        }else if(shipping === 0 && customers > 1 && location ==='NAM'){
          total =total+600
          checkoutMessage.value= FREE_WARNING + currency + total
        }else{
            checkoutMessage.value=  currency + total //this displays the total
        }

        if (location === 'DPRK') 
        {
        checkoutMessage.value= BANNED_WARNING//if you are from North Korea this error will display
   
        }
}

checkoutButton.addEventListener('click', checkoutFunct)//this checks calls the function 'checkoutFunct' when the checkout button is pressed.

/* 
old code

if (location === 'RSA') { 
        shipping = 400 
        currency ='R' 
}

if (location === 'NAM') { 
         shipping = 600 
 }


let shoes = 300 * 1
let toys = 100 * 5
let shirts = 150 * NONE_SELECTED
let batteries = 35 * 2
pens = 5 * NONE_SELECTED 

shipping = null
currency = $

if (shoes + batteries + pens + shirts > 1000 &&  ) {
	if (location = NAM && customers < 2) {
			if (location = RSA)
		    shipping = 0 || calcShipping
		}
	}
}

if (shipping = 0) && (customers !=== 1) { console.log(WARNING) }

location = 'NK' ? console.log(WARNING) : console.log('price', currency, shoes + batteries + pens + shirts + shipping)

customers = '1'

currency = null  */