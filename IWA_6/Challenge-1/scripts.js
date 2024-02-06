const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line
const number = 111;
const primaryValid =  typeof number == typeof parseInt(primaryPhone) 
const secondaryValid = typeof number == typeof parseInt(secondaryPhone)

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid )