const parentElement = document.getElementById('main__pokelist');
const url = 'https://pokeapi.co/api/v2/pokemon/';
let limitSelected;

function setPaginationAndPaint(limit, offset) {
  parentElement.innerHTML = '';
  for (let poke = offset; poke < limit; poke += offset) {
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
}

setPaginationAndPaint(5, 1);

function getValue() {
  limitSelected = document.getElementById('viewNum').value;
  setPaginationAndPaint(limitSelected, 1);
}

/* function beforeFn() {
   console.log('anterior');
}

function nextFn() {

} */
