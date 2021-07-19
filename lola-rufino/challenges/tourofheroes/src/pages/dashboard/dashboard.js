const heroesButtons = document.getElementById('heroes__list');

for (let index = 1; index < 5; index += 1) {
  const btn = document.createElement('button');
  heroesButtons.appendChild(btn);
  btn.innerHTML = heroes[index].superhero;
  btn.setAttribute('href', `../details/details.html?${heroes[index].id}`);
}
