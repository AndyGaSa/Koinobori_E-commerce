function createElementWithClass(type, className) {
  const element = document.createElement(type);
  element.className = className;
  return element;
}

function createPokeCard(limit, offset) {
  document.getElementById('section__list').innerHTML = '';
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

createPokeCard(5, 0);
