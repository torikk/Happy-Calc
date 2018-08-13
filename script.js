/*jshint esversion: 6 */

function dateGreeting() {
    var hour = new Date().getHours();
    var greeting;
    if (hour < 12) {
        greeting = "Good morning!";
    } else if (hour < 18) {
        greeting = "Good day!";
    } else {
        greeting = "Good evening!";
    }
    var animation = document.getElementById("AnimationContainer");
    animation.classList.add("active");
    animation.classList.remove("inactive");
    animation.innerHTML = greeting;
}


//CALCULATION FUNCTION
const calculate = (n1, operator, n2) => {
    
    var n1 = n1;
    var n2 = n2;
    var n1Percent = n1.includes("%");
    var n2Percent = n2.includes("%");
    
    if (n1Percent === true && n2Percent === true) {
        n1 = parseFloat(n1);
        n1 = n1 / 100;
        n2 = parseFloat(n2);
        n2 = n2 / 100;
    } else if (n1Percent === true) {
        n1 = parseFloat(n1);
        n1 = n1 / 100;
        n2 = parseFloat(n2);
    } else if (n2Percent === true) {
        n1 = parseFloat(n1);
        n2 = parseFloat(n2);
        n2 = n2 / 100;
    } else {
        n1 = parseFloat(n1);
        n2 = parseFloat(n2);
    }
  
  let result = ''
  if (operator === 'add') {
    result = n1 + n2;
  } else if (operator === 'subtract') {
    result = n1 - n2;
  } else if (operator === 'multiply') {
    result = n1 * n2;
  } else if (operator === 'divide') {
    result = n1 / n2;
  }

  return result;
}



//SYMBOL FUNCTION
const symbol = (n1, operator, n2) => {
      let result = ''
  if (operator === 'add') {
    result = n1 + ' + ' + n2;
  } else if (operator === 'subtract') {
    result = n1 + ' - ' + n2;
  } else if (operator === 'multiply') {
    result = n1 + ' × ' + n2;
  } else if (operator === 'divide') {
    result = n1 + ' ÷ ' + n2;
  }

  return result;
}



//CALCULATOR
const calculator = document.querySelector('.calculator')
const display = calculator.querySelector('#AnswerContainer')
const problemDisplay = calculator.querySelector('#ProblemContainer')
const keys = calculator.querySelector('.calculator__keys')

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    const previousKeyType = calculator.dataset.previousKeyType

    Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'))
      
//NUMBERS
    if (!action) {
      if (displayedNum === '0' || previousKeyType === 'operator') {
        display.textContent = keyContent
         calculator.dataset.previousKeyType = 'numbers'
      } else if (previousKeyType === 'percent') {
        display.textContent
      } else {
        display.textContent = displayedNum + keyContent
        calculator.dataset.previousKeyType = 'numbers'
      }
    }
      
//DECIMALS
    if (action === 'decimal') {
          if (previousKeyType === 'decimal') {
            display.textContent = displayedNum + '';
          } else {
            display.textContent = displayedNum + '.';
            calculator.dataset.previousKeyType = 'decimal'  
          }
    }
      
//PERCENTS
    if (action === 'percent') {
          if (previousKeyType === 'percent' || displayedNum === '0' || previousKeyType === 'operator') {
            display.textContent = displayedNum + '';
          } else {
            display.textContent = displayedNum + '%';
            calculator.dataset.previousKeyType = 'percent'  
          }
    }
      
//POSNEG
    if (action === 'posneg') {
          if (previousKeyType === 'neg' ) {
            display.textContent = displayedNum.slice(1);
              calculator.dataset.previousKeyType = 'pos' 
              
          } else {
            display.textContent = '-' + displayedNum;
            calculator.dataset.previousKeyType = 'neg'  
          }
    }
      
//OPERATORS
    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      key.classList.add('is-depressed')
      calculator.dataset.previousKeyType = 'operator'
      calculator.dataset.firstValue = displayedNum
      calculator.dataset.operator = action
    }
      
//CLEAR
    if (action === 'clear') {
      display.textContent = '0'
      calculator.dataset.firstValue = '0'
      calculator.dataset.previousKeyType = 'clear'
      problemDisplay.textContent = ''
    }
      
//EQUAL
    if (action === 'calculate') {
      const firstValue = calculator.dataset.firstValue
      const operator = calculator.dataset.operator
      const secondValue = displayedNum
      calculator.dataset.previousKeyType = 'operator'
      display.textContent = calculate(firstValue, operator, secondValue)
      problemDisplay.textContent = symbol(firstValue, operator, secondValue)
    }
  }
})


