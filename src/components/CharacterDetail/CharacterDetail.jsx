import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CharacterDetail = ({ image, name, house, patronus }) => (
  <Link key={name} to={`characters/${name}`}>
    <img src={image} />
    <h2>{name}</h2>
    <p>Hogwarts House: {house}</p>
    <p>Patronus Form: {patronus}</p>
  </Link>
);

CharacterDetail.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  house: PropTypes.string.isRequired,
  patronus: PropTypes.string.isRequired
};

export default CharacterDetail;
