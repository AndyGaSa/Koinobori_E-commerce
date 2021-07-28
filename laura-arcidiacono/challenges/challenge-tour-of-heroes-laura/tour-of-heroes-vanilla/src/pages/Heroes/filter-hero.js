const filter = document.getElementById('filter__hero');
filter.addEventListener('click', filterHero);

function filterHero() {
  const inputValueFill = document.getElementById('new-hero').Value;
  localStorage.getItem('heroes');
  const localArray = JSON.parse(localStorage.getItem('heroes'));
}
