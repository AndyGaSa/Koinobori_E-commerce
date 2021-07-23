class DetailsPage {
  constructor(id, heroes) {
    this.id = id;
    this.hero = heroes?.find((hero) => hero.id === id);
  }

  setView() {
    document.getElementById('hero__title').innerHTML = this.hero.name;
    document.getElementById('hero__id').innerHTML = this.hero.id;
    document.getElementById('hero__name').value = this.hero.name;
  }

  /*
  setViewSlug() {
    document.getElementById('information__slug').innerHTML = null;
  }

  setViewPowerstats() {
    document.getElementById('information__Powerstats').innerHTML = null;   
  }

  setViewAppearance() {
    document.getElementById('information__appearance').innerHTML = null; 
  }

  setViewBiography() {
    document.getElementById('information__biography').innerHTML = null; 
  }

  setViewWork() {
    document.getElementById('information__work').innerHTML = null; 
  }

  SetViewConnections() {
    document.getElementById('information__connections').innerHTML = null; 
  }
  */
}
