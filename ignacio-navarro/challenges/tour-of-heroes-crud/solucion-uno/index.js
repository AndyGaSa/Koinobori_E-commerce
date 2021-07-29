function dashboard() {
  return '<h1>Dashboard</h1>';
}
function heroesList() {
  return `<h1>Heroes List</h1>
  <ul>
    <li data-href="heroes/1-a-bomb">A-Bomb</li>
  </ul>
  `;
}
function heroes(hero) {
  return `
    <h1>Heroes</h1>
    <div>
        <h2 id="details__title">${hero.name} details</h2>
        <div id="details__hero-id"><span>id: </span>${hero.id}</div>
        <div>
            <label for="hero-name">Hero name: </label>
            <input id="details__hero-name" type="text" placeholder="Hero name"/>
        </div>
        <button (click)="goBack()">go back</button>
        <button (click)="save()">save</button>
    </div>`;
}

function navigate(url) {
  const urls = {
    dashboard,
    'heroes-list': heroesList,
  };
  return (urls[url] || urls.dashboard)();
}

document.querySelectorAll('[data-href]').forEach((element) => {
  element.addEventListener('click', (e) => {
    document.querySelector('#page-content').innerHTML = navigate(e.currentTarget.dataset.href);
  });
});
