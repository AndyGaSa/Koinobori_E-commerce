const urlFavPoke1 = 'https://pokeapi.co/api/v2/pokemon/pikachu';
const element = document.getElementById('favpoke1');

fetch(urlFavPoke1)
  .then((response) => response.json())
  .then((data) => {
    element.innerHTML = `
    <a href = '../Details/details.html?pokemonId=${data.id}'>
    <div class="main__favpokediv">
    <h3 class="main__favpoke-name" >${data.name}</h3>
    <img class="main__favpoke-img" src="${data.sprites.other.dream_world.front_default}"/>
    </div>
    </a>
    `;
  });

const urlFavPoke2 = 'https://pokeapi.co/api/v2/pokemon/mudkip';
const element2 = document.getElementById('favpoke2');

fetch(urlFavPoke2)
  .then((response) => response.json())
  .then((data) => {
    element2.innerHTML = `
    <a href = '../Details/details.html?pokemonId=${data.id}'>
    <div class="main__favpokediv">
    <h3 class="main__favpoke-name" >${data.name}</h3>
    <img class="main__favpoke-img" src="${data.sprites.other.dream_world.front_default}"/>
    </div>
    </a>
    `;
  });

const urlFavPoke3 = 'https://pokeapi.co/api/v2/pokemon/heracross';
const element3 = document.getElementById('favpoke3');

fetch(urlFavPoke3)
  .then((response) => response.json())
  .then((data) => {
    element3.innerHTML = `
    <a href = '../Details/details.html?pokemonId=${data.id}'>
    <div class="main__favpokediv">
    <h3 class="main__favpoke-name" >${data.name}</h3>
    <img class="main__favpoke-img" src="${data.sprites.other.dream_world.front_default}"/>
    </div>
    </a>
    `;
  });

const urlFavPoke4 = 'https://pokeapi.co/api/v2/pokemon/espeon';
const element4 = document.getElementById('favpoke4');

fetch(urlFavPoke4)
  .then((response) => response.json())
  .then((data) => {
    element4.innerHTML = `
    <a href = '../Details/details.html?pokemonId=${data.id}'>
    <div class="main__favpokediv">
    <h3 class="main__favpoke-name" >${data.name}</h3>
    <img class="main__favpoke-img" src="${data.sprites.other.dream_world.front_default}"/>
    </div>
    </a>
    `;
  });
