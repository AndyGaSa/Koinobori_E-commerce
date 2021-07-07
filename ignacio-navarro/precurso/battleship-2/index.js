const cursor = document.querySelector('.cursor');
let readyButton = document.querySelector("#all-ready");
let clearButton = document.querySelector("#clear-board");
let dropzone = document.querySelector("#dropzone");
let enemyzone = document.querySelector("#enemyzone");
let menuzone = document.querySelector("#boats-menu");
let body =  document.querySelector("body");
dropzone.addEventListener("drop", drop);
enemyzone.addEventListener('mouseover',cursorIn)
enemyzone.addEventListener('mouseleave',cursorOut)
enemyzone.addEventListener('mousemove', e => {
  cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})
enemyzone.addEventListener('click', () => {
  cursor.classList.add("expand");

  setTimeout(() => {
      cursor.classList.remove("expand");
  }, 500)
})

dropzone.addEventListener("dragover", dragOver);
readyButton.addEventListener("click", allReady);
clearButton.addEventListener("click", cleanGame);

function addButtons() {
  let buttonsArray = Array.from(document.getElementsByClassName("boat"));
  buttonsArray.forEach((element) => {
    element.addEventListener("dragstart", dragStart);
    element.addEventListener("click", clickBoat);
  });
}
let parcelSize = 50;
let currentBoat = {};
let arraySize = 10;
let p1Array = cleanArray()
let p2Array = cleanArray()
let p1Down = 0;
let p2Down = 0;
let p1SinkedBoats = 0;
let p2SinkedBoats = 0;
let placed1stBoat = true;
let firstAttack = true;

let gameVariables = {
  boatsPlaced:0,
}

let boats = cleanBoats()

function dragStart(e){
  currentBoat.id = e.target.id
  currentBoat.dom = document.querySelector(`#${e.target.id}`)
  currentBoat.pickpoint = [e.offsetX, e.offsetY]
}

function dragOver(e) {
  let direction = boats[currentBoat.id].direction;
  currentBoat.parcelDrop = [Math.round((e.offsetX-currentBoat.pickpoint[0]) / parcelSize), Math.round((e.offsetY-currentBoat.pickpoint[1]) / parcelSize)];
  let endPos = [currentBoat.parcelDrop[0] * parcelSize, currentBoat.parcelDrop[1] * parcelSize]
  currentBoat.endPos = [endPos[0], endPos[1]];
  e.preventDefault();
  if (currentBoat.parcelDrop[direction] > boats[currentBoat.id].maxParcel){
    currentBoat.droppable = false
  } else if (currentBoat.parcelDrop[0] < 0 || currentBoat.parcelDrop[1] < 0){
    currentBoat.droppable = false
  } else {
    currentBoat.droppable = true
  }
  
}

function drop(e){
  let rotation = boats[currentBoat.id].direction === 0 ? 1 : 0;
  if (e.target.id !== "dropzone" || !currentBoat.droppable){return}
  if (placed1stBoat) {document.querySelector(".boats-here").remove();placed1stBoat = false}
  dropzone.appendChild(currentBoat.dom);
  if (currentBoat.parcelDrop[rotation] > boats[currentBoat.id].maxParcel){boats[currentBoat.id].turnable = false} else {boats[currentBoat.id].turnable = true}
  boats[currentBoat.id].position = currentBoat.parcelDrop;
  boats[currentBoat.id].placed = true;
  currentBoat.dom.style.transform = `translate(${currentBoat.endPos[0]}px,${currentBoat.endPos[1]}px)`
  currentBoat.dom.style.position = "absolute"
  endPlacement()
}

function clickBoat(e){
  currentBoat.id = e.currentTarget.id
  currentBoat.dom = document.querySelector(`#${e.currentTarget.id}-body`)
  currentBoat.domContainer = document.querySelector(`#${e.currentTarget.id}`)
  if (boats[currentBoat.id].turnable){
    if (boats[currentBoat.id].direction === 0) {
      currentBoat.dom.classList.remove(`${currentBoat.id}`);
      currentBoat.dom.classList.add(`${currentBoat.id}R`);
      currentBoat.domContainer.classList.remove(`${currentBoat.id}-container`);
      currentBoat.domContainer.classList.add(`${currentBoat.id}-containerR`);
      boats[currentBoat.id].direction = 1
    } else {
      currentBoat.dom.classList.remove(`${currentBoat.id}R`);
      currentBoat.dom.classList.add(`${currentBoat.id}`);
      currentBoat.domContainer.classList.remove(`${currentBoat.id}-containerR`);
      currentBoat.domContainer.classList.add(`${currentBoat.id}-container`);
      boats[currentBoat.id].direction = 0
    }
  }
  endPlacement()
}


