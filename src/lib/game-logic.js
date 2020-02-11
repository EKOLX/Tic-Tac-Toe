export function fieldIsEmpty(board, xCoordinate, yCoordinate) {
  return !board[xCoordinate][yCoordinate];
}

export function findWinner(board) {
  // Diagonal check first because of less time complexity
  // Left to right
  let player = board[0][0];
  for (
    let row = 1, col = 1;
    row < board.length && col < board.length;
    row++, col++
  ) {
    if (board[row][col] !== player) {
      break;
    }

    if (
      row === board.length - 1 &&
      col === board.length - 1 &&
      board[row][col] !== 0
    ) {
      return player;
    }
  }

  // Right to left
  player = board[0][board.length - 1];
  for (
    let row = 1, col = board.length - 1 - 1;
    row < board.length && col >= 0;
    row++, col--
  ) {
    if (board[row][col] !== player) {
      break;
    }

    if (row === board.length - 1 && col === 0 && board[row][col] !== 0) {
      return player;
    }
  }

  // Horizontal check
  for (let row = 0; row < board.length; row++) {
    player = board[row][0];
    for (let col = 1; col < board.length; col++) {
      if (board[row][col] !== player) {
        break;
      }

      if (col === board.length - 1 && board[row][col] !== 0) {
        return player;
      }
    }
  }

  // Vertical check
  for (let col = 0; col < board.length; col++) {
    player = board[0][col];
    for (let row = 1; row < board.length; row++) {
      if (board[row][col] !== player) {
        break;
      }

      if (row === board.length - 1 && board[row][col] !== 0) {
        return player;
      }
    }
  }

  return false;
}

export function hasEmptyFields(board) {
  for (let row of board) {
    for (let item of row) {
      if (!item) {
        return true;
      }
    }
  }
  return false;
}

export function getEmptyBoard(size = 3) {
  const board = [];
  for (let row = 0; row < size; row++) {
    const rows = [];
    for (let col = 0; col < size; col++) {
      rows.push(0);
    }
    board.push(rows);
  }

  return board;
}
