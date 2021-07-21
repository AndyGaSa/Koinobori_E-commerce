document.getElementById('filter-hero').addEventListener('click', () => { const myFilterValue = document.getElementById('new-hero').value; });

localStorage.getItem('heroes');
const store = JSON.parse(localStorage.getItem('heroes'));

store.forEach(element => element.filter((Object.values[element] === myFilterValue){return element}));
