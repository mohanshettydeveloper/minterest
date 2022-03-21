export const getMokeMonsByPage = (pageCounter) => {
    const allMokeMonsUrl = 'https://pokeapi.co/api/v2/pokemon?limit=' + pageCounter;
    fetch(allMokeMonsUrl)
        .then(response => response.json())
        .then(async results => {
            return await results.results;
        });
};