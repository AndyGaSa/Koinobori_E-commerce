let restart = document.getElementById("restart");
let twoPlayers = document.getElementById("twoPlayers");
let cpuButton = document.getElementById("vsCPU");
let blur = document.getElementById("winLose");
let gameModeText = document.getElementById("gameMode");

restart.addEventListener("click", restartButton);
twoPlayers.addEventListener("click", playForTwo);
cpuButton.addEventListener("click", vsCPU);

//---------INTERFACE--------//

const rows = 6;
const columns = 7;
let gameArray = [];

function createArray() {
  for (let i = 0; i < rows; i++) {
    gameArray.push([]);
    for (let j = 0; j < columns; j++) {
      gameArray[i].push(parseInt(`${j}`));
    }
  }
  return;
}
function gameDrawing(arr = []) {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      paintHTML(String(i) + String(j));
    }
  }
  return;
}
function paintHTML(objectID) {
  board.innerHTML += `<div class="boardPart" id="boardPart${objectID}"></div>\n`;
  boardBack.innerHTML += `<div class="boardPartBack" id="boardBack${objectID}"></div>\n`;
  chips.innerHTML += `<div class="chip" id="chip${objectID}"></div>\n`;
  buttons.innerHTML += `<div class="button" id="${objectID}"></div>\n`;

  let checkPiece = document.getElementById(`boardPart${objectID}`);
  let checkPieceBack = document.getElementById(`boardBack${objectID}`);

  if (objectID == `${"00"}`) {
    checkPiece.classList.add("borderRadLeft");
    checkPieceBack.classList.add("borderRadLeft");
  }
  if (objectID == `${0}${columns - 1}`) {
    checkPiece.classList.add("borderRadRight");
    checkPieceBack.classList.add("borderRadRight");
  }
}
function addButtons() {
  let buttonsArray = Array.from(document.getElementsByClassName("buttons"));
  buttonsArray.forEach((element) => {
    element.addEventListener("click", userClick);
  });
}

//---------USER PLAY---------//

function userClick(event) {
  if (event.target.id === "board") {
    return;
  }
  let targetID = event.target.id;
  userChoice(targetID);
}
function userChoice(targetID) {
  if (CPUWins) {
    return;
  }
  if (gameMode !== "vsCPU" || currentTurn === 0) {
    let colNumber = parseInt(targetID[1]);
    let rowNumber = checkBelowEmpty(gameArray, colNumber);
    if (rowNumber === undefined) {
      return;
    }
    gameArray[rowNumber][colNumber] = turns[currentTurn];
    chipPrint(`${rowNumber}${colNumber}`, turns[currentTurn]);
    played = true;
    checkWin(rowNumber, colNumber);
    changeTurn(currentTurn);
    if (playerWins) {
      return;
    }
    if (gameMode === "vsCPU") {
      return window.setTimeout(CPUclick, 1000);
    }
  }
  return gameArray;
}

//---------TURN MECHANISM---------//

let turns = ["P", "C"];
let currentTurn = 0;
let gameMode = "vsPlayer";
let played = true;

function nextCheckValues() {
  winCount = 0;
  loopCount = 1;
  checkAgainP = true;
  checkAgainC = true;
  ptsRowP = 0;
  ptsRowC = 0;
  ptsColP = 0;
  ptsColC = 0;
  ArrPChips = [];
  ArrCChips = [];
  return;
}
function changeTurn(turnEntry) {
  nextTurnValues();
  if (played === true) {
    played = false;
    currentTurn = (currentTurn + 1) % 2;
    return;
  } else {
    turn = turnEntry;
    return;
  }
}
function nextTurnValues() {
  ptsDiagAP = 0;
  ptsDiagAC = 0;
  ptsDiagBP = 0;
  ptsDiagBC = 0;
  winnerChipsRow = [];
  winnerChipsCol = [];
  winnerChipsDiagA = [];
  winnerChipsDiagB = [];
  checkRowCPoints = [];
  checkRowPPoints = [];
  checkColCPoints = [];
  checkColPPoints = [];
  checkDiagACPoints = [];
  checkDiagAPPoints = [];
  checkDiagBCPoints = [];
  checkDiagBPPoints = [];
  finalSelectionCPU = [0, 0, 0, 0, 0, 0, 0];
  return;
}

//---------WIN OR LOSE---------//

