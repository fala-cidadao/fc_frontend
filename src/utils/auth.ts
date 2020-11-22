export function isLogged() {
  return localStorage.getItem('token') ? true : false;
}
