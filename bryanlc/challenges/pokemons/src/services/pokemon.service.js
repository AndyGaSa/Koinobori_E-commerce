function obtenerPokemons(cantidad = 151) {
  const parentElement = document.getElementById('cartas__pokemon');
  parentElement.innerHTML = '';
  const storePokemons = [];
  for (let i = 0; i < cantidad; i += 1) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then((response) => response.json())
      .then((resultData) => {
        setView(resultData);
        storePokemons.push(resultData);
      })
      .catch((error) => new Error(error));
  }
  localStorage.setItem('pokemons', JSON.stringify(storePokemons));
}

obtenerPokemons();

function setView(pokemon) {
  const cartasPoquemons = document.getElementById('cartas__pokemon');

  const carta = document.createElement('a');
  carta.href = `../detail/detail.html?pokemonId=${pokemon.id}`;
  carta.className = 'carta';

  const imgCarta = document.createElement('img');
  imgCarta.src = pokemon.sprites.front_default;
  carta.append(imgCarta);

  const tituloCarta = document.createElement('h2');
  tituloCarta.innerText = pokemon.name;
  carta.append(tituloCarta);

  const subtituloCarta = document.createElement('h3');
  subtituloCarta.innerText = pokemon.id;
  carta.append(subtituloCarta);

  cartasPoquemons.append(carta);
}
