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
  console.log(heroProperties);
  const profileDOM = document.getElementById('hero-profile');
  heroProperties.forEach((element) => {
    const parent = document.createElement('h2');
    const child = document.createElement('p');
    parent.innerHTML = element[0];
    child.innerHTML = Object.entries(element[1]);
    profileDOM.appendChild(parent);
    parent.appendChild(child);
  });
  printHeroSectionsContents(heroProperties);
}

module.exports = HeroDetails;
