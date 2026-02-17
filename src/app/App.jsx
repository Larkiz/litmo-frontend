import { SignIn } from "@/pages/User/Authorization/SignIn";

import { UserLayout } from "@/app/layouts/User";

import { useEffect } from "react";

import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router";
import { ToastContainer } from "react-toastify";
import { Box } from "@mui/material";
import { colors } from "@/shared/lib/colors";
import { SignUp } from "@/pages/User/Authorization/SignUp";
import { CheckAuth } from "@/shared/lib/middlewares/CheckAuth";
import { authFetch } from "@/shared/lib/functions/authFetch";
import { useDispatch } from "react-redux";
import { setLogged } from "@/redux/slices/optionsSlice";

function ScrollToTopAndCheckToken() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    authFetch("/checkToken")
      .then(({ data }) => {
        if (data === true) {
          dispatch(setLogged(true));
        } else {
          navigate("/signin");
        }
      })
      .catch(() => {
        navigate("/signin");
      });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const App = () => {
  return (
    <Box
      sx={{
        boxShadow: colors.boxShadow,
        borderRadius: { xs: 0, sm: 10 }, // закругления приложения
        maxWidth: 1300,
        margin: "auto",
        height: { xs: "100vh", xl: "95vh" },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div id="profile-modal"></div>

      <Box sx={{ p: { xs: 1.5, sm: 4 } }}>
        <BrowserRouter
          future={{
            v7_relativeSplatPath: true,
            v7_startTransition: true,
          }}
        >
          <ScrollToTopAndCheckToken />
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />

            <Route
              path="/*"
              element={
                <CheckAuth>
                  <UserLayout />
                </CheckAuth>
              }
            />
          </Routes>
        </BrowserRouter>
      </Box>
      <ToastContainer
        position={"bottom-center"}
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        draggable
        theme={"colored"}
      />
    </Box>
  );
};
