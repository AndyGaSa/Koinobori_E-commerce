class DetailsPage {
  constructor(id, slug, heroes) {
    this.id = id;
    this.slug = slug;
    this.hero = this.searchIdOrSlug(heroes);
  }

  searchIdOrSlug(heroes) {
    let heroFound;
    if (this.id) {
      heroFound = heroes?.find((hero) => hero.id === this.id);
    } else if (this.slug) {
      heroFound = heroes?.find((hero) => hero.slug === this.slug);
    } else {
      heroFound = {};
    }
    return heroFound;
  }

  setTitle(domParent) {
    const domH2 = document.createElement('h2');
    const domSpan = document.createElement('span');
    //
    domSpan.id = 'hero__title';
    domSpan.innerText = this.hero.name;
    //
    domH2.appendChild(domSpan);
    domH2.append(' Details');
    domParent.appendChild(domH2);
  }

  setId(domParent) {
    const domDiv = document.createElement('div');
    const domLabelSpan = document.createElement('span');
    const domIdSpan = document.createElement('span');
    //
    domLabelSpan.innerText = 'Id: ';
    domIdSpan.id = 'hero__id';
    domIdSpan.innerText = this.hero.id;
    //
    domDiv.appendChild(domLabelSpan);
    domDiv.appendChild(domIdSpan);
    domParent.appendChild(domDiv);
  }

  setName(domParent) {
    const domDiv = document.createElement('div');
    const domLabel = document.createElement('label');
    const domInput = document.createElement('input');
    //
    domLabel.innerText = 'Hero name: ';
    domLabel.htmlFor = 'hero-name';
    //
    domInput.id = 'hero-name';
    domInput.type = 'text';
    domInput.placeholder = 'Hero name';
    domInput.value = this.hero.name;
    //
    domDiv.appendChild(domLabel);
    domDiv.appendChild(domInput);
    domParent.appendChild(domDiv);
  }

  setSlug(domParent) {}

  setpowerStats() {
    // intelligence: 38,
    // strength: 100,
    // speed: 17,
    // durability: 80,
    // power: 24,
    // combat: 64
  }

  setAppearance(domParent) {
  // gender: 'Male',
  // race: 'Human',
  // height: ["6'8", '203 cm'],
  // weight: ['980 lb', '441 kg'],
  // eyeColor: 'Yellow',
  // hairColor: 'No Hair'
  }

  setBiography(domParent) {
  // fullName: 'Richard Milhouse Jones',
  // alterEgos: 'No alter egos found.',
  // aliases: ['Rick Jones'],
  // placeOfBirth: 'Scarsdale, Arizona',
  // firstAppearance: 'Hulk Vol 2 #2 (April, 2008) (as A-Bomb)',
  // publisher: 'Marvel Comics',
  // alignment: 'good'
  }

  setWork(domParent) {
  // occupation: 'Musician, adventurer, author; formerly talk show host',
  // base: '-'
  }

  setConnections(domParent) {
  // groupAffiliation: 'Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom',
  // relatives: 'Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Keith Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother; unconfirmed)'
  }

  setImages(domParent) {
    //   xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/1-a-bomb.jpg',
    //   sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/1-a-bomb.jpg',
    //   md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/1-a-bomb.jpg',
    //   lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/1-a-bomb.jpg'
  }

  setView(domParent) {
    this.setTitle(domParent);
    this.setId(domParent);
    this.setName(domParent);
    this.setSlug(domParent);
    this.setpowerStats(domParent);
    this.setAppearance(domParent);
    this.setBiography(domParent);
    this.setWork(domParent);
    this.setConnections(domParent);
    this.setImages(domParent);
  }
}

module.exports = DetailsPage;
