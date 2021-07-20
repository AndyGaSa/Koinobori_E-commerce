class DetailsPage {
  constructor(id, heroes) {
    this.id = id;
    this.hero = heroes?.find((hero) => hero.id === id);
  }



  setId(){
    document.getElementById('hero__id').innerHTML = this.hero.id;
  }
  setName(){
    document.getElementById('hero__title').innerHTML = this.hero.name;
    document.getElementById('hero__name').value = this.hero.name;
  }
  setSlug(){
    document.getElementById('hero__slug').innerHTML = this.hero.slug;
  }
  setPowerstats(){
    const parentElement = document.getElementById('hero__powerstats');

    for (const property in this.hero.powerstats){
      const elements = document.createElement('li');
      elements.innerText = `${property}:${this.hero.powerstats[property]}`;
      parentElement.appendChild(elements);

    };
  }
  setAppearance(){
    const parentElement = document.getElementById('hero__appearance');

    for (const property in this.hero.appearance){
      const elements = document.createElement('li');
      elements.innerText = `${property}:${this.hero.appearance[property]}`;
      parentElement.appendChild(elements);

    };
  }
  setBiography(){
    const parentElement = document.getElementById('hero__biography');

    for (const property in this.hero.biography){
      const elements = document.createElement('li');
      elements.innerText = `${property}:${this.hero.biography[property]}`;
      parentElement.appendChild(elements);

    };
  }
  setWork(){
    const parentElement = document.getElementById('hero__work');

    for (const property in this.hero.work){
      const elements = document.createElement('li');
      elements.innerText = `${property}:${this.hero.work[property]}`;
      parentElement.appendChild(elements);

    };
  }
  setConnections(){
    const parentElement = document.getElementById('hero__connections');

    for (const property in this.hero.connections){
      const elements = document.createElement('li');
      elements.innerText = `${property}:${this.hero.connections[property]}`;
      parentElement.appendChild(elements);

    };
  }
  setImages(){
    const parentElement = document.getElementById('hero__images');

      const elements = document.createElement('img');
      elements.src = this.hero.images.md;
      parentElement.appendChild(elements);
    
  }


  setView() {
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
}

module.exports = DetailsPage;
