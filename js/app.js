//1) Define the required variables used to track the state of the game.
//let board
//let turn
//let winner
//let tie
//2) Store cached element references.
const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.querySelector('#message')

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

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
// let turn = X;
let winner = false;
let tie = false;


/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/
function handleClick(event) {
}

squareEls.addEventListener('click', event => {
   
    const squareIndex = parseInt(event.target.id);

if ((board[squareIndex === 'X' || 'O']) || (winner = true)){
    return; 
}






})
// function init() {

// }



// c. In the updateBoard function, loop over board and for each element:

// Use the current index of the iteration to access the corresponding square in the squareEls.
// Style that square however you wish, dependent on the value contained in the current cell being 
// iterated over ('X', 'O', or ''). To keep it simple, 
// start by just putting a letter in each square depending on the value of each cell.
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







/*----------------------------- Event Listeners -----------------------------*/



