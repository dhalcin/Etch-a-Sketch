
const container = document.querySelector('.container');
const btn = document.getElementById('btn');

btn.addEventListener('click', ()=> {
    userSelection();
});

function userSelection() {
    let user = prompt("Ingresa un numero mayor de 0 y menor que 100");
    let converValue = Number(user);
    if (converValue === null || converValue === "") {
        console.log("!Error ingresa un numero valido");
    }else if (converValue === 0 || converValue === 100) {
        console.log("!Error ingresa un numero valido");
    }else {
        removeDiv();
        createDiv(converValue);
    }
}


function removeDiv() {
    const selectDiv = document.querySelectorAll('.content-div');
    selectDiv.forEach(selectDiv => {
        selectDiv.remove();
    });
}

function createDiv(converValue) {
    let createSquares = Math.pow(converValue, 2);
    for (let i = 0; i < createSquares; i++) {
        const addDiv = document.createElement('div');
        addDiv.classList.add('content-div');
        container.appendChild(addDiv);
        container.style.gridTemplateColumns = `repeat(${converValue}, 1fr)`;

        const eventDiv = document.querySelectorAll('.content-div');
        eventDiv.forEach(eventDiv => {
            eventDiv.addEventListener('mouseover', ()=> {
                eventDiv.style.background = 'red';
            });
        });
    }
}

