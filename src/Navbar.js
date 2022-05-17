import React, { useContext } from 'react';
import { IsLoggedInContext } from './App';

function Navbar() {
  const isLoggedInContext = useContext(IsLoggedInContext);
  const isLoggedIn = isLoggedInContext.isLoggedIn;

  return (
    <>
      <nav>
        <h1>Rotbox</h1>
        <ul>
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