function transformUrlQueryToObject(searchString) {
  const response = {};
  if (searchString) {
    const queryWithoutQuestionMark = searchString.slice(1, searchString.length);
    const entries = queryWithoutQuestionMark.split('&');
    entries.forEach((entry) => {
      const [key, value] = entry.split('='); response[key] = value;
    });
  } return response.pokeName;
}

function showMe() {
  const id = document.getElementById('detail');
  const pokemonIdDetail = transformUrlQueryToObject(location.search);
  const promises = [];
  const url = 'https://pokeapi.co/api/v2/pokemon/';
  console.log(pokemonIdDetail);
  fetch(`${url}${pokemonIdDetail}`)
    .then((response) => response.json())
    .then((results) => {
      console.log(results);
      id.getElementsByClassName('detail__image')[0].src = results.sprites.front_default;
      id.getElementsByClassName('name')[0].textContent = results.name;
      id.getElementsByClassName('type')[0].textContent = results.types[0].type.name;
      id.getElementsByClassName('type')[1].textContent = results.types[1] ? results.types[1].type.name : '----';
      id.getElementsByClassName('height')[0].textContent = `height: ${results.height}cm`;
      id.getElementsByClassName('weight')[0].textContent = `weight: ${results.weight}cm`;
      id.getElementsByClassName('hp')[0].textContent = `${results.stats[0].stat.name}  =>`;
      id.getElementsByClassName('hp')[1].value = results.stats[0].base_stat;
      id.getElementsByClassName('attack')[0].textContent = `${results.stats[1].stat.name}  =>`;
      id.getElementsByClassName('attack')[1].value = results.stats[1].base_stat;
      id.getElementsByClassName('defense')[0].textContent = `${results.stats[2].stat.name}  =>`;
      id.getElementsByClassName('defense')[1].value = results.stats[2].base_stat;
      id.getElementsByClassName('special-attack')[0].textContent = `${results.stats[3].stat.name}  =>`;
      id.getElementsByClassName('special-attack')[1].value = results.stats[3].base_stat;
      id.getElementsByClassName('special-defense')[0].textContent = `${results.stats[4].stat.name}  =>`;
      id.getElementsByClassName('special-defense')[1].value = results.stats[4].base_stat;
      id.getElementsByClassName('speed')[0].textContent = `${results.stats[5].stat.name}  =>`;
      id.getElementsByClassName('speed')[1].value = results.stats[5].base_stat;
    });
}

showMe();
