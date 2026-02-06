import { authFetch } from "@/shared/lib/functions/authFetch";

export function postAuth(path, data, callback) {
  return authFetch(path, {
    method: "POST",
    body: JSON.stringify(data),
  }).then(async ({ data, status }) => {
    callback({ data, status });
  });
}
