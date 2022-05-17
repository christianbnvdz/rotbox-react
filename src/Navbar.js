import React, { useContext } from 'react';
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
              <li>Files</li>
              <li>Upload</li>
              <li onClick={() => isLoggedInContext.setLoggedInStatus(false)}>Log Out</li>
            </>
            :
            <>
              <li onClick={() => isLoggedInContext.setLoggedInStatus(true)}>Log In</li>
              <li>Register</li>
            </>
          }
        </ul>
      </nav>
    </>
  );
}

export default Navbar;