class HeroesPage {
  constructor(heroes) {
    this.heroes = heroes;
  }

  setview() {
    this.heroes.forEach((hero) => {
      const domParentElement = document.getElementById('heroes-list');

      const domElementLi = document.createElement('li');
      const domElementA = document.createElement('a');
      const domSpan = document.createElement('span');
      const domButton = document.createElement('button');

      domElementA.href = `../Details/details.html?slug=${hero.slug}`;
      //
      domSpan.classList.add('badge');
      domSpan.innerText = ` ${hero.id}`;
      //
      domButton.classList.add('delete');
      domButton.title = 'delete hero';
      domButton.innerText = 'x';
      //
      domElementA.appendChild(domSpan);
      domElementA.append(` ${hero.name}`);
      //
      domElementLi.appendChild(domElementA);
      domElementLi.appendChild(domButton);
      //
      domParentElement.appendChild(domElementLi);
    });
  }
}
