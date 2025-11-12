

/*-------------------------------- Variables --------------------------------*/
let num1 = '';
let num2 = '';
let operator = '';
let result = '';

/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // console.log(event.target.innerText);
    // Future logic to capture the button's value would go here...
  });
});

calculator.addEventListener('click', (event) => {
  // This log is for testing purposes to verify we're getting the correct value
  // You have to click a button to see this log
//   console.log(event.target.innerText);

  // Example
  if (event.target.classList.contains('number')) {
    // Do something with a number
    let clickedNumber = event.target.innerText;
    
    if (operator === '') {
      num1 = num1 + clickedNumber;
      display.innerText = num1;
    } else {
      num2 = num2 + clickedNumber;
      display.innerText = num2;
      display.innerText = num1 + ' ' + operator + ' ' + num2;
    }
  }

  // Example
  if (event.target.innerText === '*') {
    // Do something with this operator
    operator = '*';
    display.innerText = num1 + ' ' + operator;
  }
  
  if (event.target.innerText === '+') {
    operator = '+';
    display.innerText = num1 + ' ' + operator;
  }
  
  if (event.target.innerText === '-') {
    operator = '-';
    display.innerText = num1 + ' ' + operator;
  }
  
  if (event.target.innerText === '/') {
    operator = '/';
    display.innerText = num1 + ' ' + operator;
  }
  
  if (event.target.innerText === 'C') {
    num1 = '';
    num2 = '';
    operator = '';
    result = '';
    display.innerText = '';
  }
  
  if (event.target.classList.contains('equals')) {
    if (operator === '+') {
      result = Number(num1) + Number(num2);
    }
    
    if (operator === '-') {
      result = Number(num1) - Number(num2);
    }
    
    if (operator === '*') {
      result = Number(num1) * Number(num2);
    }
    
    if (operator === '/') {
      result = Number(num1) / Number(num2);
    }
    
    display.innerText = result;
    num1 = result;
    num2 = '';
    operator = '';
  }
});

