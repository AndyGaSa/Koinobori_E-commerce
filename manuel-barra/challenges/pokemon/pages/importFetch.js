const pokemons = [];
function pokesFromApi() {
  if (pokemons.length === 0) {
    for (let i = 1; i < 250; i += 1) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((response) => response.json())
        .then((data) => pokemons.push(data))
        .catch((err) => console.log(err));
    }
  }
}
pokesFromApi();
