/* const parentElement = document.getElementById('main__pokelist');
const url = 'https://pokeapi.co/api/v2/pokemon/';

for (let poke = 1; poke < 51; poke += 1) {
  fetch(`${url}${poke}`)
    .then((response) => response.json())
    .then((data) => {
      const newElementAnchor = document.createElement('a');
      const newElementName = document.createElement('h3');
      const newElementImage = document.createElement('img');
      newElementAnchor.className = 'main__poke';
      newElementName.className = 'main__poke-name';
      newElementImage.className = 'main__poke-img';
      newElementName.innerHTML = `${data.name}`;
      newElementImage.src = `${data.sprites.other.dream_world.front_default}`;
      newElementAnchor.href = `../Details/details.html?pokemonId=${data.id}`;
      parentElement.appendChild(newElementAnchor);
      newElementAnchor.appendChild(newElementName);
      newElementAnchor.appendChild(newElementImage);
    })
    .catch(new Error('Something went wrong'));
} */

const parentElement = document.getElementById('main__pokelist');
const url = 'https://pokeapi.co/api/v2/pokemon/';

for (let poke = 1; poke < 51; poke += 1) {
  fetch(`${url}${poke}`)
    .then((response) => response.json())
    .then((data) => {
      const newElementAnchor = document.createElement('a');
      const newElementName = document.createElement('h3');
      const newElementImage = document.createElement('img');
      newElementAnchor.className = 'main__poke';
      newElementName.className = 'main__poke-name';
      newElementImage.className = 'main__poke-img';
      newElementName.innerHTML = `${data.name}`;
      newElementImage.src = `${data.sprites.other.dream_world.front_default}`;
      newElementAnchor.href = `../Details/details.html?pokemonId=${data.id}`;
      parentElement.appendChild(newElementAnchor);
      newElementAnchor.appendChild(newElementName);
      newElementAnchor.appendChild(newElementImage);
    })
    .catch(new Error('Something went wrong'));
}
