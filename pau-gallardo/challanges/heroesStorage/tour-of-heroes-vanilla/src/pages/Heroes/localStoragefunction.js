let heroes;
let lastId;
const reversedArray = heroesMyPc.reverse();
(function localStorageFunction() {
  if (!localStorage.getItem('heroes')) {
    lastId = reversedArray[0].id;
    localStorage.setItem('lastId', JSON.stringify(lastId));
    localStorage.setItem('heroes', JSON.stringify(heroesMyPc.reverse()));
  }
  heroes = JSON.parse(localStorage.getItem('heroes'));
  lastId = JSON.parse(localStorage.getItem('lastId'));
}());

// Macho programing solution, pensar bien como implementarlo en la clase
function addNewHero() {
  const heroName = document.getElementById('new-hero').value;
  lastId += 1;
  const newHero = { id: lastId, name: heroName };
  heroes.push(newHero);
  localStorage.setItem('lastId', JSON.stringify(lastId));
  localStorage.setItem('heroes', JSON.stringify(heroes));
  heroes = JSON.parse(localStorage.getItem('heroes'));
}

const btn = document.querySelector('.add-button');
btn.addEventListener('click', addNewHero);
