//variables

    //playerOne : name , symbol
    //playerTwo : name , symbol
    //symbolOptions : [];
    //currTurn
    //gameTiles  {0: border bottom and right, state: 0
    //            1: border left bottom and right, state: 0
    //            2: border left and bottom, state: 0
    //            3: border top right and bottom, state: 0
    //            4: border all, state: 0
    //            5: border top left and bottom, state: 0
    //            6: border top and right, state: 0
    //            7: border left top and right, state: 0
    //            8: border left and top, state: 0}
    //turnsTaken  
    //state 0 = ""
    //state 1 = playerOne.symbol
    //state 2 = playerTwo.symbol
    //

//functions

//init {
    //generate base level rows (#header, #info, #gameboard, #footer)
    //generate column level elements into respective rows #header, #info, #gameboard, #footer
    //generate atom level title, player1Box, player2Box, gameTiles, newGameBtn, resetBtn
    //generate click listeners to game tiles and buttons
    //run Modal
}

//generateElement(){
    //create element
    //set attribute
    //append to parent
}

//modal to receive player names and symbol selections <--IN HTML
    //playerOne name input, symbol input (default ❌)
    //playerTwo name input, symbol input (default ⭕️)

//ON PLAY BUTTON CLICK
//populate player boxes with the names and symbols
    //set player1Name = player1.name.value and player2Name = player2.name.value
    //set tileState1 = player1.symbol and tileState2 = player2.symbol
    //exit MODAL

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
    //re-init, new names and symbol selection
    //flip first turn to whoever went second during previous game

//resetGame
    //reset tile states but keep player names and symbols
    //flip first turn to whoever went second during previous game