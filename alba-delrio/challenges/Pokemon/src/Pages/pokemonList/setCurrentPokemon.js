function setCurrentPokemon(event) {
  console.log(event.target.parentElement.innerText);
  const currentPokemon = pokemon.find((pokemon, i) => {
    if (pokemon.name === event.target.parentElement.innerText) { return true; }
  });

  localStorage.setItem('currentPokemon', JSON.stringify(currentPokemon));
}
