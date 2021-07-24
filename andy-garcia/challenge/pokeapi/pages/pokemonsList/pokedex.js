let pokedex;
function getLocalStorage() {
  pokedex = localStorage.getItem('pokedex');
  pokedex = JSON.parse(pokedex);
  createLis(pokedex);
}
class Pokemon {
  constructor(index, pokedex) {
    this.url = pokedex[index].url;
    this.idOnPokedex = this.url.split('/')[6] ;
    this.href = `../details/details.html?id=${this.idOnPokedex - 1}`;
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
    newButton.setAttribute('id', this.idOnPokedex);
    newButton.setAttribute('onclick', 'deletePokemon(event)');
    newLi.appendChild(newA);
    newLi.appendChild(newButton);
    newA.setAttribute('href', this.href);
  }
}
function createLis(pokedex) {
  for (let index = 0; index < pokedex.length; index += 1) {
    const pokemonLi = new Pokemon(index, pokedex);
    pokemonLi.addContent();
  }
}
const addButton = document.getElementById('add-button');
addButton.addEventListener('click', () => {
  const addInput = document.getElementById('new-pokemon__input');
  let id = pokedex.length + 1;
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  const name = addInput.value;
  const newPokemon = {
    name, url,
  };
  pokedex.push(newPokemon);
  localStorage.setItem('pokedex', JSON.stringify(pokedex));
  location.reload();
});
function deletePokemon(event) {
  let clickedTargetName = event.path[1].firstChild.innerText;
  clickedTargetName = clickedTargetName.replace(/\d+/g, '');
  pokedex = pokedex.filter((pokemon) => pokemon.name != clickedTargetName);
  localStorage.setItem('pokedex', JSON.stringify(pokedex));
  pokedex = localStorage.getItem('pokedex');
  pokedex = JSON.parse(pokedex);
  location.reload();
}
const resetButton = document.getElementById('reset-button');
resetButton.onclick = function resetArray() {
  localStorage.removeItem('pokedex');
  location.reload();
};
