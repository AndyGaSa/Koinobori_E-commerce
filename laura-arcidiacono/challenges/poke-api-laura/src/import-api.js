const pokeArray = [];

function getPokesFromApi() {
  if (pokeArray.length === 0) {
    for (let i = 1; i < 350; i += 1) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((response) => response.json())
        .then((data) => pokeArray.push(data));
    }
    console.log(pokeArray);// TODO erase console.log()
  }
}
getPokesFromApi();
