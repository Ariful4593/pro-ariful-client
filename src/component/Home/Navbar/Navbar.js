import React from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.css'
import './Navbar.css';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

const Navbar = () => {
  window.onscroll = () => { myFunction() };
  const myFunction = () => {
    const header = document.getElementById("navbarSticky");
    const sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
      header.classList.add("showcase");
    } else {
      header.classList.remove("sticky");
    }
  }
  return (
    <nav className="navbar  navbar-expand-lg navbar-light myNav  sticky" id="navbarSticky" >
        <Link to="/" className="navbar-brand ">
          <h4 className="text-white">
          <DoubleArrowIcon className="header_icon" />
          Ariful
          <SentimentSatisfiedAltIcon className="header_icon" />
          Islam
          <DoubleArrowIcon className="header_icon" />
          </h4>
        
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to='/' className="nav-link text-white ">
              Home
              </Link>

            </li>
            <li className="nav-item">
              <Link to='servicePage' className="nav-link text-white ">
              Services
              </Link>

            </li>
            <li className="nav-item">
              <Link to='project' className="nav-link text-white ">
              Project
              </Link>
            </li>
            <li className="nav-item">
              <Link to='blog' className="nav-link text-white ">
              Blog
              </Link>
            </li>

            <li className="nav-item">
              <Link to='contact' className="nav-link text-white ">
              Contact
              </Link>

            </li>
          </ul>
        </div>
      </nav>

  );
};

export default Navbar;