class HeroesPage {
  constructor(heroes) {
    this.heroList = [];
    heroes.forEach((hero) => {
      this.heroList.push({ id: hero.id, superhero: hero.superhero });
    });
  }

  setView() {
    this.heroList.forEach((hero) => {
      const element = document.createElement('a');
      element.setAttribute('href', `../details/details.html?id=${hero.id}`);
      element.setAttribute('class', 'heroes');
      element.innerHTML = `<span class="badge">${hero.id}</span>${hero.superhero}`;
      document.getElementById('hero-list').append(element);
    });
  }
}

module.exports = HeroesPage;
