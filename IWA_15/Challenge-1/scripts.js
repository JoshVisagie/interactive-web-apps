// scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

//created 3 variables that searched the data.lists array for the 3 respective arrays
const first = data.lists[0][1]
const second = data.lists[1][1]
const third = data.lists[2][1]


const result = [] //[10, 12, 14, 5, 7, 13, 11, 15, 4, 8, 6, 2, 1, 3, 9]

//created a counter to the value of the length of the array
let firstIndex= first.length 
let secondIndex= second.length
let thirdIndex = third.length
//extractBiggest function compares the first second and third variable at the indexvalue-1 if the number is the biggest it decreases the index value by one and returns the value of that possition in the array.
const extractBiggest = () => {
	if (first[firstIndex-1] > second[secondIndex-1] && first[firstIndex-1] > third[thirdIndex-1]) {
		 firstIndex= firstIndex-1
 
    return first.pop() 
	}else if (second[secondIndex-1] > third[thirdIndex-1 ]) {
		secondIndex= secondIndex-1
    return second.pop() 
	}else{	
    thirdIndex= thirdIndex-1
    return third.pop() 
}


}
// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result) 