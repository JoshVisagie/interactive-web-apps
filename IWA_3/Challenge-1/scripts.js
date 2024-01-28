// scripts.js



import { company } from './configuration.js';// needed to add {} when importing variable, correct spelling mistake and add the dir to the .js file.
import { year } from './configuration.js';



const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message;


/* 
Old Code

import company form 'configuration'
import year form 'configuration'

const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message 

*/