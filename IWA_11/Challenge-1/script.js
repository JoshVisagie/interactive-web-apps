const root_1 = document.querySelector('[data-key="order1"]')
const biscuits_1 = root_1.getAttribute('data-biscuits');
const donuts_1 = root_1.getAttribute('data-donuts');
const pancakes_1 = root_1.getAttribute('data-pancakes');
const delivered_1 = root_1.getAttribute('data-delivered');
//creates a variable called root_1 and gets all the atributes from it and stores it as variables.
const root_2 = document.querySelector('[data-key="order2"]')
const biscuits_2 = root_2.getAttribute('data-biscuits');
const donuts_2 = root_2.getAttribute('data-donuts');
const pancakes_2 = root_2.getAttribute('data-pancakes');
const delivered_2 = root_2.getAttribute('data-delivered');

const root_3 = document.querySelector('[data-key="order3"]')
const biscuits_3 = root_3.getAttribute('data-biscuits');
const donuts_3 = root_3.getAttribute('data-donuts');
const pancakes_3 = root_3.getAttribute('data-pancakes');
const delivered_3 = root_3.getAttribute('data-delivered');

const biscuitsCount1 = root_1.querySelector('div.biscuits dd.count') 
// finds the part of Root_1 that is a div called biscuits and a description called count
biscuitsCount1.textContent = biscuits_1;
//sets the text to the value obtained in biscuits_1

const donutsCount1 = root_1.querySelector('div.donuts dd.count')
donutsCount1.textContent = donuts_1; 
const pancakesCount1 = root_1.querySelector('div.pancakes dd.count')
pancakesCount1.textContent = pancakes_1; 
const Status1 = root_1.querySelector('div.status dd')
Status1.textContent = delivered_1=== 'true'? 'Delivered' : 'Pending'

const biscuitsCount2 = root_2.querySelector('div.biscuits dd.count') 
biscuitsCount2.textContent = biscuits_2;
const donutsCount2 = root_2.querySelector('div.donuts dd.count')
donutsCount2.textContent = donuts_2; 
const pancakesCount2 = root_2.querySelector('div.pancakes dd.count')
pancakesCount2.textContent = pancakes_2; 
const Status2 = root_2.querySelector('div.status dd')
Status2.textContent = delivered_2=== 'true'? 'Delivered' : 'Pending'


const biscuitsCount3 = root_3.querySelector('div.biscuits dd.count') 
biscuitsCount3.textContent = biscuits_3;
const donutsCount3 = root_3.querySelector('div.donuts dd.count')
donutsCount3.textContent = donuts_3; 
const pancakesCount3 = root_3.querySelector('div.pancakes dd.count')
pancakesCount3.textContent = pancakes_3; 
const Status3 = root_3.querySelector('div.status dd')
Status3.textContent = delivered_3=== 'true'? 'Delivered' : 'Pending'


/* const biscuitsCount1 = root_1.querySelector('div.biscuits dd.count') */
/*
biscuits_1.setAttribute= root_1.getAttribute('data-biscuits')
1-donuts = 1-root.donuts,
 1-pancakes = 1-root.pancakes,
1-status = 1-root.status ? Delivered : Pending

2-biscuits= 2-root.biscuits,
2-donuts = 2-root.donuts,
2-pancakes = 2-root.pancakes,
2-status = 2-root.status ? Delivered : Pending

3-biscuits= 3-root.biscuits,
3-donuts = 3-root.donuts,
3-pancakes = 3-root.pancakes,
3-status = 3-root.status ? Delivered : Pending */  



        
      
