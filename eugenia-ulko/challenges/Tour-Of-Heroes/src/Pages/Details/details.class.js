class DetailsPage {
  constructor(id, slug, heroes) {
    this.id = id;
    this.slug = slug;
    this.setHero(heroes);
  }

  setHero(heroes) {
    if (this.id) {
      this.hero = heroes.find(hero) => hero.id === this.id);
    } else if (this.slug) {
      this.hero = heroes.find(hero) => hero.slug === this.slug);
    }
  }

  setId() {  //
    document.getElementById('hero__id').innerHTML = this.hero.id;
  }

  setName() {  //
    document.getElementById('hero__title').innerHTML = this.hero.title;  
    document.getElementById('hero__name').value = this.hero.name;
  }

  setSlug() {  //
    document.getElementById('hero__slug').innerText = this.hero.slug;  
  }

  setPowerstats() {
    const parentElement = document.getElementById("hero_powerstats");
    for (const key in this.hero.powerstats) {
      const element = document.createElement("li");
      parentElement.appendChild(element);
      element.innerHTML = `${key} : ${this.hero.powerstats[key]}`;
    }
  }

  setAppearance() {
    const parentElement = document.getElementById("hero_appearance");
    for (const key in this.hero.appearance) {
      const element = document.createElement("li");
      parentElement.appendChild(element);
      element.innerHTML = `${key} : ${this.hero.appearance[key]}`
    }
  }

        setBiography() {  //
          const parentElement = document.getElementById("hero_biography");
          for (const key in this.hero.biography) {
            const element = document.createElement("li");
            parentElement.appendChild(element);
            element.innerHTML = `${key} : ${this.hero.biography[key]}`;
          }
        }

  setWork() {  //
    document.getElementById('hero__slug').innerText = this.hero.slug;  
  }

  setConnections() {  //
    document.getElementById('hero__slug').innerText = this.hero.slug;  
  }

  setImages() {  //
    document.getElementById('hero__slug').innerText = this.hero.slug;  
  }

    };

setView() {
  document.getElementById('hero__title').innerHTML = this.hero.name;
  document.getElementById('hero__id').innerHTML = this.hero.id;
  document.getElementById('hero__name').value = this.hero.name;
  this.setId();
  this.setName();
  this.setSlug();
  this.setPowerstats();
  this.setAppearance();
  this.setBiography();
  this.setWork();
  this.setConnections();
  this.setImages();
}

module.exports = DetailsPage;

/*
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
}

module.exports = DetailsPage;

*/

