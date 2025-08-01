import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/contact">Contacts</Link> </li>
      </ul>
    </nav>
  );
}

export default Navbar;
