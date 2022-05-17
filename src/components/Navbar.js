import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { IsLoggedInContext } from './App';
import NavbarCSS from '../css/Navbar.module.css';
import Storage from '../services/storage';

function Navbar() {
  const isLoggedInContext = useContext(IsLoggedInContext);
  const isLoggedIn = isLoggedInContext.isLoggedIn;

  function logout() {
    isLoggedInContext.setLoggedInStatus(false);
    Storage.deleteUserToken();
  }

  return (
    <>
      <nav className={NavbarCSS.nav_container}>
        <h1 className={NavbarCSS.logo_text}>Rotbox</h1>
        <ul className={NavbarCSS.nav_list}>
          { isLoggedIn ?
            <>
              <li><Link to="/files">Files</Link></li>
              <li><Link to="/upload">Upload</Link></li>
              <li><Link to="/login" onClick={logout}>Log Out</Link></li>
            </>
            :
            <>
              <li><Link to="/login">Log In</Link></li>
              <li><Link to="/register">Register</Link></li>
            </>
          }
        </ul>
      </nav>
    </>
  );
}

export default Navbar;