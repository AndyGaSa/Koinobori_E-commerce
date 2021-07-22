// heroeStorage es el array tocho
// filtra de mi array ,los objetos que alguna de sus propiedades contenga lo te hayan pedido
/* const localHero = heroStorage;
const findHero = heroesStorage.filter((hero) => {
  JSON.stringify(hero).contains(inputValue);
}); */
// this.addEventListener('click', () => { console.log(`${this.id}`); });

// function for delete an hero
function printNewHeroList() {
  const newStoredHeroes = JSON.parse(localStorage.getItem('heroes'));
  const oldHeroList = document.getElementById('heroes__list');
  oldHeroList.innerHTML = '';
  const newHeroListToPrint = new HeroesPage(newStoredHeroes);
  newHeroListToPrint.setView();
  return newHeroListToPrint.setDeleteButtonId();
}

function deleteHero(e) {
  const heroStorage = JSON.parse(localStorage.getItem('heroes'));
  const { id } = e.target;
  const newHeroesList = heroStorage.filter((hero) => hero.id !== parseFloat(id));
  return localStorage.setItem('heroes', JSON.stringify(newHeroesList));
}

function eraseHero(e) {
  deleteHero(e);
  printNewHeroList();
}
