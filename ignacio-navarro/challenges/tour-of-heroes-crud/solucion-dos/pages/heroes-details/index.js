console.log(document.url);

const hero = HEROES_LIST.find((heroItem) => heroItem.id === Number(window.location.search.split('?hero-id=')[1]));

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

document.querySelector('#page-content').innerHTML = heroes(hero);
