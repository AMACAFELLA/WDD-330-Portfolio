//Step 1
let turn = 0;
const player1 = 'X';
const player2 = 'O';
let player = player1;
//Step 3
const annoucement = document.querySelector('.annoucement');
const playerTurn = () => {`Player ${turn}'s turn`};

const gameBoard = document.getElementById("board");
// Step 2 Attach a touchend listener to the board
gameBoard.addEventListener('touchend', function(event) {
    //When a cell is touched it should add either an 'X or an 'O', depending on whether it is player 1 or player 2's turn.
    if (turn % 2) {
        event.target.innerHTML = 'X';
        event.target.style.color = 'red';
        turn++;   
    } else {
        event.target.innerHTML = 'O';
        event.target.style.color = 'blue';
        turn++;
    }
    //annouce the players turn
    annoucement.innerHTML = playerTurn();
    //check for a winner
    checkForWinner();
});
gameBoard.addEventListener('click', function(event){
    if (turn % 2 === 0) {
        event.target.innerHTML = 'X';
        event.target.style.color = 'red';
        turn++;
        annoucement.innerHTML = playerTurn();
    } else {
        event.target.innerHTML = 'O';
        event.target.style.color = 'blue';
        turn++;
        annoucement.innerHTML = playerTurn();
    }
})
//When touched the reset button should remove all of the marks from the board.
let resetButton = document.getElementById("reset");
resetButton.addEventListener('touchend', function() {
    let cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = '';
    }
    turn = 0;
});
resetButton.addEventListener('click', function() {
    let cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = '';
    }
    turn = 0;
});

//write a function to determine whose turn it is.
//check for a winner
const checkForWinner = () => {
    let cells = document.getElementsByClassName("cell");
    let winner = false;
    //check for horizontal win
    for (let i = 0; i < cells.length; i += 3) {
        if (cells[i].innerHTML === cells[i + 1].innerHTML && cells[i + 1].innerHTML === cells[i + 2].innerHTML && cells[i].innerHTML !== '') {
            winner = true;
            annoucement.innerHTML = `Player ${turn % 2 + 1} wins!`;
            gameBoard.removeEventListener('touchend', function(event) {});
        }
    }
    //check for vertical win
    for (let i = 0; i < 3; i++) {
        if (cells[i].innerHTML === cells[i + 3].innerHTML && cells[i + 3].innerHTML === cells[i + 6].innerHTML && cells[i].innerHTML !== '') {
            winner = true;
            annoucement.innerHTML = `Player ${turn % 2 + 1} wins!`;
            
        }
    }
    //check for diagonal win
    if (cells[0].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[8].innerHTML && cells[0].innerHTML !== '') {
        winner = true;
        annoucement.innerHTML = `Player ${turn % 2 + 1} wins!`;
        
    }
    if (cells[2].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[6].innerHTML && cells[2].innerHTML !== '') {
        winner = true;
        annoucement.innerHTML = `Player ${turn % 2 + 1} wins!`;
        
    }
    //check for a tie
    if (turn === 9 && winner === false) {
        annoucement.innerHTML = 'Tie!';
    }
};