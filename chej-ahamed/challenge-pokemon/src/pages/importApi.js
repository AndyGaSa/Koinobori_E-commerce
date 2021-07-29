const pokemonsArray = [];
const firstPokemonToShow = 5;

function createElementWithClass(type, className) {
  const element = document.createElement(type);
  element.className = className;
  return element;
}

function showPokemons(limit, offset) {
  document.getElementById('pokemon__list').innerHTML = ' ';
  pokemonsArray.sort((a, b) => (a.id - b.id));
  for (let item = offset; item < limit + offset; item += 1) {
    const cardContainer = document.getElementById('pokemon__list');

    const cardLimit = createElementWithClass('div', 'pokemon__list-card');
    cardContainer.appendChild(cardLimit);
    const cardItem = createElementWithClass('a', 'pokemon_link');
    cardItem.href = '#';
    cardLimit.appendChild(cardItem);

    const nameItem = createElementWithClass('h3', 'pokemon_name');
    nameItem.innerHTML = `${pokemonsArray[item].name}`;
    cardLimit.appendChild(nameItem);

    const imgItem = createElementWithClass('img', 'pokemon_imagen');
    imgItem.src = `${pokemonsArray[item].sprites.front_default}`;
    cardLimit.appendChild(imgItem);

    const idOfPokemon = createElementWithClass('p', 'pokemon_id');
    idOfPokemon.innerHTML = `${pokemonsArray[item].id}`;
    cardLimit.appendChild(idOfPokemon);

    const typeOfPokemon = createElementWithClass('p', 'pokemon_type');
    typeOfPokemon.innerHTML = `${pokemonsArray[item].type.name}`;
    cardLimit.appendChild(typeOfPokemon);
  }
}

function addPokemonsToArray(data) {
  pokemonsArray.push(data);
  if (pokemonsArray.lenght === firstPokemonToShow) {
    showPokemons(firstPokemonToShow, 0);
  }
}
(function getPokemonsFromApi() {
  if (pokemonsArray.length === 0) {
    for (let i = 1; i < 200; i += 1) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((reponse) => reponse.json())
        .then((data) => addPokemonsToArray(data));
    }
  }
}());
