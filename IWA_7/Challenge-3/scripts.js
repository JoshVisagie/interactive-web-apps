const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line

/*  const owed = `R ${((parseFloat(leoBalance) + parseFloat(sarahBalance))*-1).toFixed(2)}`

const leo = `${leoName} ${leoSurname} Owed R${((parseFloat(leoBalance)*-1)).toFixed(2)}`
const sarah = `${sarahName} ${sarahSurname} Owed R${(parseFloat(sarahBalance)*-1).toFixed(2)}` 

const result = 
`${leo} 
${sarah}

${divider}
  Total amount owed: ${owed}
${divider}
`

console.log(result) */

//this function called format currency takes a value and turns it into a currency so that the thousands have a ,

const formatCurrency = (value) => {
    return parseFloat(value).toLocaleString('en-SA', {
        style: 'currency',
        currency: 'ZAR', // So the downside of this method is I can't make it 'R', unless I  create anotherfunction
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
};

const owed = formatCurrency((parseFloat(leoBalance) + parseFloat(sarahBalance)) * -1);
//const owed = parseInt('R' + leoBalance + sarahBalance).... I changed it to the formatCurrency function and *-1 to make it not a negative. 
const leo = `${leoName.trim()} ${leoSurname.trim()} (Owed: ${formatCurrency(parseFloat(leoBalance) * -1)})`;
//const leo = "{leoName} + {leoSurname} + \"Owed\" + \"R\" + {sarahBalance}" for this I used the ` and fixed forgotting $ and removed the +
const sarah = `${sarahName.trim()} ${sarahSurname.trim()} (Owed: ${formatCurrency(parseFloat(sarahBalance) * -1)})`;
//the .trim() function gets rid of the blank spaces
total = `Total amount owed: ${owed}`
const result =
    `${leo} 
${sarah}

${divider}
   ${total}
${divider}
`;

console.log(result);