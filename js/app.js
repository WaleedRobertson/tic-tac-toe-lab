





// //3) Upon loading, the game state should be initialized, and a function should 
// //   be called to render this game state.

// //4) The state of the game should be rendered to the user.

// //5) Define the required constants.

// //7) Create Reset functionality.



// /*-------------------------------- Constants --------------------------------*/
const squareEl = document.querySelector('.board');
const messageEl = document.querySelector('#message');
const squareOne = document.querySelector('#sqr-1');
const resetBtnEl = document.getElementById('reset');

squareOne.addEventListener ('click', event => {
 
})

const winningCombos = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6], ];

// // /*---------------------------- Variables (state) ----------------------------*/
let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
let turn = 'X';
let winner = false;
let tie = true;


// // /*------------------------ Cached Element References ------------------------*/


// // /*-------------------------------- Functions --------------------------------*/
function init() {
    board = ["", "", "", "", "", "", "", "", ""]; 
    turn = 'X';
    winner = false;
    tie = false; 
    render();
}

function handleClick(event) {
    const squareIndex = parseInt(event.target.id);
    if (board[squareIndex] === 'X' || board[squareIndex] === 'O' || winner === true) {
        return;
    }
    placePiece(squareIndex);
    checkForWinner();
    checkForTie();
    render();
    switchPlayerTurn();
    // Switch turns
    turn = turn === 'X' ? 'O' : 'X';
}

function placePiece(index) {
    board[index] = turn;
}

function checkForWinner() {
    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
            winner = true;
            return;
        }
    }
}

function checkForTie() {
    if (winner) {
        return;
    }
    tie = !board.includes('');
}

function switchPlayerTurn() {
    if (winner) {
        return;
    }
    turn = turn === 'X' ? 'O' : 'X';
}

function render() {
    updateBoard();
    updateMessage();
}


function updateBoard() {
    board.forEach((cellValue, index) => {
        const square = board[index];
        square.textContent = cellValue;
    })
}

function updateMessage() {

    if (!winner && !tie) {
        // Game is still in progress
        messageEl.textContent = (`It's X's turn.`);
    } 
    else if (!winner && tie) {
        // Game is a tie
        messageEl.textContent = ('It\'s a tie!');
    }
     else {
        // There is a winner
        messageEl.textContent = (`Congratulations! Player  has won.`);
    }
}

init(); 

resetBtnEl.addEventListener('click', function(event) {
    init();
});
// // Upon loading, the game state should be initialized, and a function should 
// // //   be called to render this game state.

// // //4) The state of the game should be rendered to the user.


// /*----------------------------- Event Listeners -----------------------------*/



