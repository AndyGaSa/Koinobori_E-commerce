const pokeArray = [];
const firstPokesToShow = 5;
const maxPokesInMyArray = 350;
let currentPage = 1;
const numberOfCardsToShowPerPage = 5;

function createElementWithClass(type, className) {
  const element = document.createElement(type);
  element.className = className;
  return element;
}

function createPokeCard(limit, offset) {
  document.getElementById('section__list').innerHTML = '';
  /* TODO, si limit +offset > length, no ejecutar asi. */
  for (let item = offset; item < limit + offset; item += 1) {
    const sectionList = document.getElementById('section__list');

    const pokeCard = createElementWithClass('div', 'list__poke-card');
    sectionList.appendChild(pokeCard);

    const pokeAnchor = createElementWithClass('a', 'list__poke-anchor');
    pokeCard.appendChild(pokeAnchor);
    pokeAnchor.href = '#';

    const pokeName = createElementWithClass('h3', 'list__poke-name');
    pokeName.innerHTML = `${pokeArray[item].name}`;
    pokeCard.appendChild(pokeName);

    const pokeImg = createElementWithClass('img', 'list__poke-img');
    pokeImg.src = `${pokeArray[item].sprites.front_default}`;
    pokeImg.alt = `Imagen de ${pokeArray[item].name}`;
    pokeCard.appendChild(pokeImg);

    const pokeId = createElementWithClass('h4', 'list__poke-id');
    pokeId.innerHTML = `Id: ${pokeArray[item].id}`;
    pokeCard.appendChild(pokeId);
  }
}
/* funcion que reciba el 5, 10, 20, 30, setee como nuevo limite de cartas porpagina y que despues llame a pokecard

*/

function limitOfCardsPerPage(maxCards) {

}

function nextPage() {
  createPokeCard(numberOfCardsToShowPerPage, numberOfCardsToShowPerPage * currentPage);
  currentPage += 1;
  document.getElementById('currentPage').innerHTML = currentPage;
}
function previousPage() {
  createPokeCard(numberOfCardsToShowPerPage, numberOfCardsToShowPerPage * (currentPage - 1));
  currentPage -= 1;
  document.getElementById('currentPage').innerHTML = currentPage;
}

function addPokeToArray(data) {
  pokeArray.push(data);
  if (pokeArray.length === firstPokesToShow) {
    createPokeCard(firstPokesToShow, 0);
  }
}

function getPokesFromApi() {
  if (pokeArray.length === 0) {
    for (let item = 1; item <= maxPokesInMyArray; item += 1) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${item}`)
        .then((response) => response.json())
        .then((data) => addPokeToArray(data));
    }
    // TODO crear catch error
  }
}
getPokesFromApi();
