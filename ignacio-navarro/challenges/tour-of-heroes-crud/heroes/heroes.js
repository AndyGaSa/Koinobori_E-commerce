
(function printHeroesCard() {
  if(!localStorage.getItem("heroes")){
    localStorage.setItem("heroes", JSON.stringify(HEROES_LIST))
  }
  const print = new HeroesCard(storage);
  print.setViews();
  
}());

let heroIdCounter = 10;
let backupStorage = []
let searchbox = document.getElementById("search-hero");
searchbox.addEventListener("input",filter)
let createHeroInput = document.getElementById("new-hero");
let saveHeroButton = document.getElementById("save-hero")
saveHeroButton.addEventListener("click",addHero)
let resetHeroButton = document.getElementById("reset-heroes")
resetHeroButton.addEventListener("click",resetHeroes)

function filter(){
  backupStorage = storage.filter(element => JSON.stringify(element).includes(searchbox.value))
  document.getElementById('hero-list-DOM').innerHTML=""
  print = new HeroesCard(backupStorage);
  print.setViews()
}

function addHero () {
  if(!localStorage.getItem("heroes")){
    heroIdCounter = 10
  } else {
    heroIdCounter += 1
  }
storage.push({id: heroIdCounter, name: createHeroInput.value})
localStorage.setItem("heroes", JSON.stringify(storage))
document.getElementById('hero-list-DOM').innerHTML=""
let refresh = new HeroesCard(storage);
refresh.setViews()
}

function removeHero(e){
  let eventTarget = e.path[1];
  let id = eventTarget.children[0].innerText
  let deleteName = id.substring(2);
  console.log(deleteName)
  let newObj = storage.filter(element => !JSON.stringify(element).includes(deleteName))
  localStorage.setItem("heroes", JSON.stringify(newObj))
  storage = JSON.parse(localStorage.getItem("heroes"))
  document.getElementById('hero-list-DOM').innerHTML=""
  let refresh = new HeroesCard(storage);
  
  refresh.setViews()
}

function resetHeroes(){
  localStorage.setItem("heroes", JSON.stringify(HEROES_LIST))
  storage = JSON.parse(localStorage.getItem("heroes"))
document.getElementById('hero-list-DOM').innerHTML=""
let refresh = new HeroesCard(storage);
refresh.setViews()
}