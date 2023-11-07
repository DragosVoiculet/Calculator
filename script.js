const calculatorText = document.querySelector('#result-container');
const clearBtn = document.querySelector('#clear-button');
const moduloBtn = document.querySelector('#modulo-button');
const signSwapBtn = document.querySelector('#sign-swap-button');
const divideBtn = document.querySelector('#divide');
const numberBtnArr = document.querySelectorAll('.number-button')
const operationBtnArr = document.querySelectorAll('.operation-buttons')
const equalBtn = document.querySelector('#equal')


const calculator = {
  display : '0' ,
  firstOperand : null,
  operator : null,
  secondOperand: null,

  updateDisplay(){
    calculatorText.textContent = this.display;
  },
  clear(){
    this.display = '';
    this.firstOperand = null;
    this.operator = null;
    this.updateDisplay();
  },
  appendNumber(number){
    if((this.display === '0')){
      this.display = number;
    }else{
      this.display+=number;
    }
    this.updateDisplay();
  },
  setOperator(operator){
    if(this.operator === null){
      this.firstOperand = parseInt(this.display)
      this.operator = operator;
      this.display = '0';
    }else {
      this.operator = operator;
    }
    this.updateDisplay();
  },
  calculate (){
    if(this.firstOperand && this.operator){
      this.secondOperand = parseInt(this.display);
      switch(this.operator){
        case '+':
          this.display = this.firstOperand+this.secondOperand;
          break;
        case '-':
          this.display = this.firstOperand-this.secondOperand;
          break;
        case 'X':
          this.display = this.firstOperand*this.secondOperand;
          break;
        case '/':
          if(this.secondOperand===0){
            this.display ='WAT?';
          }else{
          this.display = this.firstOperand/this.secondOperand;
          }
          break;
          default:
            break;
      }
      this.operator = null;
      this.firstOperand = null;
      this.updateDisplay();
      this.secondOperand = null;
    }
  },
  
}

numberBtnArr.forEach(numberBtn => {
  numberBtn.addEventListener('click', () => {
    calculator.appendNumber(numberBtn.textContent);
    calculator.updateDisplay()
  });
});
operationBtnArr.forEach(operationBtn => {
    operationBtn.addEventListener('click', () => {
      calculator.setOperator(operationBtn.textContent); 
    });
  });
  clearBtn.addEventListener('click', () => {
    calculator.clear();
  });

  equalBtn.addEventListener('click', () => {
    calculator.calculate();
  });

