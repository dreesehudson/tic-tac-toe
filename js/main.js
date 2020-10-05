let turnsTaken = 0;
let currTurn = 0;

//init fires onload
function init() {

    //top level HTML container
    const main = document.getElementById("app");

    //
    const headerRow = generateElement("div", "headerRow", "row mt-3", main);
    const headerCol = generateElement("div", "headerCol", "col", headerRow);
    const headerTitle = generateElement("h1", "headerTitle", "text-center", headerCol);
    headerTitle.innerHTML = "Tic Tac Toe";

    //player information
    const infoRow = generateElement("div", "infoRow", "row mt-3", main);
    const playerOneCol = generateElement("div", "playerOneCol", "col-6 float-left", infoRow);
    const playerOne = generateElement("p", "playerOneName", "text-left", playerOneCol);
    playerOne.innerHTML = "Player 1";
    const playerTwoCol = generateElement("div", "playerTwoCol", "col-6 float-right", infoRow);
    const playerTwo = generateElement("p", "playerTwoName", "text-right", playerTwoCol);
    playerTwo.innerHTML = "Player 2";

    const gameBoardRow = generateElement("div", "gameBoardRow", "row mt-3 mx-3", main);

    const buttonRow = generateElement("div", "buttonRow", "row mt-3", main);
    // const newGameButtonCol = generateElement("div", "newGametButtonCol", "col-6 text-center float-left", buttonRow)
    const newGameButton = generateElement("button", "newGameButton", "col-6 btn btn-secondary", buttonRow)
    newGameButton.innerHTML = "New Game";

    // const restartButtonCol = generateElement("div", "restartButtonCol", "col-6 text-center float-right", buttonRow);
    const restartButton = generateElement("button", "restartButton", "col-6 btn btn-primary float-right", buttonRow)
    restartButton.innerHTML = "Restart Game"



    //generates HTML elements given their type, id, classes, and parents as parameters.
    function generateElement(type, id, classes, parent = false, eventListener = false) {
        let newElement = document.createElement(type);
        newElement.setAttribute("class", classes);
        newElement.setAttribute("id", id);
        if (eventListener) {
            //make event listener
        }
        if (parent) {
            parent.appendChild(newElement);
        }
        return newElement;
    }

    //objects for game tiles
    let tiles = ["border-bottom border-right",
        "border-bottom border-right",
        "border-bottom",
        "border-bottom border-right",
        "border-bottom border-right",
        "border-bottom",
        "border-right",
        "border-right",
        ""
    ]
    //generate tiles
    makeGameTiles(tiles);

    function makeGameTiles(array) {
        for (let i = 0; i < array.length; i++) {
            const newElement = document.createElement("div");
            newElement.setAttribute("class", `col-4 border-dark ${array[i]}`);
            newElement.setAttribute("style", "height:100px; width:100px;");
            newElement.setAttribute("id", i);
            gameBoardRow.appendChild(newElement);
        }
    }

}
    

//onclick for modal play button
// playerOne.innerHTML = `${playerOne.name} ${playerOne.symbol}`;
// playerTwo.innerHTML = `${playerTwo.name} ${playerTwo.symbol}`;


//create footer to hold buttons


$(document).ready(function () {
    $("#playerModal").modal('show');
});

    //PLAY BUTTON event listener
    //populate player boxes with the names and symbols
    // <!-- Button to Open the Modal , Need to Render with JS-->
    // <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
    //     New Game
    // </button>

    //generate click listeners to game tiles and buttons







//playerOne : name , symbol
//playerTwo : name , symbol
//gameTiles  {0: border bottom and right, state: 0
//            1: border left bottom and right, state: 0
//            2: border left and bottom, state: 0
//            3: border top right and bottom, state: 0
//            4: border all, state: 0
//            5: border top left and bottom, state: 0
//            6: border top and right, state: 0
//            7: border left top and right, state: 0
//            8: border left and top, state: 0}
//state 0 = ""
//state 1 = playerOne.symbol
//state 2 = playerTwo.symbol
//


//functions




// (IN HTML) modal to receive player names and symbol selections
//playerOne name input, symbol input (🐱, 👑, 🏎)
//playerTwo name input, symbol input (🌵, ⛄️, ⭐️)

//set tile state 1 and 2


//playerTurn
//user clicks game tile
//change tile state
//check win
//hard coded win conditions
//alert to congratulate winner and offer newGame or resetGame
//turnsTaken++
//check tie
//flip currTurn


//newGame
function newGame() {
    //re-init, toggle modal, new names and symbol selection
    //flip first turn to whoever went second during previous game

}

//resetGame
function resetGame() {
    //reset tile states but keep player names and symbols
    //flip first turn to whoever went second during previous game

}