import React from 'react';

const TypesList = ({ types }) => (
  <ul className='types-list'>
    {types.map((type, index) => (
      <li className={type.type.name} key={index}>
        {type.type.name}
      </li>
    ))}
  </ul>
);

export default TypesList;
