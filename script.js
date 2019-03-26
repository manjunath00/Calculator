

// 1. Display the number clicked

// 2. Switch on the operations
let result, last, firstStatus, lastStatus, symbol;

first = '';

last = '';

firstStatus = true;

lastStatus = false;



let firstNum = function(e) {
    first += e.target.textContent;
    console.log(first);
    document.querySelector('#display').textContent = first;
    return first;
};

let secondNum = function(e) {
    last += e.target.textContent;
    console.log(last);

    document.querySelector('#display').textContent = last;
    return last;
};

let operation = function(e) {
    symbol = e.target.textContent;
    document.querySelector('#display').textContent = symbol;
    firstStatus = false;
    lastStatus = true;
    console.log(e.target.textContent);
    // switcher(e);
};

let math_operation = function(symbol) {
    // console.log(symbol);

    switch(symbol) {
        case '+':
            result = parseInt(first) + parseInt(last);
            break;

        case '-':
            result = parseInt(first) - parseInt(last);
            break;

        case '/':
            result = parseFloat(first) / parseFloat(last);
            break;

        case 'x':
            result = parseInt(first) * parseInt(last);
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
    console.log(first);
    console.log(symbol);
    console.log(last);
    console.log(result);
    document.querySelector('#display').textContent = '='+result;

}


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

document.querySelector('#plus').addEventListener('click', operation);
document.querySelector('#minus').addEventListener('click', operation);
document.querySelector('#multiply').addEventListener('click', operation);
document.querySelector('#div').addEventListener('click', operation);

document.querySelector('#equals').addEventListener('click', displayResult);

/*

When '/' is clicked

*/
