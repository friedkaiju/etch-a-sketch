let userGridRow = 0;
const button = document.querySelector("button")
const parentGridContainer = document.querySelector("#parentGridContainer")
const gridContainer = document.querySelector("#gridContainer")

button.addEventListener("click", () => {
    let userGridRow = parseInt(prompt("how many squares per side should the grid be?", "16"), 10)
    generateCanvas(userGridRow)
    }
)
//create a container for a 16x16 grid of square divs using only dom techniques

const generateCanvas = (userGridRow) =>  {
    for (let i = 0; i < userGridRow; i++) {
        for (let j = 0; j < userGridRow; j++) {
    //creates 16x16 divs in a row
            const gridRow = document.createElement("div");
            gridRow.classList.add("gridRow");
            gridContainer.appendChild(gridRow)
    //creates a div to contain the row and appends it to the container
            const gridSquare = document.createElement("div");
            gridSquare.classList.add("gridSquare");
            gridRow.appendChild(gridSquare)
            gridSquare.addEventListener("mouseover", () => {
                gridSquare.style.backgroundColor = 'rgb(187, 255, 0)'
            });
    //creates divs within the row and appends it to the row
        }
    }
}