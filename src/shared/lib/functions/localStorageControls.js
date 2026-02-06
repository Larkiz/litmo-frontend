export function setLocaleStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
export function getLocaleStorage(key) {
  const data = localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch {
    return data;
  }
}
export function clearLocalStorage(key) {
  localStorage.removeItem(key);
}
