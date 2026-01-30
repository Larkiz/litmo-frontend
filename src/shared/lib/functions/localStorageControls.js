export function setLocaleStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
export function getLocaleStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
export function clearLocalStorage(key) {
  localStorage.removeItem(key);
}