let playerWins = false;
let CPUWins = false;
let winnerRowCPU = [];
let winnerColCPU = [];
let winnerDiagACPU = [];
let winnerDiagBCPU = [];
let winnerRowPlayer = [];
let winnerColPlayer = [];
let winnerDiagAPlayer = [];
let winnerDiagBPlayer = [];

function win() {
  paintWinnerChips(winnerRowPlayer);
  paintWinnerChips(winnerColPlayer);
  paintWinnerChips(winnerDiagAPlayer);
  paintWinnerChips(winnerDiagBPlayer);
  winnerRowPlayer = [];
  winnerColPlayer = [];
  winnerDiagAPlayer = [];
  winnerDiagBPlayer = [];
  blur.classList.remove("blurOff");
  if (gameMode === "vsCPU") {
    winLose.innerHTML += `<h2 id="youWin">YOU <br> WIN</h2>`;
  } else {
    winLose.innerHTML += `<h2 id="youWin">PLAYER 1 <br> WIN</h2>`;
  }

  return;
}
function lose() {
  paintWinnerChips(winnerRowCPU);
  paintWinnerChips(winnerColCPU);
  paintWinnerChips(winnerDiagACPU);
  paintWinnerChips(winnerDiagBCPU);
  winnerRowPlayer = [];
  winnerColPlayer = [];
  winnerDiagAPlayer = [];
  winnerDiagBPlayer = [];
  blur.classList.remove("blurOff");
  if (gameMode === "vsCPU") {
    winLose.innerHTML = `<h2 id="youLose">YOU <br> LOSE</h2>`;
  } else {
    winLose.innerHTML = `<h2 id="youLose">PLAYER 2 <br> WIN</h2>`;
  }
  return;
}
function paintWinnerChips(arr = []) {
  for (let i = 0; i < arr.length; i++) {
    let row = parseInt(arr[i][0]);
    let column = parseInt(arr[i][1]);
    gameArray[row][column] = "W";
    let chipDOM = document.getElementById(`chip${row}${column}`);
    if (chipDOM.classList.contains("PChip")) {
      chipDOM.classList.remove("PChip");
      chipDOM.classList.add("fakePChip");
      chipDOM.classList.add("winnerChip");
    } else if (chipDOM.classList.contains("CChip")) {
      chipDOM.classList.remove("CChip");
      chipDOM.classList.add("fakeCChip");
      chipDOM.classList.add("winnerChip");
    }
  }
}

//---------GAME MODES---------//

function restartGame() {
  gameArray = [];
  gameArray = [];
  gameMode = "vsPlayer";
  createArray();
  clearChips("P");
  clearChips("C");
  clearChips("W");
  clearButtons();
  currentTurn = 0;
  played = true;
  winCount = 0;
  loopCounter = 1;
  winnerChipsRow = [];
  winnerChipsCol = [];
  winnerChipsDiagA = [];
  winnerChipsDiagB = [];

  if (playerWins) {
    let winMessage = document.getElementById("youWin");
    winMessage.outerHTML = "";
  }
  if (CPUWins) {
    let loseMessage = document.getElementById("youLose");
    loseMessage.outerHTML = "";
  }
  CPUWins = false;
  playerWins = false;
}
function playForTwo() {
  twoPlayers.classList.add("displaceLeft2P");
  cpuButton.classList.add("displaceLeftCPU");
  restart.classList.add("displaceRightRestart");
  cpuButton.classList.remove("fallCPU");
  cpuButton.classList.remove("displaceRightCPU");
  twoPlayers.classList.remove("fall2P");
  twoPlayers.classList.remove("displaceRight2P");
  restart.classList.remove("displaceLeftRestart");
  blur.classList.remove("blurOn");
  blur.classList.add("blurOff");
  gameModeText.innerHTML = "CONECTA 4 <br> Player vs Player";
  restartGame();
}
function vsCPU() {
  twoPlayers.classList.remove("fall2P");
  twoPlayers.classList.remove("displaceRight2P");
  twoPlayers.classList.add("displaceLeft2P");
  cpuButton.classList.remove("fallCPU");
  cpuButton.classList.remove("displaceRightCPU");
  cpuButton.classList.add("displaceLeftCPU");
  restart.classList.remove("displaceLeftRestart");
  restart.classList.add("displaceRightRestart");
  blur.classList.remove("blurOn");
  blur.classList.add("blurOff");
  gameModeText.innerHTML = "CONECTA 4 <br> Player vs CPU";
  restartGame();
  gameMode = "vsCPU";
}
function restartButton() {
  twoPlayers.classList.remove("displaceLeft2P");
  twoPlayers.classList.add("displaceRight2P");
  cpuButton.classList.remove("displaceLeftCPU");
  cpuButton.classList.add("displaceRightCPU");
  restart.classList.remove("displaceRightRestart");
  restart.classList.add("displaceLeftRestart");
  blur.classList.add("blurOn");
  blur.classList.remove("blurOff");
  gameModeText.innerHTML = "CONECTA 4 <br> Menu";
  restartGame();
}
function clearChips(objective) {
  let chips = Array.from(document.getElementsByClassName(`${objective}Chip`));
  chips.forEach((element) => {
    element.classList.remove(`${objective}Chip`);
    element.classList.add("chip");
  });
  let winchips = Array.from(document.getElementsByClassName(`winnerChip`));
  winchips.forEach((element) => {
    element.classList.remove(`fakeCChip`);
    element.classList.remove(`fakePChip`);
    element.classList.remove(`winnerChip`);
    element.classList.add("chip");
  });
}
function clearButtons() {
  let buttonsArr = Array.from(document.getElementsByClassName(`buttonOff`));
  buttonsArr.forEach((element) => {
    element.classList.add("button");
    element.classList.remove("buttonOff");
  });
}

