var first, second, third, total, firstValue, secondValue, thirdValue;
first ='';
second = '';
third = '';
total = 0;
firstValue = true;
thirdValue = false;
var calculate = function(second) {

    switch (second) {

        case 'minus':
            total = parseFloat(first) - parseFloat(third);
            break;

        case 'plus':
            total = parseFloat(first) + parseFloat(third);
            break;
     
        case 'multiply':
            total = parseFloat(first) * parseFloat(third);
            break;

        case 'div':
            total = parseFloat(first) / parseFloat(third);
            break;
    };

    console.log(total);

};
/*

document.getElementById('reset').addEventListener('click', function() {

    console.log('Calculator is reset');
});
*/

document.querySelector('.numbers').addEventListener('click', function(e) {
    
    var val = e.target.id;
    if (firstValue) {
        first += val;
        console.log(first);
        thirdValue = false;
    } else if (thirdValue) {
        third += val;
        console.log(third);
    }

});


document.querySelector('.operation').addEventListener('click', function(e) {


    if (firstValue) {
        firstValue = false;
        var second = e.target.id;
        console.log(second);
        thirdValue = true;
    }

});

document.querySelector('.equal').addEventListener('click', function(e) {
        calculate(second); 
//    console.log(parseFloat(first) - parseFloat(third));
});




