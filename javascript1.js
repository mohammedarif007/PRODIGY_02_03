const cells = document.querySelectorAll('.cell');
const resultDisplay = document.getElementById('result');

let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winPatterns = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6] // diagonals
];

function checkWinner() {
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      return gameState[a];
    }
  }
  if (!gameState.includes('')) return 'draw';
  return null;
}

function handleResult(result) {
  if (result === 'draw') {
    resultDisplay.innerText = 'It\'s a draw!';
  } else {
    resultDisplay.innerText = `${result} wins!`;
  }
  gameActive = false;
}

function makeMove(cellIndex) {
  if (!gameActive || gameState[cellIndex] !== '') return;
  gameState[cellIndex] = currentPlayer;
  cells[cellIndex].innerText = currentPlayer;
  const winner = checkWinner();
  if (winner) {
    handleResult(winner);
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function resetGame() {
  currentPlayer = 'X';
  gameActive = true;
  gameState = ['', '', '', '', '', '', '', '', ''];
  cells.forEach(cell => cell.innerText = '');
  resultDisplay.innerText = '';
}
