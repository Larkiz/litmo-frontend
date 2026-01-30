import {
  AppBar,
  Box,
  IconButton,
  Stack,
  SwipeableDrawer,
  Toolbar,
} from "@mui/material";
import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";

import { LogoBrand } from "@/shared/ui/LogoBrand/LogoBrand";
// import HomeIcon from "@mui/icons-material/Home";
import { Puller } from "@/widgets/Navbar/ui/Puller";
import { CustomDrawer } from "@/widgets/Navbar/widgets/Drawer";

// const bgActive = (active) => {
//   return {
//     backgroundColor: active ? "#ffdee3" : null,
//     borderRadius: 50,
//     p: 0.5,
//   };
// };

// const bottomNavigation = [
//   {
//     path: "/",
//     component: ({ active }) => (
//       <IconButton LinkComponent={CustomNavLink} to={"/"}>
//         <HomeIcon
//           sx={{
//             fontSize: 30,
//             color: colors.discountColor,
//             ...bgActive(active),
//           }}
//         />
//       </IconButton>
//     ),
//   },
// ];
export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: "flex", height: { xs: 0, md: 120 } }}>
      <AppBar
        sx={{
          pl: 3,
          pr: 3,
          width: "100%",
          backgroundColor: "#ffffffda",
          backdropFilter: { xs: "blur(15px)", md: "blur(10px)" },
          top: "auto",
          bottom: { xs: 0, md: "auto" },
        }}
        elevation={1}
        component="nav"
      >
        <Toolbar sx={{ width: "100%", paddingLeft: "0px!important" }}>
          {/* 900px > */}
          <Stack
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                width: 150,
                display: { xs: "none", md: "none" },
              }}
            >
              <LogoBrand />
            </Box>

            <Box sx={{ display: { xs: "none", md: "block" }, width: "100%" }}>
              <CustomDrawer />
            </Box>
          </Stack>
          {/* < 900px */}
          <Stack
            direction={"row"}
            sx={{ display: { xs: "flex", md: "none" } }}
            spacing={1}
            justifyContent={"space-between"}
            width="100%"
          >
            {/* Ссылки навигации */}
            {/* {bottomNavigation.map(({ path, component: Component }) => (
              <Component
                key={path}
                active={loc.pathname === path}
                productsParams={productsParams}
              />
            ))} */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon sx={{ color: "#254a54" }} />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>

      <nav>
        <SwipeableDrawer
          anchor="bottom"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          onOpen={handleDrawerToggle}
          swipeAreaWidth={56}
          disableSwipeToOpen={true}
          keepMounted
        >
          <Box sx={{ mb: 3 }}>
            <Puller />
          </Box>
          <CustomDrawer onClick={handleDrawerToggle} />
        </SwipeableDrawer>
      </nav>
    </Box>
  );
};
