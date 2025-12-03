const container = document.querySelector(".container");
container.style.display = 'flex';
container.style.flexWrap = 'wrap';


// TODO: Make into a function that creates squares n times
// function createSquare(n); - replace the number of loops with the n arg
// Create 16 divs contained in the container div 
for (let i = 0; i < 16; i++){
    const grid = document.createElement("div");
    grid.className = 'square';

    // Style the squares
    grid.style.display = 'flex';
    grid.style.flex = '0 0 25%';
    grid.style.height = '150px';
    grid.style.outline = '1px solid black'

    container.appendChild(grid);
}

// container.addEventListener("mouseover", (e) => {
//   if (e.target.classList.contains("square")) {
//     e.target.style.backgroundColor = 'red';
//   }

// });


// container.addEventListener('mouseout', (e) => {
//     if(e.target.classList.contains('square')){
//         e.target.style.backgroundColor = '';
//     }
// })


container.addEventListener('mousemove', (e) => {
    // Create a new div that will act as a trailer to the mouse
    let pixel = document.createElement('div');
    const rect = container.getBoundingClientRect();

    pixel.style.position = 'absolute';
    pixel.style.left = `${e.clientX}px`;
    pixel.style.top = `${e.clientY}px`;
    pixel.style.width = '2px';
    pixel.style.height = '2px';
    pixel.style.background = 'black';
    pixel.style.pointerEvents = 'none';

    container.appendChild(pixel);

    setTimeout(() => pixel.remove(), 200);


})