//--------START CPU BRAIN-----------//
function CPUclick() {
  for (let i = 0; i < columns; i++) {
    CPUChoice(i);
  }
  return sortCPUOptions();
}
function sortCPUOptions() {
  for (let i = 0; i < columns; i++) {
    for (let score = 7; score > 0; score--) {
      if (checkRowCPoints[i] === score) {
        switch (score) {
          case 2:
            if (finalSelectionCPU[i] < 16) {
              finalSelectionCPU[i] = 16;
            }
            break;
          case 3:
            if (finalSelectionCPU[i] < 18) {
              finalSelectionCPU[i] = 18;
            }
            break;
          case 4:
            if (finalSelectionCPU[i] < 20) {
              finalSelectionCPU[i] = 20;
            }
            break;
          default:
            if (finalSelectionCPU[i] < 15) {
              finalSelectionCPU[i] += Math.round(checkRowCPoints[i] / 3);
            }
        }
      }
      if (checkRowPPoints[i] === score) {
        switch (score) {
          case 2:
            if (finalSelectionCPU[i] < 17) {
              finalSelectionCPU[i] = 17;
            }
            break;
          case 3:
            if (finalSelectionCPU[i] < 19) {
              finalSelectionCPU[i] = 19;
            }
            break;
          default:
            if (finalSelectionCPU[i] < 15) {
              finalSelectionCPU[i] += Math.round(checkRowCPoints[i] / 3);
            }
        }
      }
      if (checkColCPoints[i] === score) {
        switch (score) {
          case 2:
            if (finalSelectionCPU[i] < 16) {
              finalSelectionCPU[i] = 16;
            }
            break;
          case 3:
            if (finalSelectionCPU[i] < 18) {
              finalSelectionCPU[i] = 18;
            }
            break;
          case 4:
            if (finalSelectionCPU[i] < 20) {
              finalSelectionCPU[i] = 20;
            }
            break;
          default:
            if (finalSelectionCPU[i] < 15) {
              finalSelectionCPU[i] += Math.round(checkRowCPoints[i] / 3);
            }
        }
      }
      if (checkColPPoints[i] === score) {
        switch (score) {
          case 2:
            if (finalSelectionCPU[i] < 17) {
              finalSelectionCPU[i] = 17;
            }
            break;
          case 3:
            if (finalSelectionCPU[i] < 19) {
              finalSelectionCPU[i] = 19;
            }
            break;
          default:
            if (finalSelectionCPU[i] < 15) {
              finalSelectionCPU[i] += Math.round(checkRowCPoints[i] / 3);
            }
        }
      }
      if (checkDiagACPoints[i] === score) {
        switch (score) {
          case 2:
            if (finalSelectionCPU[i] < 16) {
              finalSelectionCPU[i] = 16;
            }
            break;
          case 3:
            if (finalSelectionCPU[i] < 18) {
              finalSelectionCPU[i] = 18;
            }
            break;
          case 4:
            if (finalSelectionCPU[i] < 20) {
              finalSelectionCPU[i] = 20;
            }
            break;
          default:
            if (finalSelectionCPU[i] < 15) {
              finalSelectionCPU[i] += Math.round(checkRowCPoints[i] / 3);
            }
        }
      }
      if (checkDiagAPPoints[i] === score) {
        switch (score) {
          case 2:
            if (finalSelectionCPU[i] < 17) {
              finalSelectionCPU[i] = 17;
            }
            break;
          case 3:
            if (finalSelectionCPU[i] < 19) {
              finalSelectionCPU[i] = 19;
            }
            break;
          default:
            if (finalSelectionCPU[i] < 15) {
              finalSelectionCPU[i] += Math.round(checkRowCPoints[i] / 3);
            }
        }
      }
      if (checkDiagBCPoints[i] === score) {
        switch (score) {
          case 2:
            if (finalSelectionCPU[i] < 16) {
              finalSelectionCPU[i] = 16;
            }
            break;
          case 3:
            if (finalSelectionCPU[i] < 18) {
              finalSelectionCPU[i] = 18;
            }
            break;
          case 4:
            if (finalSelectionCPU[i] < 20) {
              finalSelectionCPU[i] = 20;
            }
            break;
          default:
            if (finalSelectionCPU[i] < 15) {
              finalSelectionCPU[i] += Math.round(checkRowCPoints[i] / 3);
            }
        }
      }
      if (checkDiagBPPoints[i] === score) {
        switch (score) {
          case 2:
            if (finalSelectionCPU[i] < 17) {
              finalSelectionCPU[i] = 17;
            }
            break;
          case 3:
            if (finalSelectionCPU[i] < 19) {
              finalSelectionCPU[i] = 19;
            }
            break;
          default:
            if (finalSelectionCPU[i] < 15) {
              finalSelectionCPU[i] += Math.round(checkRowCPoints[i] / 3);
            }
        }
      }
    }
  }
  return finalChoiceCPU();
}
function CPUChoice(colNumber) {
  let rowNumber = checkBelowEmpty(gameArray, colNumber);

  if (rowNumber === undefined) {
    checkRowCPoints.push(0);
    checkRowPPoints.push(0);
    checkColCPoints.push(0);
    checkColPPoints.push(0);
    checkDiagACPoints.push(0);
    checkDiagAPPoints.push(0);
    checkDiagBCPoints.push(0);
    checkDiagBPPoints.push(0);
    return;
  } else {
    checkWin(rowNumber, colNumber);

    return;
  }
}
function finalChoiceCPU() {
  for (let i = 22; i > 2; i--) {
    if (finalSelectionCPU.indexOf(i) !== -1) {
      return CPUPlay(finalSelectionCPU.indexOf(i));
    }
  }
  let colNumber = Math.floor(Math.random() * columns);
  return CPUPlay(colNumber);
}
function CPUPlay(colNumber) {
  let rowNumber = checkBelowEmpty(gameArray, colNumber);
  gameArray[rowNumber][colNumber] = turns[currentTurn];
  chipPrint(`${rowNumber}${colNumber}`, turns[currentTurn]);
  played = true;
  checkWin(rowNumber, colNumber);

  changeTurn(currentTurn);
  nextTurnValues();

  return gameArray;
}

