function reloadPokeApiFull() {
  return fetch('https://pokeapi.co/api/v2/pokemon?limit=1119&offset=0')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      alert('There is a problem downloading data from PokeApi. Check your connection and your browser configuration.');
      return response.status;
    })
    .then((data) => {
      localStorage.setItem('allPokes', JSON.stringify(data.results));
      localStorage.setItem('numPokemons', data.count);
      // return data;
    })
    .catch((error) => {
      throw new Error(`Error downloading: status --> ${error.status}`);
    });
}

function getPokemonInfo(url) {
  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      alert('There is a problem downloading data from PokeApi. Check your connection and your browser configuration.');
      return response.status;
    })
    .then((data) => data)
    .catch((error) => {
      throw new Error(`Error downloading: status --> ${error.status}`);
    });
}