function getBoatArrays(){
  let start
  let size
  let orientation
  let name
  let boatsArray = Object.entries(boats);
  for (i = 0; i < boatsArray.length; i++) {
    let arr = [];
    start = boatsArray[i][1].position;
    size =  boatsArray[i][1].size;
    orientation = boatsArray[i][1].direction;
    name = boatsArray[i][1].name
    if (boatsArray[i][1].placed){
    if (orientation === 0){
      for (let i = 0 ; i < size;i++){
        arr.push(Number(`${start[0]+i}${start[1]}`))
        boats[name].array = arr
      }
   } else {
      for (let i = 0 ; i < size;i++){
        arr.push(Number(`${start[0]}${start[1]+i}`))
        boats[name].array = arr
      }
    }
   }
  }
}

function invalidPosition() {
  let boatsArray = Object.entries(boats);
  for (i = 0; i < boatsArray.length; i++) {
    boatsArray[i][1].error = false;
  }
  for (i = 0; i < boatsArray.length; i++) {
    //Barco ppal selecc para comparar
    let mainBoat = boatsArray[i][1]; //array del barco ppal
    for (j = 0; j < mainBoat.array.length; j++) {
      //recorrido del array ppal
      for (k = i + 1; k < boatsArray.length; k++) {
        secondaryBoat = boatsArray[k][1];
        if (secondaryBoat.array.includes(mainBoat.array[j])) {
          boats[mainBoat.name].error = true;
          boats[secondaryBoat.name].error = true;
          invalidPreparation = true;
          break;
        }
      }
    }
  }
}

function paintErrors() {
  let boatsArray = Object.entries(boats);
  for (i = 0; i < boatsArray.length; i++) {
    let boatName = boatsArray[i][1].name;
    let boatToApplyClass = document.querySelector(`#${boatName}-body`);
    if (boatsArray[i][1].error) {
      boatToApplyClass.classList.add("red-border");
    } else {
      boatToApplyClass.classList.remove("red-border");
    }
  }
}

function endPlacement(){
  getBoatArrays()
  invalidPosition()
  paintErrors()
}

function cleanArray() {
  const array = [
    ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
    ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
    ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
    ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
    ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
    ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
    ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
    ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
    ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
    ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
  ];
  return array;
}

function cleanBoats(){
  let cleanBoatsObj = {
    carrier: {
      name: "carrier",
      abbr: "ca",
      placed: false,
      turnable: false,
      size: 5,
      p1hits: 0,
      p2hits: 0,
      direction: 0,
      position:[],
      array:[],
      maxParcel: arraySize-5,
      error: false,
    },
    battleship: {
      name: "battleship",
      abbr: "ba",
      placed: false,
      turnable: false,
      size: 4,
      p1hits: 0,
      p2hits: 0,
      direction: 0,
      position:[],
      array:[],
      maxParcel: arraySize-4,
      error: false,
    },
    cruiser: {
      name: "cruiser",
      abbr: "cr",
      placed: false,
      turnable: false,
      size: 3,
      p1hits: 0,
      p2hits: 0,
      direction: 0,
      position:[],
      array:[],
      maxParcel: arraySize-3,
      error: false,
    },
    submarine: {
      name: "submarine",
      abbr: "su",
      placed: false,
      turnable: false,
      size: 3,
      p1hits: 0,
      p2hits: 0,
      direction: 0,
      position:[],
      array:[],
      maxParcel: arraySize-3,
      error: false,
    },
    destroyer: {
      name: "destroyer",
      abbr: "de",
      placed: false,
      turnable: false,
      size: 2,
      p1hits: 0,
      p2hits: 0,
      direction: 0,
      position:[],
      array:[],
      maxParcel: arraySize-2,
      error: false,
    }
  }
  return cleanBoatsObj
}

