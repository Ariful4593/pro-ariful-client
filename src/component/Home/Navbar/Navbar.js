import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="row">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ background: '#fff' }}>
        <a className="navbar-brand h1" href="#">Arif</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to='/' className="nav-link text-danger font-weight-bold">
                Home
              </Link>

            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="#About">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="#Services">Services</a>
            </li>
            <li className="nav-item">
              <Link to='project' className="nav-link font-weight-bold">
                Project
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="#Client">Client</a>
            </li>
            <li className="nav-item">
              <Link to='blog' className="nav-link font-weight-bold">
                Blog
              </Link>
            </li>

            <li className="nav-item">
              <Link to='contact' className="nav-link font-weight-bold">
                Contact
              </Link>

            </li>
          </ul>
        </div>
      </nav>
    </div>

  );
};

export default Navbar;