import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import './NavBar.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];

  return (
    <nav className="nav-bar">
      <h2 className="nav-brand">Bookstore CMS</h2>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} exact="true">
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="account-icon"><FaUser className="user-icon" /></div>
    </nav>
  );
};
export default Navbar;
