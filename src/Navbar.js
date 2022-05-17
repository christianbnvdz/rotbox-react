import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IsLoggedInContext } from './App';
import NavbarCSS from './Navbar.module.css';

function Navbar() {
  const isLoggedInContext = useContext(IsLoggedInContext);
  const isLoggedIn = isLoggedInContext.isLoggedIn;

  return (
    <>
      <nav className={NavbarCSS.nav_container}>
        <h1 className={NavbarCSS.logo_text}>Rotbox</h1>
        <ul className={NavbarCSS.nav_list}>
          { isLoggedIn ?
            <>
              <li><Link to="/files">Files</Link></li>
              <li><Link to="/upload">Upload</Link></li>
              <li><Link to="/login" onClick={() => isLoggedInContext.setLoggedInStatus(false)}>Log Out</Link></li>
            </>
            :
            <>
              <li><Link to="/login" onClick={() => isLoggedInContext.setLoggedInStatus(true)}>Log In</Link></li>
              <li><Link to="/register">Register</Link></li>
            </>
          }
        </ul>
      </nav>
    </>
  );
}

export default Navbar;