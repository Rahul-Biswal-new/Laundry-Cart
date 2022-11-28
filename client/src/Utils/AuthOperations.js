function getToken() {
  let Token;
  if (window.localStorage) {
    Token = localStorage.getItem("token");
  }
  return Token;
}

function isAuthenticated() {
  if (window.localStorage) {
    const token = localStorage.getItem("token");
    return Boolean(token);
  }
  return false;
}

function setToken(token) {
  if (window.localStorage) {
    localStorage.setItem("token", token);
  }
}

function clearToken() {
  console.log("clear");
  if (window.localStorage) {
    window.localStorage.clear();
  }
}

export { getToken, isAuthenticated, setToken, clearToken };
