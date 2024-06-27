// authService.js
export function getToken() {
  return localStorage.getItem("accessToken");
}

export function getRefreshToken() {
  return localStorage.getItem("refreshToken");
}

export function setToken(token) {
  localStorage.setItem("accessToken", token);
}

export function setRefreshToken(token) {
  localStorage.setItem("refreshToken", token);
}

export function removeTokens() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
}

export function isAuthenticated() {
  return !!getToken();
}
