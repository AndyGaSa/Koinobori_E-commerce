
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

let deleteButtons = document.querySelectorAll('.delete') ;
deleteButtons.forEach((btn) => { btn.addEventListener("click", removeHero); });

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
console.log(heroIdCounter)
storage.push({id: heroIdCounter, name: createHeroInput.value})
console.log(storage)
localStorage.setItem("heroes", JSON.stringify(storage))
storage = JSON.parse(localStorage.getItem("heroes"))
print = new HeroesCard(backupStorage);
  print.setViews()
}

function removeHero(e){
 
  let eventTarget = e.path[1];
  let id = eventTarget.children[0].innerText
  let deleteName = id.substring(2);
  console.log(deleteName)
  storage = storage.filter(element => JSON.stringify(element).includes(deleteName))
  storage = JSON.parse(localStorage.getItem("heroes"))
  print = new HeroesCard(backupStorage);
  print.setViews()
}