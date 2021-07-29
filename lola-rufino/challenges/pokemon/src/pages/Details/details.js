function transformUrlQueryToObject(searchString) {
  const response = {};

  if (searchString) {
    const queryWithoutQuestionMark = searchString.slice(1, searchString.length);
    const entries = queryWithoutQuestionMark.split('&');
    entries.forEach((entry) => {
      const [key, value] = entry.split('=');
      response[key] = value;
    });
  }
  return response.pokemonId;
}

const pokemonId = transformUrlQueryToObject(location.search);

const url = 'https://pokeapi.co/api/v2/pokemon/';
const parentElement = document.getElementById('main-container__titleandimg');
const parentElementStats = document.getElementById('main-container__stats');

fetch(`${url}${pokemonId}`)
  .then((response) => response.json())
  .then((data) => {
    const newElementName = document.createElement('h3');
    const newElementImage = document.createElement('img');
    newElementName.className = 'main__poke-name';
    newElementImage.className = 'main__poke-img';
    newElementName.innerHTML = `${data.name}`;
    newElementImage.src = `${data.sprites.other.dream_world.front_default}`;
    parentElement.appendChild(newElementName);
    parentElement.appendChild(newElementImage);
    const newElementStats = document.createElement('span');
    newElementStats.className = 'main-container__stats-poke';
    newElementStats.innerHTML = `
    <h4 class="stats-poke">Id:</h4> ${data.id} 
    <h4 class="stats-poke">Height:</h4> ${data.height}cm 
    <h4 class="stats-poke">Weight:</h4> ${data.weight}g
    <h4 class="stats-poke">Type:</h4> ${data.types[0].type.name}
    `;
    const newElementminiImage = document.createElement('img');
    newElementminiImage.src = `${data.sprites.front_shiny}`;
    parentElementStats.appendChild(newElementStats);
    parentElementStats.appendChild(newElementminiImage);
  })
  .catch(new Error('Something went wrong'));

const urlSpecies = 'https://pokeapi.co/api/v2/pokemon-species/';

fetch(`${urlSpecies}${pokemonId}`)
  .then((response) => response.json())
  .then((data) => {
    const newElementSpecies = document.createElement('div');
    newElementSpecies.innerHTML = `
    <h4 for="base__happiness" class="stats-poke">Base happiness:</h4>
    <progress max="100" value="${data.base_happiness}"></progress>
    <h4 class="stats-poke">Capture rate:</h4>
    <progress max="100" value="${data.capture_rate}"></progress>
    <h4 class="stats-poke">Japanese name:</h4> ${data.names[0].name}
    `;
    parentElementStats.appendChild(newElementSpecies);
  });
