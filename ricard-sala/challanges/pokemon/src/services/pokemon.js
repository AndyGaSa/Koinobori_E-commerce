const pokedex = document.getElementById('pokedex');
const fetchPokemon = () => {
  const promises = [];
  for (let index = 1; index <= 150; index += 1) {
    const url = `https://pokeapi.co/api/v2/pokemon/${index}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  Promise.all(promises).then((results) => {
    const pokemon = results.map((result) => ({
      name: result.name,
      image: result.sprites.front_default,
      id: result.id,

    }));
    displayPokemon(pokemon);
  });
};
const displayPokemon = (pokemon) => {
  const pokemonHTMLString = pokemon
    .map(

      (pokemos) => `
        <a class="card ${pokemos.type}" href="../detail/detail.html?pokeName=${pokemos.id}"  >
            <img class="card-image" src="${pokemos.image}"/>
            <h2 class="card-title">${pokemos.id}. ${pokemos.name}</h2>
        </a>
    `,
    )
    .join('');
  console.log(pokedex);

  // document.querySelector('detail').innerHTML = pokemonHTMLString;
  pokedex.innerHTML = pokemonHTMLString;
};

fetchPokemon();
