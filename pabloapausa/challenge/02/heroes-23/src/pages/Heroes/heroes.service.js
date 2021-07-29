function getHeroes() {
    return fetch('../../superHeroData.json')
    .then((response) => response.json())
    .then((heroes) => heroes)
    .catch((error) => {
        console.log(error.message);
        return [];
    });
};
