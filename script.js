'use strict';
const switcher = document.querySelector('.btn');

switcher.addEventListener('click',function(){
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className=="light-theme"){
        this.textContent="Dark";
    }else{
        this.textContent="Light";
    }
    console.log('current class name : '+className);
});
let displayValue = '';

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendOperator(operator) {
    displayValue += ` ${operator} `;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue);
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}
