import React from 'react';
import ThemeContex from '../ThemeContex';

const NavBar = ({setSearchKeyword}) => {
  const handleChange = (e) => {
    setSearchKeyword(e.target.value);
  }

  return (
    <ThemeContex.Consumer>
      { value => (
          <div className="nav-bar">
            <span className="header-menu" > Menu </span>
            <input className="search-bar" placeholder="search" onChange = {handleChange} />
            <span className="theme-mode">{value.dark ? "Dark" : "Light" }</span>
            <button className="change-theme" onClick={value.toggole}>Change Theme</button>
          </div>
        )
      }
    </ThemeContex.Consumer>
  );
}

export default NavBar;