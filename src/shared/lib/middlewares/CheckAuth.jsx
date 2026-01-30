import { NotFoundPage } from "@/widgets/NotFoundPage/NoFoundPage";

export const CheckAuth = ({ children }) => {
  let token = localStorage.getItem("token");
  let role = null;

  if (token !== null) {
    sessionStorage.setItem("token", localStorage.getItem("token"));
    sessionStorage.setItem("role", localStorage.getItem("role"));
  }

  token = sessionStorage.getItem("token");
  role = sessionStorage.getItem("role");

  if (role === "admin") {
    return children;
  } else {
    return <NotFoundPage />;
  }
};
