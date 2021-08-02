const pokeListArray = [];
function getPokemonList(limit, offset) {
  return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then((response) => response.json())
    .then(({ results }) => {
      const pokePromises = results.map((element) => {
        fetch(element.url).then((response) => response.json())
          .then((obj) => pokeListArray.push({
            name: obj.name,
            number: obj.id,
            img: obj.sprites.front_default,
            type: obj.types[0].type.name,
            hp: obj.stats[0].base_stat,
            attack: obj.stats[1].base_stat,
            defense: obj.stats[2].base_stat,
            special_attack: obj.stats[3].base_stat,
            special_defense: obj.stats[4].base_stat,
            speed: obj.stats[5].base_stat,
            height: obj.height,
            weight: obj.weight
          }))
          .then(() => { localStorage.setItem('pokemon', JSON.stringify(pokeListArray)); });
      });
    });
}
getPokemonList(150, 0);
