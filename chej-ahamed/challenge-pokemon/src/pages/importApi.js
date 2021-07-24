const pokemons = [];
for (let i = 0; i < 200; i += 1) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((reponse) => reponse.json())
    .then((data) => pokemons.push(data))
    .catch((err) => console.log(err));
}
