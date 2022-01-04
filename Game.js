/**
 *
 * @returns Array of inital board
 */
exports.initBoard = () => {
  const verticalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const horizontalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];

  // Make the board with starting pieces
  let initBoard = [];
  for (let i = 0; i < horizontalAxis.length; i++) {
    let innerArr = [];
    for (let j = 0; j < verticalAxis.length; j++) {
      let initPiece = `${verticalAxis[j]}${horizontalAxis[i]}`;
      let color = null;
      if (initPiece == "d4" || initPiece == "e5") {
        color = "light";
      } else if (initPiece == "d5" || initPiece == "e4") {
        color = "dark";
      }

      innerArr.push({ pos: initPiece, color, x: i, y: j });
    }
    initBoard.push(innerArr);
  }

  return initBoard;
};

exports.availableMovesForPlayer = (board, playerPieces) => {
  let moves = playerPieces.map((p) => {
    console.log(p);
    return findMove(p, board);
  });

  moves = [].concat(...moves);
  console.log("All avaliable moves");
  console.log(moves);

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      moves.forEach((m) => {
        if (m.pos == board[i][j].pos) {
          board[i][j] = m;
        }
      });
    }
  }
};

const findMove = (piece, board) => {
  let allMove = [];
  let { x, y } = piece;
  if (!isValidMove(x, y)) return;

  for (let delX = -1; delX <= 1; delX++) {
    for (let delY = -1; delY <= 1; delY++) {
      // Do not need to check same position
      if (delX == 0 && delY == 0) continue;
      // Out of the board
      if (!isValidMove(x + delX, y + delY)) continue;

      let newX = x + delX;
      let newY = y + delY;
      // console.log(`newX:${newX}, newY:${newY}`);
      let currPiece = board[newX][newY];
      // console.log(currPiece);
      let items = false;

      // Keep going in the direction until piece is empty or the same color of player turn
      while (
        isValidMove(newX, newY) &&
        currPiece.color != null &&
        currPiece.color != piece.color &&
        currPiece.color != "move"
      ) {
        newX += delX;
        newY += delY;
        currPiece = board[newX][newY];
        items = true;
      }

      if (items && currPiece.color == null) {
        currPiece.color = "move";
        allMove.push(currPiece);
      }
    }
  }
  return allMove;
};

/**
 *
 * @param {String} row
 * @param {String} col
 * @returns
 */
const isValidMove = (row, col) => {
  return row > 0 && row < 8 && col > 0 && col < 8;
};

exports.getPlayerTurn = (player) => {};

/**
 *
 * @param {Array} board
 * @param {String} player
 * @returns Array of filtered pieces
 */
exports.getPlayerPiecesOnBoard = (board, player) => {
  let filtered = [];
  board.forEach((t) => {
    t.forEach((b) => {
      if (b.color == player) filtered.push(b);
    });
  });
  return filtered;
};
