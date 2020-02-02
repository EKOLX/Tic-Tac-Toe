import { tripleEqual } from "./util";

export function fieldIsEmpty(board, xCoordinate, yCoordinate) {
  return !board[xCoordinate][yCoordinate];
}

export function findWinnerOld(board) {
  for (let i = 0; i < 3; i++) {
    // columns
    if (board[0][i] && tripleEqual(board[0][i], board[1][i], board[2][i])) {
      return board[0][i];
    }
    // rows
    if (board[i][0] && tripleEqual(board[i][0], board[i][1], board[i][2])) {
      return board[i][0];
    }
  }
  // diagonals
  if (board[0][0] && tripleEqual(board[0][0], board[1][1], board[2][2])) {
    return board[0][0];
  }
  if (board[0][2] && tripleEqual(board[0][2], board[1][1], board[2][0])) {
    return board[0][2];
  }

  return false;
}

export function findWinner(board) {
  // Horizontal check
  for (let row = 0; row < board.length; row++) {
    const player = board[row][0];
    for (let col = 1; col < board.length; col++) {
      if (board[row][col] !== player) {
        break;
      }

      if (col === board.length - 1) {
        return player;
      }
    }
  }

  // Vertical check
  for (let col = 0; col < board.length; col++) {
    const player = board[0][col];
    for (let row = 1; row < board.length; row++) {
      if (board[row][col] !== player) {
        break;
      }

      if (row === board.length - 1) {
        return player;
      }
    }
  }

  // Diagonal check
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

    if (row === board.length - 1 && col === board.length - 1) {
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

    if (row === board.length - 1 && col === 0) {
      return player;
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
