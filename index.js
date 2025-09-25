let input = document.querySelector('input');
let button = document.querySelector('button');
let result = document.querySelector('p');

button.addEventListener('click', isEvenOrOdd);

function isEvenOrOdd() {
    let num = input.value;
    if (input.value === '') {
        result.innerHTML = '';
        return;
    }
    if (num %2 == 0) {
        result.innerHTML = `${num} is Even Number`;
        document.querySelector('p').style.color = 'green';
        input.value = '';
        return;
    }
    else {
        result.innerHTML = `${num} is Odd Number`;
        document.querySelector('p').style.color = 'red';
        input.value = '';
        return;
    }
}
