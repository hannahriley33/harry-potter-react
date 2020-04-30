import React, { useState, useEffect } from 'react';
import CharacterList from '../components/CharacterList/CharacterList.jsx';
import { fetchPotterCharacters } from '../services/harrypotter.js';

const HpCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchPotterCharacters()
      .then(res => setCharacters(res));
  }, []);

  return (
    <CharacterList characters={characters}/>
  );
};


export default HpCharacters;
