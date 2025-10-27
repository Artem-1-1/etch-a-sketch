const container = document.getElementById('main-container');
const btn = document.getElementById('btn');

function randomRGB() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
}
function drawGrid(num) {
    container.textContent = "";
    const squareSize = 500 / num;
    for (i = 1; i <= num * num; i++) {
        const square = document.createElement('square');
        square.classList.add('square');
        square.style.width = squareSize + "px";
        square.style.height = squareSize + "px";
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = randomRGB();
        })

    container.appendChild(square);
    }
}
drawGrid(16);

btn.addEventListener('click', function() {
    let number = parseInt(prompt('Enter a number squares in grid.'))
    if (number > 0 && number <= 100) {
        drawGrid(number);
    }
    else {
        alert('Pease type a number greater than 0 and below 100.')
    }
});



