function showPokemons(num) {
  const cardContainer = document.getElementById('pokemon-cards');
  cardContainer.className = 'main-box__pokemon-card';

  for (let i = 0; i <= 4; i += 1) {
    const linkItems = document.createElement('a');
    linkItems.id = `item-Card${i}`;
    linkItems.className = 'main-box__pokemon-card';
    cardContainer.appendChild(linkItem);
  }
}
