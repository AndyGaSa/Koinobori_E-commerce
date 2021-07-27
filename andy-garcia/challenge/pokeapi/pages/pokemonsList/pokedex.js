let pokedex;
let pokeDetails;
function getLocalStorage() {
  pokedex = localStorage.getItem('pokedex');
  pokedex = JSON.parse(pokedex);
  pokeDetails = localStorage.getItem('pokemonDetails');
  pokeDetails = JSON.parse(pokeDetails);
  pokeDetails = pokeDetails.sort((a, b) => (a.number - b.number));
  console.log(pokeDetails);
  createLis(pokedex);
}
class Pokemon {
  constructor(index, pokedex) {
    this.url = pokedex[index].url;
    this.idOnPokedex = this.url.split('/')[6];
    this.href = `../details/details.html?id=${this.idOnPokedex - 1}`;
    this.currentPokemon = pokedex[index];
    this.img = pokeDetails[index] !== undefined ? pokeDetails[index].img : 'https://e7.pngegg.com/pngimages/591/992/png-clipart-pokemon-platinum-unown-exclamation-mark-pokemon-trainer-unown-pokemon-celebi.png';
  }

  addContent() {
    const fatherUl = document.getElementById('pokedex__ul');
    const newLi = document.createElement('li');
    const newFigure = document.createElement('figure');
    const newA = document.createElement('a');
    const newImg = document.createElement('img');
    const newDiv = document.createElement('div');
    newDiv.setAttribute('id', this.currentPokemon.name);
    const newSpan = document.createElement('span');
    const newH5 = document.createElement('h5');
    const newButton = document.createElement('button');
    newButton.className = 'delete';
    fatherUl.appendChild(newLi);
    newLi.appendChild(newFigure);
    newA.setAttribute('href', this.href);
    newA.appendChild(newImg);
    newFigure.appendChild(newA);
    newImg.setAttribute('src', this.img);
    newImg.className = 'pokeImg';
    newLi.appendChild(newDiv);
    const spanContent = document.createTextNode(this.idOnPokedex);
    newSpan.appendChild(spanContent);
    newDiv.appendChild(newSpan);
    const newContent = document.createTextNode(this.currentPokemon.name);
    newH5.appendChild(newContent);
    newDiv.appendChild(newH5);
    const buttonContent = document.createTextNode('x');
    newButton.appendChild(buttonContent);
    newButton.setAttribute('id', this.idOnPokedex);
    newButton.setAttribute('onclick', 'deletePokemon(event)');
    newDiv.appendChild(newButton);
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
  const id = pokedex.length + 1;
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
  let clickedTargetName = event.path[1].id;
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
