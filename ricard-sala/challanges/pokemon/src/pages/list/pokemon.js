const pokedex = document.getElementById('pokedex');

const fetchPokemon = () => {
  const promises = [];
  for (let index = 1; index <= 150; index++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${index}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  Promise.all(promises).then((results) => {
    const pokemon = results.map((result) => ({
      name: result.name,
      image: result.sprites.front_default,
      type: result.types.map((type) => type.type.name).join(', '),
      id: result.id,
    }));
    displayPokemon(pokemon);
  });
};

const displayPokemon = (pokemon) => {
  const pokemonHTMLString = pokemon
    .map(
      (pokemos) => `
        <li class="card">
            <img class="card-image" src="${pokemos.image}"/>
            <h2 class="card-title">${pokemos.id}. ${pokemos.name}</h2>
        </li>
    `,
    )
    .join('');
  pokedex.innerHTML = pokemonHTMLString;
};

fetchPokemon();
