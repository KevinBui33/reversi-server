exports.initGame = () => {
  const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];

  let initBoard = [];
  verticalAxis.forEach((v) => {
    horizontalAxis.forEach((h) => {
      let initPiece = `${h}${v}`;
      let color = null;
      if (initPiece == "d4" || initPiece == "e5") {
        color = "light";
      } else if (initPiece == "d5" || initPiece == "e4") {
        color = "dark";
      }

      initBoard.push({ pos: initPiece, color });
    });
  });
  return initBoard;
};
