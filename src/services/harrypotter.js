export const fetchPotterCharacters = () => {
  return fetch('http://hp-api.herokuapp.com/api/characters/students')
    .then(res => res.json())
    .then(json => ({
      image: json.image,
      name: json.name,
      house: json.house,
      patronus: json.patronus
    }));
};
