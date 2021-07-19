const heroesList = document.getElementById('heroes__list');

for (let i = 10; i < heroes.length; i += 1) {
  const btn = document.createElement('button');
  heroesList.appendChild(btn);
  const heroLink = document.createElement('a');
  btn.appendChild(heroLink);
  heroLink.innerHTML = heroes[i].superhero;
  heroLink.setAttribute('href', `../Details/details.html?${heroes[i].id}`);
  btn.style.display = 'flex';
}

const addHero = document.querySelector('.addHero');

function myFunction() {
  const x = document.getElementById('myForm').value;
  heroes[heroes.length].push(x);
}
console.log(heroes[heroes.length]);
addHero.addEventListener('click', myFunction);
