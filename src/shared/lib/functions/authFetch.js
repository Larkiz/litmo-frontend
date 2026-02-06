import { getLocaleStorage } from "@/shared/lib/functions/localStorageControls";

export const authFetch = (endpoint, options) => {
  const headers = !options?.headers
    ? { "Content-type": "application/json" }
    : {};
  return fetch(import.meta.env.VITE_API_HOST_COMMON + endpoint, {
    headers: {
      Authorization: `Bearer ${getLocaleStorage("token")}`,
      ...headers,
    },
    ...options,
  }).then((res) => res.json().then((data) => ({ data, status: res.status })));
};
