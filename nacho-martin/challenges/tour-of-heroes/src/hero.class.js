class Hero {
  constructor(heroes) {
    this.allMyHeroes = [];
    for (let index = 0; index < heroes.length; index += 1) {
      this.allMyHeroes.push({ id: heroes[index].id, superhero: heroes[index].superhero });
    }
  }

  giveMeHeroes() {
    const page = document.querySelector('#heroesList');
    page.classList.add('link-container');
    this.allMyHeroes.forEach((hero) => {
      const link = document.createElement('a');
      link.setAttribute('href', `../Details/details.html?id=${hero.id}`);
      link.innerHTML = hero.superhero;
      page.appendChild(link);
    });
  }
}
