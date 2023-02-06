import React from 'react';
import './pokemonsTypes.css';

const PokemonsTypesList = ({ data }) => (
  <ul className='types-list'>
    {data.map((type, index) => (
      <li className={`${type.type.name} ${'type'}`} key={index}>
        {type.type.name}
      </li>
    ))}
  </ul>
);

export default PokemonsTypesList;
