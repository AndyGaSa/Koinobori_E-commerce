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
    document.getElementById('create-hero').value = this.heroDetails.name;
  }

  setPowerstats() {
    const detailsSection = document.querySelector('#hero-profile');
    const parent = document.createElement('ul');
    parent.innerText = 'powerstats';
    parent.classList.add('ul-title');
    const powerstats = Object.keys(this.heroDetails.powerstats);
    detailsSection.appendChild(parent);
    powerstats.forEach((element) => {
      const childProgressBar = this.heroDetails.powerstats[element];
      const child = document.createElement('li');
      const grandchild = document.createElement('progress');
      child.innerHTML = element;
      grandchild.innerText = childProgressBar;
      grandchild.value = this.heroDetails.powerstats[element];
      grandchild.max = 100;
      parent.appendChild(child);
      child.appendChild(grandchild);
    });
  }

  setNormalBlock(section) {
    const detailsSection = document.querySelector('#hero-profile');
    const parent = document.createElement('ul');
    parent.innerText = `${section}`;
    parent.classList.add('ul-title');
    const sectionTitle = Object.keys(this.heroDetails[section]);
    detailsSection.appendChild(parent);
    sectionTitle.forEach((element) => {
      const child = document.createElement('li');
      child.innerHTML = `<strong>${element}</strong>: ${this.heroDetails[section][element]}`;
      parent.appendChild(child);
    });
    setImage() {
      const detailsSection = document.querySelector('#hero-profile');
      sectionTitle.forEach((element) => {
        const img = document.createElement('img');
        srcRoute = 
        img.src = ("")
        detailsSection.appendChild(img);
      });
  }
}

/* function printHeroSections(details) {
  const heroProperties = Object.entries(details);
  const profileDOM = document.getElementById('hero-profile');
  heroProperties.forEach((element) => {
    if (typeof element[1] === 'object') {
      const parent = document.createElement('ul');
      parent.innerHTML = element[0];
      profileDOM.appendChild(parent);
      Object.entries(element[1]).forEach((stat) => {
        const child = document.createElement('li');
        parent.appendChild(child);
        if (stat[1].length > 50) {
          const longString = stat[1].split(';');
          longString.forEach((substat) => {
            const grandchild = document.createElement('p');
            child.appendChild(grandchild);
            grandchild.innerHTML = substat;
          });
        }
        child.innerHTML = `${stat[0]}: ${stat[1]}`;
      });
    }
  });
  printHeroSectionsContents(heroProperties);
} */

module.exports = HeroDetails;
