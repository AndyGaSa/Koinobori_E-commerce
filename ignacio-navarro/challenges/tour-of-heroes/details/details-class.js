class HeroDetails {
  constructor(id, heroesList) {
    this.id = id;
    this.heroDetails = this.getHeroDetails(heroesList);
  }

  getHeroDetails(heroesList) {
    const result = heroesList.find((obj) => obj.id === Number(this.id));
    return result;
  }

  setViews() {
    document.getElementById('details__hero-id').innerHTML = this.id;
    document.getElementById('details__hero-name').value = this.heroDetails.name;
  }
}
