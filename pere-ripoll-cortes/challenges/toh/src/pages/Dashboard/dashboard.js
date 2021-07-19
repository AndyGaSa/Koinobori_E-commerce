const heroesButtons = document.getElementById('heroes__list');

for (let i = 1; i < 5; i += 1) {
  const btn = document.createElement('button');
  heroesButtons.appendChild(btn);
  const anchor = document.createElement('a');
  btn.appendChild(anchor);

  btn.className = `btn_${i}`;
  anchor.innerHTML = heroes[i].superhero;
  anchor.setAttribute('href', `../Details/details.html?${heroes[i].id}`);
}
