import React from 'react';
import {Link, useLocation} from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isAdminPath = location.pathname.includes('/admin/');

  return (
    <nav className="header navbar navbar-expand-lg mb-3">
      <div className="container-fluid">
        <Link
          to={isAdminPath ? '/admin/' : '/'}
          className="logo-container navbar-brand"
        >
          {isAdminPath ? 'Dodo pizza Admin' : 'Dodo pizza'}
        </Link>
        <div className="" id="navbarNav">
          <ul className="navbar-nav d-flex flex-row gap-2">
            <li className="nav-item">
              <Link to={isAdminPath ? '/admin/' : '/'} className="nav-link" href="#">Catalog</Link>
            </li>
            <li className="nav-item">
              <Link
                to={isAdminPath ? '/admin/orders' : '/cart'}
                className="nav-link"
              >
                {isAdminPath ? 'Orders' : 'Cart'}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;