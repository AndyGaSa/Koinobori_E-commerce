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

    domSpan.id = 'hero__title';
    domSpan.innerText = this.hero.name;

    domH2.appendChild(domSpan);
    domH2.append(' Details');
    domParent.appendChild(domH2);
  }

  setId(domParent) {
    const domDiv = document.createElement('div');
    const domLabelSpan = document.createElement('span');
    const domIdSpan = document.createElement('span');

    domLabelSpan.innerText = 'Id: ';
    domIdSpan.id = 'hero__id';
    domIdSpan.innerText = this.hero.id;

    domDiv.appendChild(domLabelSpan);
    domDiv.appendChild(domIdSpan);
    domParent.appendChild(domDiv);
  }

  setName(domParent) {
    const domDiv = document.createElement('div');
    const domLabel = document.createElement('label');
    const domInput = document.createElement('input');

    domLabel.innerText = 'Hero name: ';
    domLabel.htmlFor = 'hero-name';

    domInput.id = 'hero-name';
    domInput.type = 'text';
    domInput.placeholder = 'Hero name';
    domInput.value = this.hero.name;

    domDiv.appendChild(domLabel);
    domDiv.appendChild(domInput);
    domParent.appendChild(domDiv);
  }

  setSlug(domParent) {
    const domDiv = document.createElement('div');

    domDiv.classList.add('detail-element');
    domDiv.innerText = `slug: ${this.hero.slug}`;

    domParent.appendChild(domDiv);
  }

  setpowerStats(domParent) {
    const domDiv = document.createElement('ul');
    const objectKeys = Object.keys(this.hero.powerstats);

    domDiv.classList.add('detail-element');
    domDiv.innerText = 'powerstats: ';

    objectKeys.forEach((key) => {
      const domParagraph = document.createElement('li');
      domParagraph.classList.add('detail-sub-element');
      domParagraph.innerText = (`${key}: ${this.hero.powerstats[key]}`);
      domDiv.appendChild(domParagraph);
    });

    domParent.appendChild(domDiv);
  }

  setAppearance(domParent) {
    const domDiv = document.createElement('ul');
    const objectKeys = Object.keys(this.hero.appearance);

    domDiv.classList.add('detail-element');
    domDiv.innerText = 'appearance: ';

    objectKeys.forEach((key) => {
      const domParagraph = document.createElement('li');
      domParagraph.classList.add('detail-sub-element');
      domParagraph.innerText = (`${key}: ${this.hero.appearance[key]}`);
      domDiv.appendChild(domParagraph);
    });

    domParent.appendChild(domDiv);
  }

  setBiography(domParent) {
    const domDiv = document.createElement('ul');
    const objectKeys = Object.keys(this.hero.biography);

    domDiv.classList.add('detail-element');
    domDiv.innerText = 'biography: ';

    objectKeys.forEach((key) => {
      const domParagraph = document.createElement('li');
      domParagraph.classList.add('detail-sub-element');
      domParagraph.innerText = (`${key}: ${this.hero.biography[key]}`);
      domDiv.appendChild(domParagraph);
    });

    domParent.appendChild(domDiv);
  }

  setWork(domParent) {
    const domDiv = document.createElement('ul');
    const objectKeys = Object.keys(this.hero.work);

    domDiv.classList.add('detail-element');
    domDiv.innerText = 'work: ';

    objectKeys.forEach((key) => {
      const domParagraph = document.createElement('li');
      domParagraph.classList.add('detail-sub-element');
      domParagraph.innerText = (`${key}: ${this.hero.work[key]}`);
      domDiv.appendChild(domParagraph);
    });

    domParent.appendChild(domDiv);
  }

  setConnections(domParent) {
    const domDiv = document.createElement('ul');
    const objectKeys = Object.keys(this.hero.connections);

    domDiv.classList.add('detail-element');
    domDiv.innerText = 'connections: ';

    objectKeys.forEach((key) => {
      const domParagraph = document.createElement('li');
      domParagraph.classList.add('detail-sub-element');
      domParagraph.innerText = (`${key}: ${this.hero.connections[key]}`);
      domDiv.appendChild(domParagraph);
    });

    domParent.appendChild(domDiv);
  }

  setImages(domParent) {
    const domImg = document.createElement('img');
    const objectKeys = Object.keys(this.hero.images);

    domImg.classList.add('detail-img');
    domImg.src = this.hero.images[objectKeys[3]];

    domParent.appendChild(domImg);
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
