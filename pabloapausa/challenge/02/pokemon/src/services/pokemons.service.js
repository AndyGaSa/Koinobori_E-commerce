function retrievePokemons(url) {
    return fetch(url)
    .then((response) => response.json());
}