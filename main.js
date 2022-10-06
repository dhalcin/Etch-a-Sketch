
const square = 16*16;

for (let i = 0; i < square; i++) {
    const container = document.querySelector('.container');
    const addDiv = document.createElement('div');
    addDiv.classList.add('content-div');
    container.appendChild(addDiv);

    const eventDiv = document.querySelectorAll('.content-div');
    eventDiv.forEach(eventDiv => {
        eventDiv.addEventListener('mouseover', ()=> {
            eventDiv.style.background = 'red';
        });
        eventDiv.addEventListener('mouseout', ()=>{
            eventDiv.style.background = 'rebeccapurple';
        });
    });
}
 