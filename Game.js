/**
 *
 * @returns Array of inital board
 */
exports.initBoard = () => {
  const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];

  // Make the board with starting pieces
  let initBoard = [];
  for (let i = 0; i < verticalAxis.length; i++) {
    let innerArr = [];
    for (let j = 0; j < horizontalAxis.length; j++) {
      let initPiece = `${horizontalAxis[j]}${verticalAxis[i]}`;
      let color = null;
      if (initPiece == "d4" || initPiece == "e5") {
        color = "light";
      } else if (initPiece == "d5" || initPiece == "e4") {
        color = "dark";
      }

      innerArr.push({ pos: initPiece, color, x: j, y: i });
    }
    initBoard.push(innerArr);
  }

  return initBoard;
};

exports.findMoves = (board, playerPieces) => {
  playerPieces.forEach((p) => {
    let piece = board.find((t) => t.color == p.color && t.pos == p.pos);
  });
};

const move = (board, piece, moves, x, y) => {
  let temp = [];

  /**
   *  Cannot make a move if
   *  - tile has the opposite color of the current player
   *
   *  Can make a move if
   *  - tile is empty and is in the row, column, or diagonal
   *
   */

  // can make a move
  if (piece.color == null) {
    return piece;
  }

  //cannot make a move
  // Go up
};
exports.getPlayerTurn = (player) => {};

/**
 *
 * @param {Array} board
 * @param {String} player
 * @returns Array of filtered pieces
 */
exports.getPlayerPiecesOnBoard = (board, player) => {
  return board.filter((t) => t.color == player);
};
