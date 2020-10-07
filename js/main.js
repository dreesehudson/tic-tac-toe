//MODEL
let turnsTaken = 0;
let currTurn = 1;
let data = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function checkWin() {
    //Winning possibilities
    // 0, 1, 2;   3, 4, 5;    6, 7, 8;      Horizontal
    // 0, 3, 6;   1, 4, 7;    2, 5, 8;      Vertical
    // 0, 4, 8;   2, 4, 6;                  Diagonal

    let winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    //check if any combo == 3 || -3
    for (let i = 0; i < winningCombos.length; i++) {
        //reduce each element
        let check = data[winningCombos[i][0]] + data[winningCombos[i][1]] + data[winningCombos[i][2]];
        //if this winning combo = 3, player One has won
        if (check == 3) {
            let successTiles = winningCombos[i]
            console.log(successTiles);
            for (let j = 0; j < 3; j++) {
                document.getElementById(successTiles[j]).classList.add("bg-success");
            }
            headerTitle.innerText = `${playerOneText.innerHTML} WINS`;
            //disable all gametiles to disable futher marks
            for (let i = 0; i < 9; i++) {
                document.getElementById(i).removeEventListener("click", click);
            }
        }
        //if this winning combo = -3, player Two has won
        if (check == -3) {
            let successTiles = winningCombos[i]
            console.log(successTiles);
            for (let j = 0; j < 3; j++) {
                document.getElementById(successTiles[j]).classList.add("bg-success");
            }
            headerTitle.innerText = `${playerTwoText.innerHTML} WINS`;
            //disable all gametiles to disable futher marks
            for (let i = 0; i < 9; i++) {
                document.getElementById(i).removeEventListener("click", click);
            }
        }
    }

}

//VIEW
//top level HTML container
const main = document.getElementById("app");

//init fires onload, generates all UI components
function init() {


    //title information
    const headerRow = generateElement("div", "headerRow", "row mt-3", main);
    const headerCol = generateElement("div", "headerCol", "col", headerRow);
    const headerTitle = generateElement("h1", "headerTitle", "text-center", headerCol);
    headerTitle.innerHTML = "Tic Tac Toe";

    //player information
    const infoRow = generateElement("div", "infoRow", "row mt-3", main);

    const playerOneCol = generateElement("div", "playerOneCol", "col-6 align-self-center float-left bg-dark text-light", infoRow);
    const playerOne = generateElement("p", "playerOneText", "my-auto text-center", playerOneCol);
    //default player name if no name entered in modal
    playerOne.innerHTML = "Player 1";

    const playerTwoCol = generateElement("div", "playerTwoCol", "col-6 align-self-center float-right", infoRow);
    const playerTwo = generateElement("p", "playerTwoText", "my-auto text-center", playerTwoCol);
    //default player name if no name entered in modal
    playerTwo.innerHTML = "Player 2";

    //generate board and tiles
    makeGameTiles(tiles);

    //button rows for newGame and restartGame
    const buttonRow = generateElement("div", "buttonRow", "justify-content-center row mt-3", main);

    // const newGameButton = generateElement("button", "newGameButton", "col-6 btn btn-secondary float-left", buttonRow);
    // newGameButton.setAttribute("data-toggle", "modal");
    // newGameButton.setAttribute("data-target", "#playerModal");
    // newGameButton.addEventListener("click", newGame);
    // newGameButton.innerHTML = "New Game";

    const restartButton = generateElement("button", "restartButton", "col-6 btn btn-primary", buttonRow);
    restartButton.addEventListener("click", resetGame);
    restartButton.innerHTML = "Restart Game";

    const playButton = document.getElementById("playButton");
    playButton.addEventListener("click", playerInputs);
}

//objects for game tiles
let tiles = [
    "border-bottom border-right",
    "border-bottom border-right",
    "border-bottom",
    "border-bottom border-right",
    "border-bottom border-right",
    "border-bottom",
    "border-right",
    "border-right",
    ""];

//generates HTML elements given their type, id, classes, and parents as parameters.
function generateElement(type, id, classes, parent = false, eventListener = false) {
    let newElement = document.createElement(type);
    newElement.setAttribute("class", classes);
    newElement.setAttribute("id", id);
    if (eventListener) {
        //make event listener, if present
        newElement.addEventListener(eventListener)
    }
    if (parent) {
        //add element to parent, if present
        parent.appendChild(newElement);
    }
    return newElement;
}

