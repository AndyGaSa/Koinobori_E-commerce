let heroes = localStorage.getItem('heroes');
heroes = JSON.parse(heroes);
console.log(heroes);
const id = getParameterByName('id');

class DetailsPage {
  constructor(id, heroes) {
    this.id = id;
    this.currentHero = heroes.find((hero) => hero.id === id);
    this.powerstatsValues = Object.entries(this.currentHero.powerstats);
    console.log(this.powerstatsValues);
  }

  updatePage() {
    document.getElementById('hero__id').innerHTML = this.currentHero.id;
    document.getElementById('hero__name').value = this.currentHero.name;
    document.getElementById('hero__title').innerHTML = this.currentHero.name;
    document.getElementById('hero__slug').innerHTML = this.currentHero.slug;
    const fatherPower = document.getElementById('hero__powerstats__ul');
    for (let index = 0; index < this.powerstatsValues.length; index += 1) {
      const newLi = document.createElement('li');
      const newContent = document.createTextNode(`${this.powerstatsValues[index][0]}: ${this.powerstatsValues[index][1]}`);
      newLi.appendChild(newContent);
      fatherPower.appendChild(newLi);
    }
  }
}
const details = new DetailsPage(+id, heroes);
details.updatePage();
