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
  let board = game.initGame();

  res.set("content-type", "application/json");
  res.send(board);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
