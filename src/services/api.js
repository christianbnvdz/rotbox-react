import Axios from 'axios';
import Storage from './storage';

const apiBaseUrl = 'http://localhost:3000';
const loginUrl = `${apiBaseUrl}/users/login`;
const registerUrl = `${apiBaseUrl}/users/register`;
const authenticateTokenUrl = `${apiBaseUrl}/users/authenticate`;

function generateHeaders() {
  return {
    'Authorization': `Bearer ${Storage.getUserToken()}`,
  };
};

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
    headers: generateHeaders(),
  }));
}

function getFiles() {
  return (Axios.get(constructGetFilesUrl(), {
    headers: generateHeaders(),
  }));
}

function downloadFile(fileId) {
  return (Axios({
    method: 'get',
    url: `${constructGetFilesUrl()}/${fileId}`,
    responseType: 'blob',
    headers: generateHeaders(),
  }));
}

function uploadFile(form) {
  return (Axios({
    method: 'post',
    url: constructGetFilesUrl(),
    data: form,
    headers: { ...generateHeaders(), "Content-Type": "multipart/form-data" },
  }));
}

export default { 
  login,
  register,
  authenticateToken,
  getFiles,
  downloadFile,
  uploadFile,
};