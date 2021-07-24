function showPokemons(num) {
  for (let i = 0; i < num; i += 1) {
    const cardContainer = document.getElementById('pokemon__list');
    const cardItem = document.createElement('a');
    const nameItem = document.createElement('h3');
    const imgItem = document.createElement('img');
    const idOfPokemon = document.createElement('p');
    const typeOfPokemon = document.createElement('p');

    cardContainer.appendChild(cardItem);
    cardItem.href = '#';
    cardContainer.className = 'pokemon_list';

    cardItem.append(nameItem);
    nameItem.innerHTML = `${pokemonsArray[i].name}`;

    cardItem.appendChild(imgItem);
    imgItem.src = `${pokemonsArray[i].sprites.front_default}`;
    cardItem.appendChild(idOfPokemon);
    idOfPokemon.innerHTML = `${pokemonsArray[i].id}`;
    cardItem.appendChild(typeOfPokemon);
    typeOfPokemon.innerHTML = `${pokemonsArray[i].type}`;
  }
  cardContainer.append(cardItem);
}
