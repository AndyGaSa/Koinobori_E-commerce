let offset = 00;
const quantity = 10;

let currentList = JSON.parse(localStorage.getItem('pokemonList'));

function printPokemonList(pokemonArray) {
    
  const listParent = document.getElementById('pokemon-list');
  listParent.innerHTML = '';
  console.log(pokemonArray);
  pokemonArray.forEach((element) => {
    offset += 1
    listParent.innerHTML += `
    <a href="../details/details.html?id=${offset}">
        <span>${offset}</span>
        <label for="">${element.name}</label>
    </a>`;
   ;
   localStorage.setItem('offset',JSON.stringify(offset))
  });
}
function pokemonList() {
    let offset = JSON.parse(localStorage.getItem('offset'));
    getPokemonList(offset, quantity).then((pokemonListData) => {
    localStorage.setItem('pokemonList', JSON.stringify(pokemonListData));
    currentList = JSON.parse(localStorage.getItem('pokemonList'));
    printPokemonList(currentList.results);
  });
}

printPokemonList(currentList.results);