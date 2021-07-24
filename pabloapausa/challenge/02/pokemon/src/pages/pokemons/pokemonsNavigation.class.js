const multiply = (a, b) => Math.floor(a * b);
let [limit, page] = [5, 0];
let offset = multiply(limit, page);

const COUNT = 1118;
const last = Math.floor(COUNT / limit);

function after() {
    if (page === last) return;
    page += 1;
    //CAMBIAR AL OTRO ARCHIVO.
    offset = multiply(limit, page);
    const pokemonsPage = new PokemonsPage();
    pokemonsPage.clearView();
    pokemonsPage.setView();
}

function before() {
    if (page === 0) return;
    page -= 1;
    //CAMBIAR AL OTRO ARCHIVO.
    offset = multiply(limit, page);
    const pokemonsPage = new PokemonsPage();
    pokemonsPage.clearView();
    pokemonsPage.setView();
}
