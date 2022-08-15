import React from 'react';

const NavBar = ({setSearchKeyword}) => {

  const handleChange = (e) => {
    setSearchKeyword(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div className="nav-bar">
      <span className="header-menu" > Menu </span>
      <input className="search-bar" placeholder="search" onChange = {handleChange} />
    </div>
  );
}

export default NavBar;