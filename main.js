const { createElement } = require("react");

const container = document.getElementById('main-container');
const myInput = document.getElementById('inputNum');
const btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    const inputValue = myInput.value;
    console.log('Вы ввели ' + inputValue)
})

for (let i = 0;i < 256; i++) {
    const square = document.createElement('div');
    square.classList.add('square')
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = 'red';
    })
    container.appendChild(square);
}
