class DashboardPage {
  constructor(heroes, initailPos, numOfHeroes, slug) {
    this.heroes = heroes;
    this.initailPos = initailPos;
    this.numOfHeroes = numOfHeroes;
    this.slug = heroes.slug;
  }

  setView() {
    const dashboardHeroes = document.getElementById('dashboard__heroes');
    for (let i = this.initailPos; i < this.initailPos + this.numOfHeroes; i += 1) {
      const element = document.createElement('a');
      element.setAttribute('id', `${this.heroes[i].id}`);
      element.href = `../Details/details.html?heroId=${this.heroes.id}`;
      element.slug = this.heroes.slug;
      element.innerHTML = `${this.heroes[i].name}`;
      dashboardHeroes.append(element);
    }
  }
}
