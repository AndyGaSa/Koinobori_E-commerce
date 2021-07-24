function getPokemons() {
  fetch('https://pokeapi.co/api/v2/pokemon?offset=120&limit=20')
    .then((response) => response.json())
    .then((data) => console.log(data));
}
