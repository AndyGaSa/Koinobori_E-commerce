console.log(document.url);

const heroList = HEROES_LIST.map((heroItem) => `
    <li id="heroes__html-List">
      <a href="../heroes-details/details.html?hero-id=${heroItem.id}">
        <span class="badge">id</span> ${heroItem.name}
      </a>
      <button class="delete" title="delete hero">x</button>
    </li>`);

function heroes(heroList) {
  return `
  <h2>My Heroes</h2>
  <div>
    <label for="new-hero">Hero name: </label>
    <input id="new-hero" placeholder="Hero name"/>
  </div>
  <ul class="heroes">
    ${heroList.join('')}
  </ul>`;
}

document.querySelector('#page-content').innerHTML = heroes(heroList);
