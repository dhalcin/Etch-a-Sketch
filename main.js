
const square = 16*16;

const container = document.querySelector('.container');

function div() {
    const addDiv = document.createElement('div');
    addDiv.classList.add('content-div');
    container.appendChild(addDiv);
}

for (let i = 0; i < square; i++) {
    div();
    console.log('hola');
}
 