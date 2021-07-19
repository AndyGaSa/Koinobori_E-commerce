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
    document.getElementById('hero_id').innerHTML = this.currentHero.id;
    document.getElementById('hero_name').value = this.currentHero.superhero;
    document.getElementById('hero_title').innerHTML = this.currentHero.superhero;
  }
}
const details = new DetailsPage(id, heroes);
details.updatePage();
