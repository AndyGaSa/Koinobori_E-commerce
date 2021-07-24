class HeroesPage {
  constructor(heroes) {
    this.heroes = heroes;
  }

  setview() {
    const domParentElement = document.getElementById('heroes-list');
    domParentElement.innerHTML = '';

    this.heroes.forEach((hero) => {
      const domElementLi = document.createElement('li');
      const domElementA = document.createElement('a');
      const domSpan = document.createElement('span');
      const domButton = document.createElement('button');

      domElementA.href = `../Details/details.html?id=${hero.id}`;

      domSpan.classList.add('badge');
      domSpan.innerText = ` ${hero.id}`;

      domButton.classList.add('delete');
      domButton.title = 'delete hero';
      domButton.innerText = 'x';
      domButton.onclick = () => { deleteItem(domElementA.href); };

      domElementA.appendChild(domSpan);
      domElementA.append(` ${hero.name}`);

      domElementLi.appendChild(domElementA);
      domElementLi.appendChild(domButton);

      domParentElement.appendChild(domElementLi);
    });
  }

  delete(id) {
    const heroIndex = this.heroes.findIndex((hero) => hero.id === id);
    if (heroIndex >= 0) {
      this.heroes.splice(heroIndex, 1);
      return true;
    }
    return false;
  }

  updateStorage() {
    localStorage.setItem('heroes', JSON.stringify(this.heroes));
  }

  getStorage() {
    this.heroes = JSON.parse(localStorage.getItem('heroes'));
  }
}
