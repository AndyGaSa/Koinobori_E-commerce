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
    document.getElementById('details__hero-name').value = this.heroDetails.name;
    printHeroSections(this.heroDetails);
  }
}

function printHeroSections(details) {
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
}

module.exports = HeroDetails;
