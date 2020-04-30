export const fetchPotterCharacters = () => {
  return fetch('http://hp-api.herokuapp.com/api/characters/students')
    .then(res => res.json())
    .then(json => json.map(character => ({
      image: character.image,
      name: character.name,
      house: character.house,
      patronus: character.patronus
    })));
};
