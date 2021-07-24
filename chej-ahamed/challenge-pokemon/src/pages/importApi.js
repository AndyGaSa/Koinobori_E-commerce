const pokemonsArray = [];
(function getPokemonsFromApi() {
  if (pokemonsArray.length === 0) {
    for (let i = 1; i < 200; i += 1) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((reponse) => reponse.json())
        .then((data) => pokemonsArray.push(data))
        .catch((err) => console.log(err));
    }
  }

  console.log(pokemonsArray);
}());