function makeGameTiles(array) {
    //row for board game tiles to be added to later.
    const gameBoardRow = generateElement("div", "gameBoardRow", "row d-flex justify-content-center mt-3 mx-3", main);

    for (let i = 0; i < array.length; i++) {
        //create div for each game tile
        const newElement = document.createElement("div");
        //naming the tile based on its for loop index.
        newElement.setAttribute("id", i);
        //apply default classes for each tile and its custom borders defined in array parameter
        newElement.setAttribute("class", `col-4 border-dark text-center ${array[i]}`);
        //sizing
        newElement.setAttribute("style", "height:100px; width:100px; font-size:3em");
        //apply event listener
        newElement.addEventListener("click", click);
        //adding tile to the game board front-end
        gameBoardRow.appendChild(newElement);
    }
}

//CONTROLLER

//launches modal screen when page loads
$(document).ready(function () {
    $("#playerModal").modal('show');
});

function playerInputs() {
    //grab player inputs for names from modal and reassign innerHTML of player boxes
    //if user input a name for player one, insert it to the UI, otherwise leave it as Player 1
    if (document.getElementById("playerOneName").value != "") {
        playerOneText.innerHTML = document.getElementById("playerOneName").value.toUpperCase();
    }

    //receive input from radio button for player one symbol

    //if user input a name for player one, insert it to the UI, otherwise leave it as Player 1
    if (document.getElementById("playerTwoName").value != "") {
        playerTwoText.innerHTML = document.getElementById("playerTwoName").value.toUpperCase();
    }
    //receive input from radio button for player two symbol

}

//playerTurn, called when a tile is clicked
function click(e) {
    if (currTurn == 2) {
        //markTile with player 2 symbol
        e.target.innerHTML = "⭕️";  //currentPlayersSymbol
        //sub 1 to data index for this tile to indicate player 2 score at this tile.
        data[e.target.id]--;

        //if current player is player 2 decrement currTurn to player 1
        currTurn--;
        //change style to player col's to reflect who's turn it is
        document.getElementById("playerOneCol").classList.remove("bg-light", "text-dark");
        document.getElementById("playerOneCol").classList.add("bg-dark", "text-light");

        document.getElementById("playerTwoCol").classList.remove("bg-dark", "text-light");
        document.getElementById("playerTwoCol").classList.add("bg-light", "text-dark");
    }
    else {
        //markTile with player 1 symbol
        e.target.innerHTML = "❌";  //currentPlayersSymbol
        //add 1 to data index for this tile to indicate player 1 score at this tile.
        data[e.target.id]++;


        //if current player is player 1 increment currTurn to player 2
        currTurn++;
        //change style to player col's to reflect who's turn it is
        document.getElementById("playerOneCol").classList.remove("bg-dark", "text-light");
        document.getElementById("playerOneCol").classList.add("bg-light", "text-dark");

        document.getElementById("playerTwoCol").classList.remove("bg-light", "text-dark");
        document.getElementById("playerTwoCol").classList.add("bg-dark", "text-light");

    }

    //disables button from being able to double-play
    e.target.removeEventListener("click", click);

    //increment turnsTaken to tell win/tie function if it should run or not
    turnsTaken++;
    console.log(turnsTaken);

    //check for tie
    if (turnsTaken == 9) {
        document.getElementById("headerTitle").innerHTML = "Tie Game!";
    }

    //if this is turn 6 or greater, check for winner
    if (turnsTaken >= 5) {
        console.log("checking win");
        checkWin(data);
    }
}

//resetGame listener
function resetGame() {
    console.log("resetGame");
    //reset tile states to 0 but keep player names and symbols
    headerTitle.innerText = "Tic Tac Toe";

    //reset game metrics
    turnsTaken = 0;
    currTurn = 1;
    data = [0, 0, 0, 0, 0, 0, 0, 0, 0]

    //clear gametiles and add click handlers back to each tile
    for (let i = 0; i < 9; i++) {
        document.getElementById(i).innerHTML = "";
        document.getElementById(i).classList.remove("bg-success");
        document.getElementById(i).addEventListener("click", click);
    }

    //reset styles of player row to show player 1 turn
    document.getElementById("playerOneCol").classList.remove("bg-light", "text-dark");
    document.getElementById("playerOneCol").classList.add("bg-dark", "text-light");

    document.getElementById("playerTwoCol").classList.remove("bg-dark", "text-light");
    document.getElementById("playerTwoCol").classList.add("bg-light", "text-dark");
}

// //newGame listener
// function newGame() {
//     console.log("newGame");
//     resetGame;
//     //toggle modal, new names
//     //document.getElementById("playerModal").modal('show');
// }
