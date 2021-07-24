function getLocalStorage() {
  let pokedex = localStorage.getItem('pokedex');
  pokedex = JSON.parse(pokedex);
  const { url } = pokedex[0];
  const id = url.split('/')[6];
  createLis(+id, pokedex);
  console.log(pokedex.length);
}

class Pokemon {
  constructor(id, index, pokedex) {
    this.idOnPokedex = id;
    this.href = `../details/details.html?id=${this.index}`;
    this.currentPokemon = pokedex[index];
  }

  addContent() {
    const fatherUl = document.getElementById('pokedex__ul');
    const newLi = document.createElement('li');
    const newA = document.createElement('a');
    const newSpan = document.createElement('span');
    const newButton = document.createElement('button');
    newButton.className = 'delete';
    newSpan.className = 'badge';
    fatherUl.appendChild(newLi);
    const newContent = document.createTextNode(this.currentPokemon.name);
    newA.appendChild(newSpan);
    newA.appendChild(newContent);
    const spanContent = document.createTextNode(this.idOnPokedex);
    const buttonContent = document.createTextNode('x');
    newSpan.appendChild(spanContent);
    newButton.appendChild(buttonContent);
    newButton.setAttribute('id', this.currentPokemon.id);
    newLi.appendChild(newA);
    newLi.appendChild(newButton);
    newA.setAttribute('href', this.href);
  }
}
function createLis(id, pokedex) {
  for (let index = 0; index < pokedex.length; index += 1) {
    const pokemonLi = new Pokemon(+id, index, pokedex);
    pokemonLi.addContent();
    id += 1;
  }
}
const addButton = document.getElementById('add-button');
addButton.addEventListener('click', () => {
  const addInput = document.getElementById('new-hero__input');
  let { id } = heroes[heroes.length - 1];
  id += 1;
  const name = addInput.value;
  const slug = '';
  const powerstats = {};
  const newHero = {
    id, name, slug, powerstats,
  };
  heroes.push(newHero);
  console.log(heroes);
  localStorage.setItem('heroes', JSON.stringify(heroes));
  heroes = localStorage.getItem('heroes');
  heroes = JSON.parse(heroes);
  const heroLi = new Pokemon(heroes.length - 1, heroes);
  heroLi.addContent();
});
const deleteButtons = document.getElementsByClassName('delete');
for (let index = 0; index < deleteButtons.length; index += 1) {
  deleteButtons[index].addEventListener('click', () => {
    const clickedId = event.target.id;
    heroes = heroes.filter((hero) => hero.id != clickedId);
    localStorage.setItem('heroes', JSON.stringify(heroes));
    heroes = localStorage.getItem('heroes');
    heroes = JSON.parse(heroes);
    location.reload();
  });
}
const resetButton = document.getElementById('reset-button');
resetButton.onclick = function resetArray() {
  localStorage.removeItem('cont');
  location.reload();
};
