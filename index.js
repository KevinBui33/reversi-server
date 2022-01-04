const express = require("express");
const cors = require("cors");
const game = require("./Game");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/init", (req, res) => {
  console.log("Getting init board");
  let turn = "dark";

  // Get the starting board (no moves that can be found)
  let board = game.initBoard();

  console.log("Getting the players pieces on the board");
  // Get the pieces on the board by player
  let darkPieces = game.getPlayerPiecesOnBoard(board, turn);
  let lightPieces = game.getPlayerPiecesOnBoard(board, "light");
  // Find the moves a player can make
  console.log("finding the available moves");
  game.availableMovesForPlayer(board, darkPieces);

  // Set the scores and player who starts
  res.set("content-type", "application/json");
  res.send({ board, darkPieces, lightPieces, turn });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
