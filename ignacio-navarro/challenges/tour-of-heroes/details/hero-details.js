// eslint-disable-next-line prefer-const
let heroId = getId(window.location.search);
const details = new HeroDetailsClass(heroId, heroesList);
details.setView();
