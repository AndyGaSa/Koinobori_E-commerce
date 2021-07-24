function getPokemons(limit, offset) {
  return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then((response) => response.json())
    .then((pokemons) => pokemons);
    }
let pokemonList;
let pokedexArray = [];
const pokeApiCall = getPokemons(10,00)
.then((pokemons) => {pokemonList = pokemons;})
.then(() => {
    pokemonList = pokemonList.results;
    const pokedexLocalCheck = localStorage.getItem('pokedex');
    if (pokedexLocalCheck === null) {
        localStorage.setItem('pokedex', JSON.stringify(pokemonList));
    }
})
.then(() => { 
    getLocalStorage();
});

