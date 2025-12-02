const container = document.querySelector(".container");
container.style.display = 'flex';
container.style.flexWrap = 'wrap';



// Create 16 divs contained in the container div 
for (let i = 0; i < 16; i++){
    const grid = document.createElement("div");

    // Style the squares
    grid.style.display = 'flex';
    grid.style.flex = '0 0 25%';
    grid.style.height = '150px';
    grid.style.outline = '1px solid black';

    container.appendChild(grid);
}
