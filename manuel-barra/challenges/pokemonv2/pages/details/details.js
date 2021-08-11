function paintCard(i) {
  const myNode = document.getElementById('card-container');
  myNode.innerHTML = '';
  const cardContainer = document.getElementById('card-container');
  const cardItem = document.createElement('a');
  const nameItem = document.createElement('h3');
  const imgItem = document.createElement('img');
  const idOfPokemon = document.createElement('p');
  const typeOfPokemon = document.createElement('p');
  const atributesUno = document.createElement('p');
  const atributesDos = document.createElement('p');
  const moveUno = document.createElement('p');
  const moveDos = document.createElement('p');
  const baseStats = document.createElement('p');

  cardContainer.appendChild(cardItem);
  atributesUno.innerHTML = `hability: ${allPokemon[i].abilities[0].ability.name}`;
  atributesDos.innerHTML = `hability: ${allPokemon[i].abilities[1].ability.name}`;
  moveUno.innerHTML = `Move: ${allPokemon[i].moves[0].move.name}`;
  moveDos.innerHTML = `Move: ${allPokemon[i].moves[1].move.name}`;
  baseStats.innerHTML = `Stats: ${allPokemon[0].stats[0].base_stat}`;
  cardContainer.appendChild(atributesUno);
  cardContainer.appendChild(atributesDos);
  cardContainer.appendChild(moveUno);
  cardContainer.appendChild(moveDos);
  cardContainer.appendChild(baseStats);
  cardItem.append(nameItem);
  nameItem.innerHTML = `${allPokemon[i].name}`;
  cardItem.appendChild(imgItem);
  imgItem.src = `${allPokemon[i].sprites.front_default}`;
  cardItem.appendChild(idOfPokemon);
  idOfPokemon.innerHTML = `Id: ${allPokemon[i].id}`;
  cardItem.appendChild(typeOfPokemon);
  typeOfPokemon.innerHTML = `Type: ${allPokemon[0].types[1].type.name}`;
}

function runCommand(id) {
  const myUrl = new URL(window.location.href);
  myUrl.search = id;
  window.location = myUrl;
  paintCard(id);
}