function resetBoats(){
  let boatsArray = Object.entries(boats);
  for (i = 0; i < boatsArray.length; i++) {
    let boat = boatsArray[i][1].name;
    let boatDOM = document.querySelector(`#${boat}-body`)
    let boatDOMContainer = document.querySelector(`#${boat}`)
    boatDOMContainer.style.position = ""
    boatDOMContainer.removeAttribute("style")
    boatDOM.classList.remove(`${boat}R`);
    boatDOM.classList.remove(`red-border`);
    boatDOM.classList.add(`${boat}`);
    boatDOMContainer.classList.remove(`${boat}-containerR`);
    boatDOMContainer.classList.add(`${boat}-container`);

    menuzone.appendChild(boatDOMContainer);
  };
}

function allReady(){
  if (!allPlaced()){return}
  if (!playable()){return}
  paintArray(p1Array)
  console.table(p1Array)
  resetBoats()
  freezeButtons()
  dropzone.addEventListener("click", p2shot);
  changeColorBoats()
  cpuGettingReady()
  
}

function cpuGettingReady(){
  document.querySelector('.menu').innerHTML += `<div class="enemy-ready">YOUR ENEMY <br>
        IS GETTING READY</div>`
  let x = 0;
  let intervalID = setInterval(function () {
    randomPositioning()
    if (++x === 5) {
        paintArray(p2Array)
        console.table(p2Array)
        deleteBoats()
        enemyzone.addEventListener("click", p1shot);
        
        document.querySelector('.text').innerHTML += `<div class="boats-here">ATTACK <br>
        YOUR ENEMY</div>`
       window.clearInterval(intervalID);
    }
  }, 1000);
  //document.querySelector('.menu').innerHTML = ``
 
}

function randomizer(){
}

function randomPositioning(){
  let boatsArray = Object.entries(boats);
  let placedCount = 5;
  for (i = 0; i < boatsArray.length; i++) {
    randomDropValues()
  };
  getBoatArrays()
  invalidPosition()
  paintErrors()
  if (!playable()){return randomPositioning()}
  
}

function randomDropValues(){
  let boatsArray = Object.entries(boats);
    let boat = boatsArray[i][1].name;
    boats[boat].direction = Math.round(Math.random());
    boats[boat].position= [Math.round(Math.random()*9),Math.round(Math.random()*9)]
    if (boats[boat].position[boats[boat].direction] > boats[boat].maxParcel){
      randomDropValues()
    } else {
        let boatDOM = document.querySelector(`#${boat}-body`)
        let boatDOMContainer = document.querySelector(`#${boat}`)
        boatDOMContainer.style.position = "absolute"
      if (boats[boat].direction === 1) {
        
        boatDOM.classList.remove(`${boat}`);
        boatDOM.classList.add(`${boat}R`);
        boatDOMContainer.classList.remove(`${boat}-container`);
        boatDOMContainer.classList.add(`${boat}-containerR`);
      } else {
        boatDOM.classList.remove(`${boat}R`);
        boatDOM.classList.add(`${boat}`);
        boatDOMContainer.classList.remove(`${boat}-containerR`);
        boatDOMContainer.classList.add(`${boat}-container`);
      }
      randomDrop(boat, boats[boat].position)
    }
    return
}

function randomDrop(boat, placement){
  let boatDOM = document.querySelector(`#${boat}`)
  enemyzone.appendChild(boatDOM);
  boats[boat].position = placement;
  boats[boat].placed = true;
  let endPos = [placement[0] * parcelSize, placement[1] * parcelSize]
  boatDOM.style.transform = `translate(${endPos[0]}px,${endPos[1]}px)`
  return
}

function deleteBoats(){
  let boatsArray = Object.entries(boats);
  for (i = 0; i < boatsArray.length; i++) {
    let boat = boatsArray[i][1].name;
    let boatDOMContainer = document.querySelector(`#${boat}`)
    boatDOMContainer.remove()
  };
}

function changeColorBoats(){
  let boats = document.querySelectorAll(".p1color")
  boats.forEach((element)=>{
    element.classList.remove(`p1color`);
    element.classList.add(`p2color`);
})
}
function paintHit(player,shotCell){
  player.innerHTML += `
  <div class="fire" style="transform: translate(${(shotCell[0]*50)+10}px, ${(shotCell[1]*50)-40}px)">
  <div class="hole3"></div>
  <div class="hole2"></div>
  <div class="hole1"></div>
  <div class="flame1"></div>
  <div class="flame2"></div> 
  <div class="flame3"></div>
  <div class="flame4"></div>
  <div class="flame5"></div>
</div>
`
}

