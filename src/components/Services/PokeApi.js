const API = "https://pokeapi.co/api/v2/pokemon/?limit=25";

const callApi = () => fetch(API).then(response => response.json());

export { callApi };