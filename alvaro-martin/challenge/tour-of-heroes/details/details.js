function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
const id = getParameterByName('id');

class DetailsPage {
  constructor(id, heroes) {
    this.id = id;
    this.currentHero = heroes.find((hero) => hero.id === id);
    this.powerstatsValues = Object.entries(this.currentHero.powerstats);
    this.appearance = Object.entries(this.currentHero.appearance);
  }

  updatePage() {
    document.getElementById('hero__id').innerHTML = this.currentHero.id;
    document.getElementById('hero__name').value = this.currentHero.name;
    document.getElementById('hero__slug').innerHTML = this.currentHero.slug;
    const fatherPower = document.getElementById('hero__description__power');
    for (let index = 0; index < this.powerstatsValues.length; index += 1) {
      const newLi = document.createElement('li');
      const newContect = document.createTextNode(`${this.powerstatsValues[index][0]}: ${this.powerstatsValues[index][1]}`);
      console.log(this.powerstatsValues[index]);
      newLi.appendChild(newContect);
      fatherPower.appendChild(newLi);
    }
    const fatherApperance = document.getElementById('hero__description__apperance');
    for (let index = 0; index < this.appearance.length; index += 1) {
      const newLi2 = document.createElement('li');
      const newContect2 = document.createTextNode(`${this.appearance[index][0]}: ${this.appearance[index][1]}`);
      console.log(this.appearance[index]);
      newLi2.appendChild(newContect2);
      fatherApperance.appendChild(newLi2);
    }
  }
}

const details = new DetailsPage(+id, heroes);
details.updatePage();
