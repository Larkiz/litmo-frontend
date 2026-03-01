import { IconButton, Stack } from "@mui/material";
import { Typography } from "@/shared/ui/Typography/Typography";
import { useLocation } from "react-router";
import { userRoutes } from "@/app/routes/user.routes";
import { CustomNavLink } from "@/shared/ui/CustomNavLink/CustomNavLink";

import { useColors } from "@/shared/hooks/useColors";
export const BottomNavigation = () => {
  const loc = useLocation();
  const colors = useColors();
  return (
    <Stack
      position="absolute"
      sx={{
        top: "auto",
        bottom: 20,
        display: "flex",
        maxWidth: 400,
        left: "50%",
        transform: "translateX(-50%)",
        width: "95%",
        flex: "none",
        zIndex: 9998,
      }}
      direction={"row"}
      alignItems={"center"}
      spacing={2}
    >
      <Stack
        justifyContent={"space-around"}
        direction={"row"}
        spacing={6}
        alignItems={"center"}
        sx={{
          borderRadius: 10,
          backgroundColor: colors.background,
          boxShadow: colors.boxShadow,
          padding: "5px 15px",
          flex: 1,
          // width: "100%",
        }}
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
                      : "rgba(163, 163, 163, 0.98)!important",
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
    </Stack>
  );
};
