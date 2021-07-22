/* class HeroesButtons {
  constructor(id) {
    this.id = heroes[id].id;
    this.href = `../details/details.html?id=${this.id}`;
    this.htmlId = `h2__link${id}`;
    this.currentHeroName = heroes[id].name;
    console.log(this.currentHeroName);
  }

  getInfo() {
    document.getElementById(this.htmlId).innerHTML = this.currentHeroName;
    document.getElementById(this.htmlId).setAttribute('href', this.href);
  }
}

for (let id = 0; id < 10; id += 1) {
  const button = new HeroesButtons(id);
  button.getInfo();
}
*/

class HeroesPage {
  constructor(heroes) {
    this.heroes = heroes;
  }

  setView() {
    this.heroes.forEach((hero) => {
      const element = `<li>
        <a href=../Details/details.html?id=${hero.id}
        <span class='badge' > ${hero.id}</span> ${hero.name} </a>
        <button id='${hero.id}' class='delete' onclick=delete(${hero.id})>x</button>
        </li>`;
      const parentElement = document.getElementById('heroes__list');
      parentElement.innerHTML += element;
    });
  }
}
(function heroesPage() {
  const heroPage = new HeroesPage(heroes);
  heroPage.setView();
}());
