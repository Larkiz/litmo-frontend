import { AppBar, IconButton, Stack, Typography } from "@mui/material";

import { useLocation } from "react-router";
import { userRoutes } from "@/app/routes/user.routes";
import { CustomNavLink } from "@/shared/ui/CustomNavLink/CustomNavLink";
import { colors } from "@/shared/lib/colors";
export const BottomNavigation = () => {
  const loc = useLocation();

  return (
    <AppBar
      position="absolute"
      sx={{
        top: "auto",
        bottom: 20,
        display: "flex",
        maxWidth: 400,
        borderRadius: 10,
        backgroundColor: "#fff",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <Stack
        justifyContent={"space-around"}
        direction={"row"}
        spacing={4}
        alignItems={"center"}
      >
        {userRoutes.map((route) => (
          <IconButton to={route.path} component={CustomNavLink}>
            <Stack
              label={route.name}
              value={route.path}
              sx={{
                fontSize: 50,
                "*": {
                  color:
                    loc.pathname === route.path
                      ? colors.accentColor
                      : "#aaaaaa",
                },
              }}
              alignItems={"center"}
            >
              {route.icon}
              <Typography sx={{ fontWeight: 500 }}>{route.name}</Typography>
            </Stack>
          </IconButton>
        ))}
      </Stack>
    </AppBar>
  );
};
