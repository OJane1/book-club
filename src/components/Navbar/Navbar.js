import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../../images/bookshelf-99.png";
import {HiOutlineMenuAlt3} from "react-icons/hi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);
  const closeNavbar = () => setToggleMenu(false);

  return (
    <nav className='navbar flex flex-sb' id = "navbar">
      <div className='container navbar-content'>
        <div className='brand-and-toggler'>
          <Link to = "/" className='navbar-brand flex'>
            <img src = {logoImg} alt = "site logo" />
            <span className='text-uppercase fw-3 fs-17 ls-1'>book club</span>
          </Link>
          <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size = {35} style = {{
              color: `${toggleMenu ? "#FFF" : "#010101"}`
            }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">
            <li className='nav-item'>
              <Link to = "home" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1' onClick={closeNavbar}>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to = "about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1' onClick={closeNavbar}>about</Link>
            </li>
            <li className='nav-item'>
              <Link to = "trends" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1' onClick={closeNavbar}>trends</Link>
            </li>
            <li className='nav-item'>
              <Link to = "my books" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1' onClick={closeNavbar}>my books</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar