

// 1. Display the number clicked

// 2. Switch on the operations
let result, last, firstStatus, lastStatus, symbol, symbolStatus;

first = '';

last = '';

firstStatus = true;

lastStatus = false;

let firstNum = function(e) {
    first += e.target.textContent;
    document.querySelector('#display__top').textContent = first;
    document.querySelector('#display__bottom').textContent = first;
    return first;
};

let secondNum = function(e) {
    symbolStatus = false;
    last += e.target.textContent;
    // console.log(last);
    document.querySelector('#display__top').textContent = first + symbol + last;

    document.querySelector('#display__bottom').textContent = last;
    return last;
};

let operation = function(e) {
    symbol = e.target.textContent;
    document.querySelector('#display__top').textContent += symbol;

    document.querySelector('#display__bottom').textContent = symbol;
    firstStatus = false;
    lastStatus = true;
    // console.log(e.target.textContent);
};

let math_operation = function(symbol) {
    // console.log(symbol);

    switch(symbol) {
        case '+':
            result = Math.round((parseFloat(first) + parseFloat(last)) * 1000) / 1000;
            break;

        case '-':
            result = Math.round((parseFloat(first) - parseFloat(last)) * 1000) / 1000;
            break;

        case '/':
            result = Math.round((parseFloat(first) / parseFloat(last)) * 1000) / 1000;
            break;

        case 'x':
            result = Math.round((parseFloat(first) * parseFloat(last)) * 1000) / 1000;
            break;   
    }
    // console.log(result);
    return result;
};

let switcher = function(e) {

    if (firstStatus) {
        firstNum(e);
    } else {
        secondNum(e);
    }

};

let displayResult = function() {
    math_operation(symbol);
    console.log('Display result ');
    console.log(`${first} ${symbol} ${last} = ${result}`);
   
    document.querySelector('#display__top').textContent += '='+result;

    document.querySelector('#display__bottom').textContent = '='+result;

    first = result;
    last = '';

};

let reset = function() {
    first = '';
    last = '';
    firstStatus = true;
    lastStatus = false;
    symbol = '';
    console.log('New session has begun');
    document.querySelector('#display__top').textContent = 0;

    document.querySelector('#display__bottom').textContent = 0;

};

let removeLastLetter = function(string) {

    string = string.substr(0, (string.length - 1));
    console.log(`Modified string is ${string}`);
    console.log(string);
    return string;
};

let parser = function() {
    document.querySelector('#display__top').textContent = first + symbol + last;
};

let backspace = function() {
    
    if(firstStatus) {
        first = removeLastLetter(first);
        console.log(first);
    } else if (symbolStatus) {
        symbol = removeLastLetter(symbol);
        console.log(symbol);

    } else if (lastStatus) {
        last = removeLastLetter(last);
        console.log(last);
    }

    parser();

};







document.querySelector('#one').addEventListener('click', switcher);
document.querySelector('#two').addEventListener('click', switcher);
document.querySelector('#three').addEventListener('click', switcher);
document.querySelector('#four').addEventListener('click', switcher);
document.querySelector('#five').addEventListener('click', switcher);
document.querySelector('#six').addEventListener('click', switcher);
document.querySelector('#seven').addEventListener('click', switcher);
document.querySelector('#eight').addEventListener('click', switcher);
document.querySelector('#nine').addEventListener('click', switcher);
document.querySelector('#zero').addEventListener('click', switcher);

document.querySelector('#point').addEventListener('click', switcher);

document.querySelector('#plus').addEventListener('click', operation);
document.querySelector('#minus').addEventListener('click', operation);
document.querySelector('#multiply').addEventListener('click', operation);
document.querySelector('#div').addEventListener('click', operation);

document.querySelector('#equals').addEventListener('click', displayResult);

document.querySelector('.on').addEventListener('click', reset);

document.addEventListener('DOMContentLoaded', reset);

document.querySelector('#backspace').addEventListener('click', backspace);



/*

pending */

// 1. On button functionality completed
// 2. Backspace functionality 
// 3. Pointer functionality completed


