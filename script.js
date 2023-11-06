const calculatorText = document.querySelector('#result-container');
const clearBtn = document.querySelector('#clear-button');
const moduloBtn = document.querySelector('#modulo-button');
const signSwapBtn = document.querySelector('#sign-swap-button');
const divideBtn = document.querySelector('#divide');
const numberBtnArr = document.querySelectorAll('.number-button')
const operationBtnArr = document.querySelectorAll('.operation-buttons')
numberBtnArr.forEach(numberBtn => {
  numberBtn.addEventListener('click', () => {
    console.log(numberBtn.textContent);
  });
});
operationBtnArr.forEach(operationBtn => {
    operationBtn.addEventListener('click', () => {
      console.log(operationBtn.textContent);
    });
  });



