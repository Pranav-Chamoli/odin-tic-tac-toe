//Factory function to create a player
function Player(name, marker) {
  return { name, marker }; //Object short hand used here, i.e return {name:name, marker:marker}
}

//Module to create a gameBoard
const Gameboard = (() => {
  const board = ["", "", "", "", "", "", "", "", ""];

  //Exposes the board while keeping the board variable private
  const getBoard = () => board;

  //Updates the board at the specified position
  const placeMark = (index, marker) => {
    board[index] = marker;
  };

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = () => {
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] === board[b] && board[b] === board[c] && board[a] !== "") {
        return board[a];
      }
    }
    return null;
  };

  const checkTie = () => {
    if (checkWinner() || board.includes("")) {
      return false;
    }
    return true;

    // or it could be written as return !checkWinner() && !board.includes("");
  };

  const isSquareEmpty = (index) => {
    return board[index] === "";
  };

  //Public API
  return { getBoard, placeMark, checkWinner, checkTie, isSquareEmpty };
})();

//Module to create the gameController
const GameController = (() => {
  const player1 = Player("Pranav", "X");
  const player2 = Player("Piyush", "O");

  let currentPlayer = player1;
  let gameOver = false;
  const isGameOver = () => gameOver;
  let winner = null;
  const getWinner = () => winner;

  //Exposes the currentPlayer keeping the currentPlayer variable private
  const getCurrentPlayer = () => currentPlayer;

  //Updates currentPlayer
  const switchPlayer = () => {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  };

  const playRound = (index) => {
    if (gameOver) {
      return;
    }
    if (!Gameboard.isSquareEmpty(index)) {
      return;
    }
    const marker = currentPlayer.marker;
    Gameboard.placeMark(index, marker);
    winner = Gameboard.checkWinner();
    if (winner) {
      gameOver = true;
      return;
    }
    if (Gameboard.checkTie()) {
      gameOver = true;
      return;
    }
    switchPlayer();
  };

  return { getCurrentPlayer, playRound, isGameOver, getWinner };
})();

console.log(Gameboard.getBoard());

Gameboard.placeMark(0, "X");

console.log(Gameboard.getBoard());
