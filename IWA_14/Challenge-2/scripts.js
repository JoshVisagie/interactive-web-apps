// script.js

function add(a, b) {
	return(a + b)
}
//fixed the syntax of the function
function multiply(a, b) {
	return(a * b)
	}

function internal() {
	const added = add(this.internal.a, this.internal.b)
	const that = multiply(added, this.internal.c)
	console.log(that)
	//removed the this.add, changed internal to added and created a const called add that is logged
	
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()