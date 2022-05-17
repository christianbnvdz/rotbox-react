import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import '../css/App.css';
import Navbar from './Navbar';
import Files from '../routes/Files';
import Upload from '../routes/Upload';
import Login from '../routes/Login';
import Register from '../routes/Register';
import RotboxAPI from '../services/api';

export const IsLoggedInContext = React.createContext();

function App() {
  let navigate = useNavigate();
  const [isLoggedIn, setLoggedInStatus] = useState(false);

  useEffect(() => {
    (RotboxAPI.authenticateToken()).then(function(response) {
      setLoggedInStatus(true);
      navigate("/files");
    });
  }, []);

  return (
    <>
      <IsLoggedInContext.Provider value={{isLoggedIn, setLoggedInStatus}}>
        <Navbar />
        <Routes>
          <Route path="/" element={ isLoggedIn ? <Navigate to="/files" /> : <Navigate to="/login" />} />
          <Route path="/files" element={<Files />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={ isLoggedIn ? <Navigate to="/files" /> : <Navigate to="/login" />} />
        </Routes>
      </IsLoggedInContext.Provider>
    </>
  );
}

export default App;