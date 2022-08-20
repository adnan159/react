import React, { useContext } from 'react';
import ThemeContex from '../ThemeContex';

const NavBar = ({setSearchKeyword}) => {
  const { dark, toggle } = useContext(ThemeContex);
  const handleChange = (e) => {
    setSearchKeyword(e.target.value);
  }

  return ( 
    <div className="nav-bar">
      <span className="header-menu" > Menu </span>
      <input className="search-bar" placeholder="search" onChange = {handleChange} />
      <span className="theme-mode">{dark ? "Dark" : "Light" }</span>
      <button className="change-theme" onClick={toggle}>Change Theme</button>
    </div>
  );
}

export default NavBar;