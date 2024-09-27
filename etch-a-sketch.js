let userGridRow = 0;
const button = document.querySelector("button")
const parentGridContainer = document.querySelector("#parentGridContainer")
const gridContainer = document.querySelector("#gridContainer")

generateButton.addEventListener("click", () => {
    let userGridRow = parseInt(prompt("how many squares per side should the grid be?", "16"), 10)
    generateCanvas(userGridRow)
    }
)

let gridSquare = document.createElement("div")

wipeButton.addEventListener("click", () => {
    gridRow.remove();
    gridSquare.style.backgroundColor = 'rgb(255, 255, 255)'
    }
)

const gridRow = document.createElement("div");
gridRow.classList.add("gridRow");

const generateCanvas = (userGridRow) =>  {
    for (let i = 0; i < userGridRow; i++) {
        for (let j = 0; j < userGridRow; j++) {
    //creates 16x16 divs in a row
            gridContainer.appendChild(gridRow)
    //creates a div to contain the row and appends it to the container
            let gridSquare = document.createElement("div");
            gridSquare.classList.add("gridSquare");
            gridRow.appendChild(gridSquare)
            gridSquare.addEventListener("mouseover", () => {
                gridSquare.style.backgroundColor = 'rgb(187, 255, 0)'
            });
    //creates divs within the row and appends it to the row
        }
    }
}