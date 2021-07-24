const parentElement = document.getElementById('main__pokelist');

for (let poke = 1; poke < 51; poke += 1) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
    .then((response) => response.json())
    .then((data) => {
      const newElementDiv = document.createElement('div');
      const newElementName = document.createElement('h3');
      const newElementImage = document.createElement('img');
      newElementDiv.className = 'main__poke';
      newElementName.className = 'main__poke-name';
      newElementImage.className = 'main__poke-img';
      newElementName.innerHTML = `${data.name}`;
      newElementImage.src = `${data.sprites.other.dream_world.front_default}`;
      // newElementImage.href = `` una vez creado el details, pasar el link con el número del poke
      parentElement.appendChild(newElementDiv);
      newElementDiv.appendChild(newElementName);
      newElementDiv.appendChild(newElementImage);
    })
    .catch(new Error('Something went wrong'));
}
