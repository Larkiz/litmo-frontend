import { userRoutes } from "@/app/routes/user.routes";

import { Route, Routes } from "react-router";

import { NotFoundPage } from "@/widgets/NotFoundPage/NoFoundPage";
import { BottomNavigation } from "@/widgets/BottomNavigation/BottomNavigation";
import { ProfileModal } from "@/app/layouts/features/ProfileModal/ProfileModal";
import { authFetch } from "@/shared/lib/functions/authFetch";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "@/redux/slices/profileSlice";
import { useEffect } from "react";
import { Stack } from "@mui/material";
import { RouteButton } from "@/app/layouts/features/RouteButton/RouteButton";

export const UserLayout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    authFetch("/profile").then((res) => {
      dispatch(setProfile(res.data));
    });
  }, []);

  const routes = () => {
    return (
      <Routes>
        <Route key={"notFound"} path={"/*"} element={<NotFoundPage />} />
        {userRoutes.map((route, key) => (
          <Route key={key} path={route.path} element={route.element} />
        ))}
      </Routes>
    );
  };
  const profile = useSelector((store) => store.profileStore.profile);

  return (
    !!profile.id && (
      <>
        <Stack
          sx={{ mb: 3 }}
          justifyContent={"space-between"}
          direction={"row"}
          alignItems={"center"}
        >
          <ProfileModal />

          <RouteButton />
        </Stack>
        {routes()}
        <BottomNavigation />
      </>
    )
  );
};
