const dashBoardPage = new DashboardPage(JSON.parse(localStorage.getItem('heroes')).slice(1, 5));
// funtion threw when the html is loaded.
(function dashBoardPageModel() {
  dashBoardPage.setview();
}());

function showSearch(searchArray) {
  const domParentElement = document.getElementById('search-result');
  domParentElement.innerHTML = '';
  const domInput = document.getElementById('search-hero');
  domInput.value = '';

  searchArray.forEach((hero) => {
    const domElementLi = document.createElement('li');
    const domElementA = document.createElement('a');
    const domSpan = document.createElement('span');

    domElementA.href = `../Details/details.html?id=${hero.id}`;
    domElementA.classList.add('search-result-element');

    domSpan.classList.add('badge');
    domSpan.innerText = `Id: ${hero.id}`;

    domElementA.appendChild(domSpan);
    domElementA.append(` <--> ${hero.name}`);

    domElementLi.appendChild(domElementA);

    domParentElement.appendChild(domElementLi);
  });
}

function searchHero() {
  const allHeroes = JSON.parse(localStorage.getItem('heroes'));
  const domInput = document.getElementById('search-hero');
  const foundElements = [];
  // if (domInput.value.length <= 0) {
  if (domInput.value.trim().length <= 0) {
    alert('You have to write a name to search something.');
  } else {
    allHeroes.forEach((hero) => {
      const stringHero = JSON.stringify(hero);
      if (stringHero.includes(domInput.value)) {
        foundElements.push(hero);
      }
    });
    if (foundElements.length <= 0) {
      alert('No data found.');
    } else {
      showSearch(foundElements);
    }
  }
}
