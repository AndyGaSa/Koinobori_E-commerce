class DetailsPage {
  constructor(superHeroes, id, slug) {
    this.id = id;
    this.slug = slug;
    this.findHero(superHeroes);
  }

  findHero(superHeroes) {
    if (this.id) {
      this.hero = superHeroes.find((hero) => hero.id === this.id);
    } else if (this.slug) {
      this.hero = superHeroes.find((hero) => hero.slug === this.slug);
    }
  }

  paintId() {
    document.getElementById('hero__id').innerHTML = this.hero.id;
  }

  paintTitle() {
    document.getElementById('hero__title').innerHTML = this.hero.name;
  }

  paintName() {
    document.getElementById('hero__name').value = this.hero.name;
  }

  paintSlug() {
    document.getElementById('hero__slug').value = this.hero.slug;
  }

  paintPowerStats() {
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

  paintAppearance() {
    document.getElementById('appearance__gender').innerText = this.hero.appearance.gender;
    document.getElementById('appearance__race').innerText = this.hero.appearance.race;
    document.getElementById('appearance__height').innerText = `${this.hero.appearance.height[1]} (${this.hero.appearance.height[0]})`;
    document.getElementById('appearance__weight').innerText = `${this.hero.appearance.weight[1]} (${this.hero.appearance.weight[0]})`;
    document.getElementById('appearance__eye-color').innerText = this.hero.appearance.eyeColor;
    document.getElementById('appearance__hair-color').innerText = this.hero.appearance.hairColor;
  }

  paintBiography() {
    document.getElementById('biograbphy__full-name').innerText = this.hero.biography.fullName;
    document.getElementById('biograbphy__alter-egos').innerText = this.hero.biography.alterEgos;

    this.aliases.forEach((alias) => {
      const element = document.createElement('li');
      element.innerText = { alias };
      const parentElement = document.getElementById('biograbphy__aliases');
      parentElement.appendChild(element);
    });
    document.getElementById('biograbphy__place-birth').innerText = this.hero.biography.placeOfBirth;
    document.getElementById('biograbphy__first-appearance').innerText = this.hero.biography.firstApperance;
    document.getElementById('biograbphy__publisher').innerText = this.hero.biography.publisher;
    document.getElementById('biograbphy__alignment').innerText = this.hero.biography.alignment;
  }

  paintWork() {
    this.ocuppation.forEach((job) => {
      const element = document.createElement('li');
      element.innerText = { job };
      const parentElement = document.getElementById('work__occupation');
      parentElement.appendChild(element);
    });
    document.getElementById('work__base').innerText = this.hero.work.base;
  }

  paintSetConnections() {
    const groupAffiliations = this.hero.connections.groupAffiliation.split('; ');
    groupAffiliations.forEach((affiliation) => {
      const element = `<li>${affiliation}</li>`;
      document.getElementById('connections__groupAffiliation').innerHTML += element;
    });
    const relatives = this.hero.connections.relatives.split('; ');
    relatives.forEach((relative) => {
      const element = `<li>${relative.replace(';', '')}</li>`;
      document.getElementById('connections__relatives').innerHTML += element;
    });
  }

  paintImage() {
    const image = document.getElementById('hero__image');
    image.src = this.hero.images.sm;
    image.alt = `${this.hero.name} photo`;
  }

  paintHeroDetails() {
    this.paintTitle();
    this.paintId();
    this.paintName();
    this.paintSlug();
    this.paintPowerStats();
    this.paintAppearance();
    this.paintBiography();
    this.paintWork();
    this.paintSetConnections();
    this.paintImage();
  }
}

module.exports = DetailsPage;
