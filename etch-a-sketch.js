//create a 16x16 grid of square divs using dom techniques
const gridContainer = document.querySelector("#gridContainer")

const gridRow1 = document.createElement("div");
    gridRow1.classList.add("gridRow");
gridContainer.appendChild(gridRow1)

const gridSquare1 = document.createElement("div");
    gridSquare1.classList.add("gridSquare");
    const gridText1 = document.createTextNode("i'm in a div!");
    gridSquare1.appendChild(gridText1)
gridRow1.appendChild(gridSquare1)

const gridSquare2 = document.createElement("div");
    gridSquare2.classList.add("gridSquare");
    const gridText2 = document.createTextNode("i'm in a div!");
    gridSquare2.appendChild(gridText2)
gridRow1.appendChild(gridSquare2)

const gridSquare3 = document.createElement("div");
    gridSquare3.classList.add("gridSquare");
    const gridText3 = document.createTextNode("i'm in a div!");
    gridSquare3.appendChild(gridText3)
gridRow1.appendChild(gridSquare3)