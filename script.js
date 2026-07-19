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

  const reset = () => {
    board.forEach((_, index) => {
      board[index] = "";
    });
  };

  //Public API
  return { getBoard, placeMark, checkWinner, checkTie, isSquareEmpty, reset };
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

  const reset = () => {
    Gameboard.reset();
    currentPlayer = player1;
    gameOver = false;
    winner = null;
  };

  return { getCurrentPlayer, playRound, isGameOver, getWinner, reset };
})();

const DisplayController = (() => {
  const status = document.querySelector(".status");
  const resetButton = document.querySelector(".reset-button");
  const cells = document.querySelectorAll(".cell");

  const renderBoard = () => {
    const board = Gameboard.getBoard();
    cells.forEach((cell, index) => {
      cell.textContent = board[index];
    });
  };

  const updateStatus = () => {
    if (!GameController.isGameOver()) {
      status.textContent = `Player ${GameController.getCurrentPlayer().marker}'s turn`;
    } else if (GameController.getWinner()) {
      status.textContent = `Player ${GameController.getWinner()} won!`;
    } else {
      status.textContent = "It's a tie";
    }
  };

  const bindEvents = () => {
    cells.forEach((cell) => {
      cell.addEventListener("click", () => {
        const index = Number(cell.dataset.index);
        GameController.playRound(index);
        render();
      });
    });

    resetButton.addEventListener("click", () => {
      GameController.reset();
      render();
    });
  };

  const render = () => {
    renderBoard();
    updateStatus();
  };

  bindEvents();
  render();
})();
