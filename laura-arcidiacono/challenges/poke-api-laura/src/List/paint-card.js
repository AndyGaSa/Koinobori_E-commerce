function createElementWithClass(type, className) {
  const element = document.createElement(type);
  element.className = className;
  return element;
}

function createPokeCard(maxCards) {
  document.getElementById('section__list').innerHTML = '';
  for (let i = 0; i < maxCards; i += 1) {
    const sectionList = document.getElementById('section__list');
    const pokeCard = createElementWithClass('a', 'list__poke-card');
    const pokeName = createElementWithClass('h3', 'list__poke-name');
    const pokeId = createElementWithClass('h4', 'list__poke-id');
    const pokeImg = createElementWithClass('img', 'list__poke-img');
    sectionList.appendChild(pokeCard);
    pokeCard.href = '#';
    pokeCard.appendChild(pokeName);
    pokeName.innerHTML = `${pokeArray[i].name}`;
    pokeCard.appendChild(pokeId);
    pokeId.innerHTML = `${pokeArray[i].id}`;
    pokeCard.appendChild(pokeImg);
    pokeImg.src = `${pokeArray[i].sprites.front_default}`;
  }
}
function deleteCard() {

}