//----------- CHECK VALUES--------------------//

let winCount = 0;
let loopCount = 1;
let checkAgainP = true;
let checkAgainC = true;
let ptsRowP = 0;
let ptsRowC = 0;
let ptsColP = 0;
let ptsColC = 0;
let ptsDiagAP = 0;
let ptsDiagAC = 0;
let ptsDiagBP = 0;
let ptsDiagBC = 0;
let ArrPChips = [];
let ArrCChips = [];

let checkRowCPoints = [];
let checkRowPPoints = [];
let checkColCPoints = [];
let checkColPPoints = [];
let checkDiagACPoints = [];
let checkDiagAPPoints = [];
let checkDiagBCPoints = [];
let checkDiagBPPoints = [];
let finalSelectionCPU = [0, 0, 0, 0, 0, 0, 0];

function checkBelowEmpty(arr, col) {
  for (let rowNumber = rows; rowNumber > 0; rowNumber--) {
    if (arr[rowNumber - 1].indexOf(col) !== -1) {
      return rowNumber - 1;
    }
  }
  return;
}
function chipPrint(elementID, turn) {
  let clickedChip = document.getElementById(`chip${elementID}`);
  let clickedButton = document.getElementById(`${elementID}`);
  clickedChip.classList.remove("chip");
  clickedChip.classList.add(turn + "Chip");
  clickedButton.classList.remove("button");
  clickedButton.classList.add("buttonOff");
  return;
}
function checkWin(row, column) {
  nextCheckValues();
  checkPointsRow(row, column);
  if (ptsRowP >= 4 && currentTurn === 0) {
    playerWins = true;
  }
  if (ptsRowC >= 4 && currentTurn === 1) {
    CPUWins = true;
  }
  nextCheckValues();
  checkPointsCol(row, column);
  if (ptsColP >= 4 && currentTurn === 0) {
    playerWins = true;
  }
  if (ptsColC >= 4 && currentTurn === 1) {
    CPUWins = true;
  }
  nextCheckValues();
  checkPointsDiagA(row, column);
  if (ptsDiagAP >= 4 && currentTurn === 0) {
    playerWins = true;
  }
  if (ptsDiagAC >= 4 && currentTurn === 1) {
    CPUWins = true;
  }
  nextCheckValues();
  checkPointsDiagB(row, column);
  if (ptsDiagBP >= 4 && currentTurn === 0) {
    playerWins = true;
  }
  if (ptsDiagBC >= 4 && currentTurn === 1) {
    CPUWins = true;
  }
  if (playerWins) {
    return window.setTimeout(win, 1000);
  }
  if (CPUWins) {
    return window.setTimeout(lose, 1000);
  }
}
function addPointsIfNext(row, firstOp, col, secondOp, turn, arrPush) {
  let totalRow;
  let totalCol;
  if (firstOp === "plus") {
    totalRow = row + loopCount;
  } else if (firstOp === "minus") {
    totalRow = row - loopCount;
  } else {
    totalRow = row;
  }
  if (totalRow > rows - 1 || totalRow < 0) {
    return;
  }
  if (secondOp === "plus") {
    totalCol = col + loopCount;
  } else if (secondOp === "minus") {
    totalCol = col - loopCount;
  } else {
    totalCol = col;
  }

  if (gameArray[totalRow][totalCol] === turn) {
    arrPush.push(`${totalRow}${totalCol}`);
    if (turn === "P") {
      checkAgainP = true;
    } else {
      checkAgainC = true;
    }
  }
  return;
}
function checkPointsRow(row, col) {
  if (checkAgainP === true) {
    checkAgainP = false;
    addPointsIfNext(row, "none", col, "plus", "P", ArrPChips);
  }
  if (checkAgainC === true) {
    checkAgainC = false;
    addPointsIfNext(row, "none", col, "plus", "C", ArrCChips);
  }
  if (checkAgainP === true || checkAgainC === true) {
    loopCount++;
    return checkPointsRow(row, col);
  } else {
    loopCount = 1;
    checkAgainP = true;
    checkAgainC = true;
    return checkPointsRowReverse(row, col);
  }
}
function checkPointsRowReverse(row, col) {
  if (checkAgainP === true) {
    checkAgainP = false;
    addPointsIfNext(row, "none", col, "minus", "P", ArrPChips);
  }
  if (checkAgainC === true) {
    checkAgainC = false;
    addPointsIfNext(row, "none", col, "minus", "C", ArrCChips);
  }
  if (checkAgainP === true || checkAgainC === true) {
    loopCount++;
    return checkPointsRowReverse(row, col);
  } else {
    if (currentTurn === 0) {
      ArrPChips.push(`${row}${col}`);
      if (ArrPChips.length >= 4) {
        winnerRowPlayer = ArrPChips;
      }
    } else {
      ArrCChips.push(`${row}${col}`);
      checkRowCPoints.push(ArrCChips.length);
      checkRowPPoints.push(ArrPChips.length);
      if (ArrCChips.length >= 4) {
        winnerRowCPU = ArrCChips;
      }
    }
    ptsRowC = ArrCChips.length;
    ptsRowP = ArrPChips.length;
    loopCount = 1;
    return;
  }
}
function checkPointsCol(row, col) {
  if (checkAgainP === true) {
    checkAgainP = false;
    addPointsIfNext(row, "plus", col, "none", "P", ArrPChips);
  }
  if (checkAgainC === true) {
    checkAgainC = false;
    addPointsIfNext(row, "plus", col, "none", "C", ArrCChips);
  }
  if (checkAgainP === true || checkAgainC === true) {
    loopCount++;
    return checkPointsCol(row, col);
  } else {
    if (currentTurn === 0) {
      ArrPChips.push(`${row}${col}`);
      if (ArrPChips.length >= 4) {
        winnerColPlayer = ArrPChips;
      }
    } else {
      ArrCChips.push(`${row}${col}`);
      checkColCPoints.push(ArrCChips.length);
      checkColPPoints.push(ArrPChips.length);
      if (ArrCChips.length >= 4) {
        winnerColCPU = ArrCChips;
      }
    }
    ptsColC = ArrCChips.length;
    ptsColP = ArrPChips.length;
    checkAgain = false;
    loopCount = 1;
    return;
  }
}
function checkPointsDiagA(row, col) {
  if (checkAgainP === true) {
    checkAgainP = false;
    addPointsIfNext(row, "plus", col, "plus", "P", ArrPChips);
  }
  if (checkAgainC === true) {
    checkAgainC = false;
    addPointsIfNext(row, "plus", col, "plus", "C", ArrCChips);
  }
  if (checkAgainP === true || checkAgainC === true) {
    loopCount++;
    return checkPointsDiagA(row, col);
  } else {
    loopCount = 1;
    checkAgainP = true;
    checkAgainC = true;
    return checkPointsDiagAReverse(row, col);
  }
}
function checkPointsDiagAReverse(row, col) {
  if (checkAgainP === true) {
    checkAgainP = false;
    addPointsIfNext(row, "minus", col, "minus", "P", ArrPChips);
  }
  if (checkAgainC === true) {
    checkAgainC = false;
    addPointsIfNext(row, "minus", col, "minus", "C", ArrCChips);
  }
  if (checkAgainP === true || checkAgainC === true) {
    loopCount++;
    return checkPointsDiagAReverse(row, col);
  } else {
    if (currentTurn === 0) {
      ArrPChips.push(`${row}${col}`);
      if (ArrPChips.length >= 4) {
        winnerDiagAPlayer = ArrPChips;
      }
    } else {
      ArrCChips.push(`${row}${col}`);
      checkDiagACPoints.push(ArrCChips.length);
      checkDiagAPPoints.push(ArrPChips.length);
      if (ArrCChips.length >= 4) {
        winnerDiagACPU = ArrCChips;
      }
    }
    ptsDiagAC = ArrCChips.length;
    ptsDiagAP = ArrPChips.length;
    loopCount = 1;
    return;
  }
}
function checkPointsDiagB(row, col) {
  if (checkAgainP === true) {
    checkAgainP = false;
    addPointsIfNext(row, "minus", col, "plus", "P", ArrPChips);
  }
  if (checkAgainC === true) {
    checkAgainC = false;
    addPointsIfNext(row, "minus", col, "plus", "C", ArrCChips);
  }
  if (checkAgainP === true || checkAgainC === true) {
    loopCount++;
    return checkPointsDiagB(row, col);
  } else {
    loopCount = 1;
    checkAgainP = true;
    checkAgainC = true;
    return checkPointsDiagBReverse(row, col);
  }
}
function checkPointsDiagBReverse(row, col) {
  if (checkAgainP === true) {
    checkAgainP = false;
    addPointsIfNext(row, "plus", col, "minus", "P", ArrPChips);
  }
  if (checkAgainC === true) {
    checkAgainC = false;
    addPointsIfNext(row, "plus", col, "minus", "C", ArrCChips);
  }
  if (checkAgainP === true || checkAgainC === true) {
    loopCount++;
    return checkPointsDiagBReverse(row, col);
  } else {
    if (currentTurn === 0) {
      ArrPChips.push(`${row}${col}`);
      if (ArrPChips.length >= 4) {
        winnerDiagBPlayer = ArrPChips;
      }
    } else {
      ArrCChips.push(`${row}${col}`);
      checkDiagBCPoints.push(ArrCChips.length);
      checkDiagBPPoints.push(ArrPChips.length);
      if (ArrCChips.length >= 4) {
        winnerDiagBCPU = ArrCChips;
      }
    }
    ptsDiagBC = ArrCChips.length;
    ptsDiagBP = ArrPChips.length;
    loopCount = 1;
    return;
  }
}

//---------LAUNCH GAME--------//
createArray();
gameDrawing(gameArray);
addButtons();
