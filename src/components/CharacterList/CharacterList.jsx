import React from 'react';
import PropTypes from 'prop-types';
import CharacterDetail from '../CharacterDetail/CharacterDetail.jsx';

const CharacterList = ({ characters }) => {
  const charactersToList = characters.map(character => (
    <li key={`${character.name} + ${character.patronus}`}>
      <CharacterDetail {...character} />
    </li>
  ));

  return (
    <ul>
      {charactersToList}
    </ul>
  );

};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    house: PropTypes.string.isRequired,
    patronus: PropTypes.string.isRequired
  })).isRequired
};

export default CharacterList;
