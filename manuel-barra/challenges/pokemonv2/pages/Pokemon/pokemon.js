function showPokemons(num) {
  const myNode = document.getElementById('card-container');
  myNode.innerHTML = '';
  allPokemon.sort((a, b) => (a.id - b.id));
  for (let i = 0; i < num; i += 1) {
    const cardContainer = document.getElementById('card-container');
    const cardItem = document.createElement('a');
    const nameItem = document.createElement('h3');
    const imgItem = document.createElement('img');
    const idOfPokemon = document.createElement('p');
    const typeOfPokemon = document.createElement('p');
    cardContainer.appendChild(cardItem);
    cardItem.href = '#';
    cardContainer.className = 'card-container';
    cardItem.append(nameItem);
    nameItem.innerHTML = `${allPokemon[i].name}`;
    cardItem.appendChild(imgItem);
    imgItem.src = `${allPokemon[i].sprites.front_default}`;
    cardItem.appendChild(idOfPokemon);
    idOfPokemon.innerHTML = `${allPokemon[i].id}`;
    cardItem.appendChild(typeOfPokemon);
    typeOfPokemon.innerHTML = `${allPokemon[i].types['0'].type.name}`;
    cardContainer.append(cardItem);
  }
}
