const heroesList = document.getElementById('heroes__list');

for (let i = 0; i < heroes.length; i += 1) {
  const heroLink = document.createElement('a');
  heroesList.appendChild(heroLink);
  heroLink.innerHTML = heroes[i].superhero;
  heroLink.setAttribute('href', `../Details/details.html?${heroes[i].id}`);
}
