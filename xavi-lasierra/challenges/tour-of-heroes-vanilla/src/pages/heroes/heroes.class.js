class HeroesPage {
  constructor(heroes) {
    this.heroList = heroes;
  }

  setView() {
    this.heroList.forEach((hero) => {
      const element = `<li id="hero-list${hero.id}">
          <a href="../details/details.html?id=${hero.id}">
            <span class="badge">${hero.id}</span> ${hero.name}
          </a>
          <button class="delete" onclick="deleteHeroFromList(${hero.id})">x</button>
        </li>`;

      document.getElementById('hero-list').innerHTML += element;
    });
  }

  setNewView(newHero) {
    this.heroList.push(newHero);
    const element = `<li id="hero-list${newHero.id}">
        <a href="../details/details.html?id=${newHero.id}">
          <span class="badge">${newHero.id}</span> ${newHero.name}
        </a>
        <button class="delete" onclick="deleteHeroFromList(${newHero.id})">x</button>
      </li>`;

    document.getElementById('hero-list').innerHTML += element;
  }

  resetPage(newHeroes) {
    this.heroList = newHeroes;
    document.getElementById('hero-list').innerHTML = '';
    this.setView();
  }
}

module.exports = HeroesPage;
