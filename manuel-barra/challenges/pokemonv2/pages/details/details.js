function paintCard(i) {
  const myNode = document.getElementById('card-container');
  myNode.innerHTML = '';
  const cardContainer = document.getElementById('card-container');
  const cardItem = document.createElement('a');
  const nameItem = document.createElement('h3');
  const imgItem = document.createElement('img');
  const idOfPokemon = document.createElement('p');
  const typeOfPokemon = document.createElement('p');
  cardContainer.appendChild(cardItem);
  cardItem.append(nameItem);
  nameItem.innerHTML = `${allPokemon[i].name}`;
  cardItem.appendChild(imgItem);
  imgItem.src = `${allPokemon[i].sprites.front_default}`;
  cardItem.appendChild(idOfPokemon);
  idOfPokemon.innerHTML = `${allPokemon[i].id}`;
  cardItem.appendChild(typeOfPokemon);
  typeOfPokemon.innerHTML = `${allPokemon[0].types[1].type.name}`;
}

function runCommand(id) {
  const myUrl = new URL(window.location.href);
  myUrl.search = id;
  window.location = myUrl;
  paintCard(id);
}
