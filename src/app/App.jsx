import { Login } from "@/pages/Admin/Authorization/Login";

import { AdminLayout } from "@/app/layouts/Admin";
import { UserLayout } from "@/app/layouts/User";
import { CheckAuth } from "@/shared/lib/middlewares/CheckAuth";

import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { ToastContainer } from "react-toastify";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const App = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const token =
  //     localStorage.getItem("token") || sessionStorage.getItem("token");
  //   const role = localStorage.getItem("role") || sessionStorage.getItem("role");

  //   if (token !== null && role !== null) {
  //     authFetch("/check", {
  //       method: "post",
  //       headers: { Authorization: `Bearer ${token}` },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (!data.forbidden) {
  //           sessionStorage.setItem("token", token);

  //           sessionStorage.setItem("role", role);
  //           return dispatch(setAminAccess(true));
  //         }

  //         return dispatch(setAminAccess(false));
  //       });
  //   }
  // }, []);

  return (
    <>
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
        }}
      >
        <ScrollToTop />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin/*"
            element={
              <CheckAuth>
                <AdminLayout />
              </CheckAuth>
            }
          />
          <Route path="/*" element={<UserLayout />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer
        position={"top-right"}
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        draggable
        theme={"colored"}
      />
    </>
  );
};
