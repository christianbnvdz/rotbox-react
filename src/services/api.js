import Axios from 'axios';
import Storage from './storage';

const apiBaseUrl = 'http://localhost:3000';
const loginUrl = `${apiBaseUrl}/users/login`;
const registerUrl = `${apiBaseUrl}/users/register`;
const authenticateTokenUrl = `${apiBaseUrl}/users/authenticate`;

function constructGetFilesUrl() {
  return `${apiBaseUrl}/users/${localStorage.getItem(Storage.userIdLoc)}/files`;
}

function login(username, password) {
  return (Axios.post(loginUrl, {
    username,
    password,
  }));
}

function register(username, password) {
  return (Axios.post(registerUrl, {
    username,
    password,
  }));
}

function authenticateToken() {
  return (Axios.get(authenticateTokenUrl, {
    headers: {
      'Authorization': `Bearer ${Storage.getUserToken()}`,
    }
  }));
}

export default { 
  login,
  register,
  authenticateToken,
};