import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {

  const [showHeaderBar, setShowHeaderBar] = useState(true);

  const contactHandler = () => {
    setShowHeaderBar(!showHeaderBar);
  }

  return (
    <div className="header">
      <div id="header__bar" style={{ transform: showHeaderBar ? `translateY(120px)` : `translateY(0px)` }}>
        <h3 className="header__bar__title">Hey There, Myself Vaibhav !! </h3>
        <div className="header__bar__icons">
          <a href="https://github.com/vabhv1903" target='_blank'><img src="https://img.icons8.com/ios/50/000000/github--v1.png" /></a>
          <a href="https://www.linkedin.com/in/vaibhav-singh-025020193/" target='_blank'><img src="https://img.icons8.com/ios/50/000000/linkedin.png" /></a>
        </div>
      </div>

      <div className="header-logo">AlgoSort<span>Vizz</span></div>
      <div className="header__options">
        <h3 className="header__option" onClick={contactHandler}><span>C</span>ontact</h3>
      </div>
    </div>
  )
}

export default Header;