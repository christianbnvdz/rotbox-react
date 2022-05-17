import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import '../css/App.css';
import Navbar from './Navbar';
import Files from '../routes/Files';
import Upload from '../routes/Upload';
import Login from '../routes/Login';
import Register from '../routes/Register';

export const IsLoggedInContext = React.createContext();

function App() {
  const [isLoggedIn, setLoggedInStatus] = useState(false);

  return (
    <BrowserRouter>
      <IsLoggedInContext.Provider value={{isLoggedIn, setLoggedInStatus}}>
        <Navbar />
        <Routes>
          <Route path="/" element={ isLoggedIn ? <Navigate to="/files" /> : <Navigate to="/login" />} />
          <Route path="/files" element={<Files />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={ isLoggedIn ?  <Navigate to="/files" /> : <Navigate to="/login" />} />
        </Routes>
      </IsLoggedInContext.Provider>
    </BrowserRouter>
  );
}

export default App;