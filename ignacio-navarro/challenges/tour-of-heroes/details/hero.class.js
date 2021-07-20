class HeroDetailsClass {
  constructor(id, heroesArr) {
    this.id = id;
    this.name = (heroesArr?.find((hero) => hero.id === id)).superhero;
  }

  setView() {
    document.getElementById('hero-card__id').innerHTML = this.id;
    document.getElementById('hero-card__name').value = this.name;
  }
}

module.exports = HeroDetailsClass;
