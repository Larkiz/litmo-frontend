import { AppBar, IconButton, Stack } from "@mui/material";
import { Typography } from "@/shared/ui/Typography/Typography";
import { useLocation } from "react-router";
import { userRoutes } from "@/app/routes/user.routes";
import { CustomNavLink } from "@/shared/ui/CustomNavLink/CustomNavLink";

import { useColors } from "@/shared/hooks/useColors";
export const BottomNavigation = () => {
  const loc = useLocation();
  const colors = useColors();
  return (
    <AppBar
      position="absolute"
      sx={{
        top: "auto",
        bottom: 20,
        display: "flex",
        maxWidth: 400,
        borderRadius: 10,
        // backgroundColor: "#fff",
        backgroundColor: colors.background,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9998,
      }}
    >
      <Stack
        justifyContent={"space-around"}
        direction={"row"}
        spacing={4}
        alignItems={"center"}
      >
        {userRoutes.map((route) => (
          <IconButton
            to={route.path}
            key={route.path}
            component={CustomNavLink}
          >
            <Stack
              label={route.name}
              value={route.path}
              sx={{
                fontSize: 50,
                "*": {
                  color:
                    loc.pathname === route.path
                      ? colors.accentColor
                      : "#bebebefa!important",
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
