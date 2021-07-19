const heroesList = document.getElementById('my-heroes__list');

for (let index = 0; index < heroes.length; index += 1) {
  const heroElement = document.createElement('a');
  heroElement.setAttribute('href', `./details/details.html?heroId=${heroes[index].id}`);
  heroesList.appendChild(heroElement);
}
