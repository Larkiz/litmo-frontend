import { userRoutes } from "@/app/routes/user.routes";

import { Route, Routes } from "react-router";

import { NotFoundPage } from "@/widgets/NotFoundPage/NoFoundPage";
import { BottomNavigation } from "@/widgets/BottomNavigation/BottomNavigation";

export const UserLayout = () => {
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

  return (
    <>
      {routes()}
      <BottomNavigation />
    </>
  );
};
