firstName = 'John';
age = 35;
const myHobby = 'Coding';

const logTwice = (sentence) => {
  console.log(sentence)
  console.log(sentence)
}

function hobby () {
  logTwice(`Hello, ${firstName} (${age}). I love ${myHobby}!`)
}

hobby()