const date = 2050 ; //variables weren't declared as they were using : not =
const status = 'parent' ;
let count = 0 ; //count changes so it cant be a const

if (date === 2050) {
    // made the check use 3 === not 1 
	console.log("January", 'New Year`s Day');
	console.log("March", 'Human Rights Day');
	let month = 'April' ;
    //created a var for month and replaced all the date variables with it. Date was supposed to be the year
	console.log(month, 'Family Day')
	console.log(month, 'Freedom Day')
	 count = count + 4
    // removed let, the variable has already been created.
	if (status === "student") {
	  console.log('June', 'Youth Day')
		 count = count + 1
  }

	console.log('August', 'Women`s Day')
	console.log('September', 'Heritage Day')
	month = 'December'
	console.log(month, 'Day of Reconciliation')
	 count = count + 3

	if (status === "parent") {
	  console.log(month, 'Christmas Day')
		 count = count + 1
  }

	console.log(month, 'Day of Goodwill')
	 count = count + 1
}

console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)