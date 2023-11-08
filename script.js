const calculatorText = document.querySelector('#result-container');
const clearBtn = document.querySelector('#clear-button');
const moduloBtn = document.querySelector('#modulo-button');
const signSwapBtn = document.querySelector('#sign-swap-button');
const divideBtn = document.querySelector('#divide');
const numberBtnArr = document.querySelectorAll('.number-button')
const operationBtnArr = document.querySelectorAll('.operation-buttons')
const equalBtn = document.querySelector('#equal');
const decimalBtn = document.querySelector('#decimal-button')

const calculator = {
  display : '0' ,
  firstOperand : null,
  operator : null,
  secondOperand: null,

  updateDisplay(){
    calculatorText.textContent = this.display;
  },
  clear(){
    this.display = '0';
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
      this.firstOperand = parseFloat(this.display)
      this.operator = operator;
      this.display = '0';
    }else {
      this.operator = operator;
    }
    this.updateDisplay();
  },
  calculate (){
    if(this.firstOperand && this.operator){
      this.secondOperand = parseFloat(this.display);
      switch(this.operator){
        case '+':
          this.display = `${this.firstOperand+this.secondOperand}`;
          break;
        case '-':
          this.display = `${this.firstOperand-this.secondOperand}`;
          break;
        case 'X':
          this.display = `${this.firstOperand*this.secondOperand}`;
          break;
        case '/':
          if(this.secondOperand===0){
            this.display ='WAT?';
          }else{
          this.display = `${this.firstOperand/this.secondOperand}`;
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
  swapSign(){
    this.display=-this.display;
    this.updateDisplay();

  },
  percentage(){
    this.display = this.display * 0.01;
    this.updateDisplay();
  },
  decimal(){
    if(!this.display.includes('.')){
      this.display+='.'
    }
    this.updateDisplay()
  },
  
}
calculator.updateDisplay()
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
  signSwapBtn.addEventListener('click', () =>{
    calculator.swapSign();
  });
  moduloBtn.addEventListener('click', ()=>{
    calculator.percentage();
  });
  decimalBtn.addEventListener('click', () =>{
    calculator.decimal();
  })
  

