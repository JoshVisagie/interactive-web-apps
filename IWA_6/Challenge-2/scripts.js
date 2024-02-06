
const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line
let balance=null;

if (hourOfDay !== null && minuteOfDay !== null && hourOfDay == '00' && minuteOfDay == '00') {
	const taxAsDecimal =  parseInt(tax) / 100

    console.log(taxAsDecimal)
    
    const startingAfterTax =  salary * (1 - taxAsDecimal) 
    
    balance = startingAfterTax - transport - food - rent 
    
}
	
 console.log('R'+ balance.toFixed(2)) 