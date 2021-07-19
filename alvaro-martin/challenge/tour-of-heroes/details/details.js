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
  }

  updatePage() {
    document.getElementById('hero__id').innerHTML = this.currentHero.id;
    document.getElementById('hero__name').value = this.currentHero.superhero;
    document.getElementById('hero__title').innerHTML = this.currentHero.superhero;
    document.getElementById('hero__publisher').innerHTML = this.currentHero.publisher;
    document.getElementById('hero__ego').innerHTML = this.currentHero.alter_ego;
    document.getElementById('hero__first').innerHTML = this.currentHero.first_appearance;
    document.getElementById('hero__characters').innerHTML = this.currentHero.characters;
  }
}

const details = new DetailsPage(id, heroes);
details.updatePage();
