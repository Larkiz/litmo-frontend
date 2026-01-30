export function setSessionStorage(key, data) {
  sessionStorage.setItem(key, JSON.stringify(data));
}
export function getSessionStorage(key) {
  return JSON.parse(sessionStorage.getItem(key));
}
export function clearSessionStorage(key) {
  sessionStorage.removeItem(key);
}
