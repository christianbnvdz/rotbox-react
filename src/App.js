import React, { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';

export const IsLoggedInContext = React.createContext();

function App() {
  const [isLoggedIn, setLoggedInStatus] = useState(false);

  return (
    <BrowserRouter>
      <IsLoggedInContext.Provider value={{isLoggedIn, setLoggedInStatus}}>
        <Navbar />
      </IsLoggedInContext.Provider>
    </BrowserRouter>
  );
}

export default App;