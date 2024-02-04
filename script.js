const input = document.getElementById('input-text');
const result = document.getElementById('result-text');


function handleClickButton(el) {
    const exp = input.value + el.innerText;
    input.value = exp;
    if (["+", "-","*","/"].includes(el.innerText)) return;
    result.value = eval(exp);
}

function reset() { 
    input.value = '';
    result.value = '';
}