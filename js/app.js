



const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.querySelector('#message')

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//7) Create Reset functionality.



/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6]  // Diagonal from top-right to bottom-left
];



/*---------------------------- Variables (state) ----------------------------*/
let board = ["", "", "", "", "", "", "", "", ""]
let turn = X;
let winner = false;
let tie = true;


/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/

function handleClick(event) {
    const squareIndex = parseInt(event.target.id);

    if (board[squareIndex] === 'X' || board[squareIndex] === 'O' || winner === true) {
        return;
    }

    placePiece(squareIndex);
    checkForWinner();
    checkForTie(); 
switchPlayerTurn();
    render();

    // Switch turns
    turn = turn === 'X' ? 'O' : 'X';
}

function checkForTie() {
    if (winner) {
        return;
    }

    tie = !board.includes('');
}
// function init() {

// }


function render() {
    updateBoard();
    updateMessage();
}

render()

function updateBoard() {
    board.forEach((cellValue, index) => {
        const square = squareEls[index];
        square.textContent = cellValue;
    })
}

function updateMessage() {
    const messageEl = document.getElementById('message');

    if (!winner && !tie) {
        // Game is still in progress
        messageEl.textContent = `It's 's turn.`;
    } else if (!winner && tie) {
        // Game is a tie
        messageEl.textContent = 'It\'s a tie!';
    } else {
        // There is a winner
        messageEl.textContent = `Congratulations! Player  has won.`;

    }
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

function placePiece(index) {
    board[index] = turn;

}

function switchPlayerTurn() {
    if (winner) {
        return;
    }

    turn = turn === 'X' ? 'O' : 'X';
}



/*----------------------------- Event Listeners -----------------------------*/



