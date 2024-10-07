const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#Status");
const restartbtn = document.querySelector("#restartbtn");

const winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let option = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;
initalizeGame();
function initalizeGame() {

  
  cells.forEach((cell) => cell.addEventListener("click", cellClicked));
  restartbtn.addEventListener("click", restartGame);
  statusText.textContent = `${currentPlayer}'s turn`;
  running = true;
}

function cellClicked() {
   const cellIndex = this.getAttribute("cellIndex");


   if(option[cellIndex] != "" || !running){
    return;
   }
   updateCell(this,cellIndex)
   checkWinner()
   changePlayer(); 
}

function updateCell(cell, index) {
    option[index] = currentPlayer;
    cell.textContent=currentPlayer;
}
function changePlayer() {
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent=`${currentPlayer}'s turn`;
}

function checkWinner() {}

function restartGame() {}

