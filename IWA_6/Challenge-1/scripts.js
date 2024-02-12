const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line


console.log(parseInt(primaryPhone))

const primaryValid =    parseInt(primaryPhone) >= 0  || parseInt(primaryPhone) <= 0  ; 
const secondaryValid =   parseInt(secondaryPhone)  >= 0  || parseInt(primaryPhone) <= 0  ;

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid )