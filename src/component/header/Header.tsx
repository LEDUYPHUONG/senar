import React from 'react';
import DropdownLanguage from './DropdownLanguage';
import NavbarHeader from './NavbarHeader';

export default function Header() {
  
  return (
    <div>
        <div className="header-container">
          <div className="navbar-icon">
            <NavbarHeader />
          </div>
          <div className="logo-menu">
            <div className='logo'>
              <img src="./image/homepage/logo-senar.png" alt="logo-senar" />
            </div>
            <div className="menu">
              <ul className='nav'>
                <li className='nav-item active'>Home</li>
                <li className='nav-item'>About us</li>
                <li className='nav-item'>Our Products</li>
                <li className='nav-item'>Services</li>
                <li className='nav-item'>News</li>
                <li className='nav-item'>Sustainability</li>
                <li className='nav-item'>Contact</li>
              </ul>
            </div>
            <div className='align-center-menu'></div>
          </div>
          <div className="header-contact">
            <div className="contact-container">
              <div className="icon-contact">
                <div className="icon">
                  <img src="./image/homepage/icon-fb.png" alt="icon-facebook" />
                </div>
                <div className="icon">
                  <img src="./image/homepage/icon-youtube.png" alt="icon-youtube" />
                </div>
                <div className="icon">
                  <img src="./image/homepage/icon-instagram.png" alt="icon-instagram" />
                </div>
              </div>
              <div className="icon-search-option">
                <div className="icon-search">
                  <img src="./image/homepage/icon-search.png" alt="icon-search" />
                </div>
                <div className="icon-language">
                  <img src="./image/homepage/icon-lang.png" alt="icon-lang" />
                </div>
              </div>
              <div className="search-option">
                <form className="search">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search anything" aria-label="Search"></input>
                </form>
                <div className="option">
                  <DropdownLanguage />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}