import { Sidebar } from "@/app/layouts/features/Sidebar/Sidebar";
import { CheckAuth } from "@/shared/lib/middlewares/CheckAuth";
import { adminRoutes } from "@/app/routes/admin.routes";

import { Box } from "@mui/material";
import { Navigate, Route, Routes } from "react-router";
export const AdminLayout = () => {
  const routes = () => {
    return (
      <Routes>
        {adminRoutes.map((route, key) => {
          if (route.element.length) {
            return route.element.map((route) => (
              <Route key={key} path={route.path} element={route.element} />
            ));
          } else {
            return (
              <Route key={key} path={route.path} element={route.element} />
            );
          }
        })}
        <Route path="*" element={<Navigate to="/admin/index" replace />} />
      </Routes>
    );
  };

  return (
    <>
      <Box>
        <CheckAuth>
          <Sidebar>{routes()}</Sidebar>
        </CheckAuth>
      </Box>
    </>
  );
};
