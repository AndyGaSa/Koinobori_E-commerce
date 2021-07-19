const heroesList = document.getElementById('heroes__list');
for (let index = 0; index < heroes.length; index += 1) {
  const heroLink = document.createElement('a');
  heroesList.appendChild(heroLink);
  heroLink.innerHTML = heroes[index].superhero;
  heroLink.setAttribute('href', `../details/details.html?${heroes[index].id}`);
}
