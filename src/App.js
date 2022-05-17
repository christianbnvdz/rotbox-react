import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';

export const IsLoggedInContext = React.createContext();

function App() {
  const [isLoggedIn, setLoggedInStatus] = useState(true);

  return (
    <IsLoggedInContext.Provider value={{isLoggedIn, setLoggedInStatus}}>
      <Navbar />
    </IsLoggedInContext.Provider>
  );
}

export default App;