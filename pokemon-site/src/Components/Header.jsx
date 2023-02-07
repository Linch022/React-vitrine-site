import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='left-part-header'></div>
      <div className='right-part-header'></div>
      <img
        src='/public/Pokémon_logo.svg'
        alt='logo pokemon'
        className='pokemon-logo'
      />
    </div>
  );
};

export default Header;
