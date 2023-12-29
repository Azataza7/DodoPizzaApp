import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <nav className="header navbar navbar-expand-lg mb-3">
      <div className="container-fluid">
        <Link to="/admin/" className="logo-container navbar-brand" href="#">Dodo pizza Admin</Link>
        <div className="" id="navbarNav">
          <ul className="navbar-nav d-flex flex-row gap-2">
            <li className="nav-item">
              <Link to="/admin/" className="nav-link" href="#">Catalog</Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/orders" className="nav-link" href="#">Orders</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;