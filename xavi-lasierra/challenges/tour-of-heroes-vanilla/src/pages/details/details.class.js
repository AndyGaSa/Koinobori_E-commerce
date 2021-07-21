class DetailsPage {
  constructor(id, slug, heroes) {
    this.id = id;
    this.slug = slug;
    this.setHero(heroes);
  }

  setHero(heroes) {
    if (this.id) {
      this.hero = heroes.find((hero) => hero.id === this.id);
    } else if (this.slug) {
      this.hero = heroes.find((hero) => hero.slug === this.slug);
    }
  }

  setView() {
    this.setMainInfo();
    this.setPowerStats();
    this.setAppearance();
    this.setBiography();
    this.setWork();
    this.setConnections();
    this.setImage();
  }

  setMainInfo() {
    document.getElementById('hero__title').innerText = this.hero.name;
    document.getElementById('hero__id').innerText = this.hero.id;
    document.getElementById('hero__slug').innerText = this.hero.slug;
    document.getElementById('hero__name').value = this.hero.name;
  }

  setPowerStats() {
    document.getElementById('powerstats__intelligence-bar').value = this.hero.powerstats.intelligence;
    document.getElementById('powerstats__intelligence-text').innerText = this.hero.powerstats.intelligence;
    document.getElementById('powerstats__strength-bar').value = this.hero.powerstats.strength;
    document.getElementById('powerstats__strength-text').innerText = this.hero.powerstats.strength;
    document.getElementById('powerstats__speed-bar').value = this.hero.powerstats.speed;
    document.getElementById('powerstats__speed-text').innerText = this.hero.powerstats.speed;
    document.getElementById('powerstats__durability-bar').value = this.hero.powerstats.durability;
    document.getElementById('powerstats__durability-text').innerText = this.hero.powerstats.durability;
    document.getElementById('powerstats__power-bar').value = this.hero.powerstats.power;
    document.getElementById('powerstats__power-text').innerText = this.hero.powerstats.power;
    document.getElementById('powerstats__combat-bar').value = this.hero.powerstats.combat;
    document.getElementById('powerstats__combat-text').innerText = this.hero.powerstats.combat;
  }

  setAppearance() {
    document.getElementById('appearance__gender').innerText = this.hero.appearance.gender;
    document.getElementById('appearance__race').innerText = this.hero.appearance.race;
    document.getElementById('appearance__height').innerText = `${this.hero.appearance.height[1]} (${this.hero.appearance.height[0]})`;
    document.getElementById('appearance__weight').innerText = `${this.hero.appearance.weight[1]} (${this.hero.appearance.weight[0]})`;
    document.getElementById('appearance__eye-color').innerText = this.hero.appearance.eyeColor;
    document.getElementById('appearance__hair-color').innerText = this.hero.appearance.hairColor;
  }

  setBiography() {
    document.getElementById('biography__fullName').innerText = this.hero.biography.fullName;
    document.getElementById('biography__alterEgos').innerText = this.hero.biography.alterEgos;
    this.hero.biography.aliases.forEach((alias) => {
      const element = `<li>${alias}</li>`;
      document.getElementById('biography__aliases').innerHTML += element;
    });
    document.getElementById('biography__placeOfBirth').innerText = this.hero.biography.placeOfBirth;
    document.getElementById('biography__firstAppearance').innerText = this.hero.biography.firstAppearance;
    document.getElementById('biography__publisher').innerText = this.hero.biography.publisher;
    document.getElementById('biography__alignment').innerText = this.hero.biography.alignment;
  }

  setWork() {
    const occupations = this.hero.work.occupation.split('; ');
    occupations.forEach((occupation) => {
      const element = `<li>${occupation}</li>`;
      document.getElementById('work__occupation').innerHTML += element;
    });
    const bases = this.hero.work.base.split('; ');
    bases.forEach((base) => {
      const element = `<li>${base}</li>`;
      document.getElementById('work__base').innerHTML += element;
    });
  }

  setConnections() {
    const groupAffiliations = this.hero.connections.groupAffiliation.split('; ');
    groupAffiliations.forEach((affiliation) => {
      const element = `<li>${affiliation}</li>`;
      document.getElementById('connections__groupAffiliation').innerHTML += element;
    });

    let { relatives } = this.hero.connections;
    if (relatives.indexOf(';') !== -1) {
      relatives = relatives.split('; ');
      console.log('hello');
    } else {
      relatives = relatives.split(', ');
    }
    relatives.forEach((relative) => {
      const element = `<li>${relative.replace(';', '')}</li>`;
      document.getElementById('connections__relatives').innerHTML += element;
    });
  }

  setImage() {
    const image = document.getElementById('hero__image');
    image.src = this.hero.images.sm;
    image.alt = `${this.hero.name} photo`;
  }
}

module.exports = DetailsPage;
