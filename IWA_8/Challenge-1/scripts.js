const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

const leo ={
    //added the = 
	name : leoName,//changed the = to : and added a , also removed leoSurname as there is no such variable
	balance : leoBalance,
	accessID : `47afb389-8014-4d0b-aff3-e40203d2107f`,//made the accessID a string and gave it camel case
	age : 24,
	address:{
		number : leoNumber,
		street : leoStreet,
		postalCode : leoPostal,
	}
}

const sarah = {
	name : `${sarahName.trim()} ${sarahSurname} `, //added trim and changed to a '${}' concatination?*
	age : 62,
	accessID : `6b279ae5-5657-4240-80e9-23f6b635f7a8`,
	balance : sarahBalance,
	address : {
		number : sarahNumber,
		street : sarahStreet,
		postalCode : sarahPostal,
	}
}

console.log(leo )
console.log(leo.address.postalCode)
console.log(sarah)
console.log(sarah.address.postalCode)