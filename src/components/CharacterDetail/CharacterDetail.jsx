import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetail = ({ image, name, house, patronus }) => (
  <section>
    <img src={image} />
    <h2>{name}</h2>
    <p>Hogwarts House: {house}</p>
    <p>Patronus Form: {patronus}</p>
  </section>
);

CharacterDetail.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  house: PropTypes.string.isRequired,
  patronus: PropTypes.string.isRequired
};

export default CharacterDetail;
