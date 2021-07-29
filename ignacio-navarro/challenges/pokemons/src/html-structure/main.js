const test = (getPokemons(100, 20).then((pokemons) => {
  localStorage.setItem('pokemons', JSON.stringify(pokemons));
}));
