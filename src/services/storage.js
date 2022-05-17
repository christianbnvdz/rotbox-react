const tokenLoc = 'token';
const userIdLoc = 'userid';

function getUserToken() {
  return localStorage.getItem(tokenLoc);
}

function deleteUserToken() {
  localStorage.removeItem(tokenLoc);
}

// This function takes the whole bearer token. It will
// split for you.
function setUserToken(bearerToken) {
  localStorage.setItem(tokenLoc, bearerToken.substring(7));
}

function setUserId(userid) {
  localStorage.setItem(userIdLoc, userid);
}

export default {
  tokenLoc,
  userIdLoc,
  getUserToken,
  deleteUserToken,
  setUserToken,
  setUserId,
};