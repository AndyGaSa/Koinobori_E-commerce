localStorage.setItem('heroes', JSON.stringify(heroesArray));
let heroes = localStorage.getItem('heroes');
heroes = JSON.parse(heroes);
document.getElementsByClassName('prueba').innerHTML = 'hp;';

class Hero {
  constructor(id, heroes) {
    this.id = heroes[id].id;
    this.href = `../details/details.html?id=${this.id}`;
    this.currentHero = heroes[id];
  }

  addContent() {
    const fatherUl = document.getElementById('heroes__ul');
    const newLi = document.createElement('li');
    const newA = document.createElement('a');
    const newSpan = document.createElement('span');
    const newButton = document.createElement('button');
    newButton.className = 'delete';
    newSpan.className = 'badge';
    fatherUl.appendChild(newLi);
    const newContent = document.createTextNode(this.currentHero.name);
    newA.appendChild(newSpan);
    newA.appendChild(newContent);
    const spanContent = document.createTextNode(this.currentHero.id);
    const buttonContent = document.createTextNode('x');
    newSpan.appendChild(spanContent);
    newButton.appendChild(buttonContent);
    newLi.appendChild(newA);
    newLi.appendChild(newButton);
    newA.setAttribute('href', this.href);
  }
}
for (let id = 0; id < heroes.length; id += 1) {
  const heroLi = new Hero(+id, heroes);
  heroLi.addContent();
}
const addButton = document.getElementById('add-button');
addButton.addEventListener('click', () => {
  const addInput = document.getElementById('new-hero__input');
  let { id } = heroes[heroes.length - 1];
  id += 1;
  console.log(id);
  const name = addInput.value;
  console.log(name);
  const newHero = { id, name };
  heroes.push(newHero);
  console.log(heroes);
  localStorage.setItem('heroes', JSON.stringify(heroes));
  heroes = localStorage.getItem('heroes');
  heroes = JSON.parse(heroes);
  const heroLi = new Hero([heroes.length - 1], heroes);
  heroLi.addContent();
});
