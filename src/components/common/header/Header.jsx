import React from 'react';
import {Navbar} from '../../common';

function Header() {
  return (
    <header>
      <Navbar />
        {/* <div header hero */}
        <div className="header-hero h-full flex justify-center items-center">
          <div className="header-hero__content">
            <h1 className="header-hero__title text-2xl font-bold">Site de <span className="header-hero__title--highlight
            bg-pink-500 text-white px-1
            ">Théo</span> Boilerplate</h1>
            <p className="header-hero__subtitle">A simple boilerplate for React projects</p>
          </div>
        </div>


    </header>
  );
}

export default Header;