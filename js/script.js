function submitHandler(event) {
    event.preventDefault();
    
    let inp1 = document.getElementById('inp1');
    let inp2 = document.getElementById('inp2');
    let selectOption = document.getElementById('logic');
    let result = document.getElementById('result');

    if (selectOption.value === 'null') {
        result.innerHTML = '<h1>Please select one option</h1>';
    } else if (selectOption.value === 'condition') {
        largest1(event);
    } else if (selectOption.value === 'ternary') {
        largest2(event);
    } else if (selectOption.value === 'math') {
        largest3(event);
    }
}

function largest1(event) {
    event.preventDefault();

    let a = Number(document.getElementById('inp1').value);
    let b = Number(document.getElementById('inp2').value);
    if (a > b) {
        result.innerHTML = `<h1>${a} is the largest Number</h1> => conditional statement`;
    } else {
        result.innerHTML = `<h1>${b} is the largest Number</h1> => conditional statement`;
    }
}

function largest2(event) {
    event.preventDefault();
    let a = Number(document.getElementById('inp1').value);
    let b = Number(document.getElementById('inp2').value);
    result.innerHTML = (a > b) ? `<h1>${a}  is the largest number => ternary operator</h1>` : `<h1>${b} is the largest Number => ternary operator</h1>`;
}

function largest3(event) {
    event.preventDefault();
    let a = Number(document.getElementById('inp1').value);
    let b = Number(document.getElementById('inp2').value);
    let maxNumber = Math.max(a, b);
    result.innerHTML = `<h1>${maxNumber} is the largest Number => Math.max option</h1>`;
}