function paintWater(player,shotCell){
  player.innerHTML += `
  <div class="w" style="transform: translate(${shotCell[0]*50}px, ${shotCell[1]*50}px)">
  <div class="water1"></div>
  <div class="water2"></div>
  <div class="water3"></div>
  <div class="water4"></div>
  <div class="water5"></div>
  </div>
  `
}

function p1shot(e){
  let abbrs ={
    ca:"carrier",
    ba:"battleship",
    cr:"cruiser",
    su:"submarine",
    de:"destroyer"
  }
  if (e.target.id!== "enemyzone"){return}
  if (firstAttack){document.querySelector('.text').innerHTML = ``; firstAttack = false}
  let shotCell = [Math.floor(e.offsetX / parcelSize), Math.floor(e.offsetY / parcelSize)];
  let CellValue = p2Array[shotCell[1]][shotCell[0]]
  let p1cells = document.getElementById("enemyzone")
  let hittedBoat = boats[abbrs[CellValue]]
  
  //p1cells.innerHTML += `<div class="${CellValue}" style="transform: translate(${shotCell[0]*50}px, ${shotCell[1]*50}px)">`
  if (CellValue!=="w"){
    paintHit(p1cells,shotCell)
    p1Down++;
    hittedBoat.p1hits++
    if (hittedBoat.p1hits === hittedBoat.size){p2SinkedBoats++; sinkBoat("P2",p2SinkedBoats)}
  } else {
    paintWater(p1cells,shotCell)
  }
  if (p1Down===17){console.log ("p1win")}
  p2shot([Math.round(Math.random()*9),Math.round(Math.random()*9)])
}
function sinkBoat(player,target){
  console.log(target)
  let boat = document.querySelector(`#battleship-silouette${player}`)
  boat.classList.add(`sink${target}`)

}
function cursorIn (){
  cursor.removeAttribute("style","opacity: 0")

  
}
function cursorOut (){
  cursor.setAttribute("style","opacity: 0")
  
}

function p2shot(shotCell){
  let abbrs ={
    ca:"carrier",
    ba:"battleship",
    cr:"cruiser",
    su:"submarine",
    de:"destroyer"
  }
  let CellValue = p1Array[shotCell[1]][shotCell[0]]
  let p2cells = document.getElementById("dropzone")
  let hittedBoat = boats[abbrs[CellValue]]
  if (CellValue!=="w"){
    paintHit(p2cells,shotCell)
    p2Down++;
    hittedBoat.p2hits++
    if (hittedBoat.p2hits === hittedBoat.size){p1SinkedBoats++; sinkBoat("P1",p1SinkedBoats)}
  } else {
    paintWater(p2cells,shotCell)
  }
  if (p2Down===17){console.log ("p2win")}
  
}

function allPlaced(){
  let boatsArray = Object.entries(boats);
  let placedCount = 5;
  for (i = 0; i < boatsArray.length; i++) {
    if (boatsArray[i][1].placed) {placedCount--}
  };
  if (placedCount === 0) {
    return true
  } else {
    return false
  }
}

function playable(){
  let boatsArray = Object.entries(boats);
  let errorCount = 0;
  for (i = 0; i < boatsArray.length; i++) {
    if (boatsArray[i][1].error) {errorCount++}
  };
  if (errorCount === 0) {
    return true
  } else {
    return false
  }
}

function paintArray(arr) {
  let boatsArray = Object.entries(boats);
  for (i = 0; i < boatsArray.length; i++) {
    for (let j = 0; j < boatsArray[i][1].size; j++) {
      let row;
      let column;
      //debugger
      if (boatsArray[i][1].array[j].toString().length === 1){
        column = 0
        row = boatsArray[i][1].array[j]
      } else {
        [column,row] = boatsArray[i][1].array[j].toString();
      }
      arr[row][column] = boatsArray[i][1].abbr;
    }
  }
}

function freezeButtons() {
  let buttonsArray = Array.from(document.getElementsByClassName("boat"));
  buttonsArray.forEach((element) => {
    element.removeEventListener("dragstart", dragStart);
    element.removeEventListener("click", clickBoat);
  });
  dropzone.removeEventListener("drop", drop);
  dropzone.removeEventListener("dragover", dragOver);
  readyButton.removeEventListener("click", allReady);
}

function cleanGame(){
  boats = cleanBoats()
  p1Array = cleanArray()
  resetBoats()
}

function start(){
  addButtons()
}

start()