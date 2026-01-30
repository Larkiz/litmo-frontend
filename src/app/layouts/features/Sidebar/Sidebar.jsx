import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
} from "@mui/material";

import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { LogoBrand } from "@/shared/ui/LogoBrand/LogoBrand";
import { CustomNavLink as NavLink } from "@/shared/ui/CustomNavLink/CustomNavLink";
import { adminRoutes } from "@/app/routes/admin.routes";

import { ExpandRoute } from "@/app/layouts/features/Sidebar/ExpandRoute";
import { OutlinedButton } from "@/shared/ui/Buttons/OutlinedButton";

const drawerWidth = 240;

export const Sidebar = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const createLinks = (routes) => {
    return (
      <>
        {routes.map((route, key) => {
          return (
            <ListItem sx={{ p: 1 }} key={key} disablePadding>
              {route.element.length ? (
                <ExpandRoute
                  route={route}
                  handleDrawerClose={handleDrawerClose}
                />
              ) : (
                <ListItemButton
                  component={NavLink}
                  className="sidebar-link"
                  to={route.link}
                  onClick={handleDrawerClose}
                  sx={{ fontSize: 15, svg: { color: "#96755aff" } }}
                >
                  {route.icon}
                  <Typography variant="body2">{route.name}</Typography>
                </ListItemButton>
              )}
            </ListItem>
          );
        })}
        <ListItem sx={{ p: 3 }} key={"index"} disablePadding>
          <OutlinedButton
            component={NavLink}
            to={"/"}
            onClick={handleDrawerClose}
            sx={{
              fontSize: 15,

              maxWidth: "fit-content",
              textTransform: "none",
            }}
          >
            To index
          </OutlinedButton>
        </ListItem>
      </>
    );
  };

  const drawer = (
    <div>
      <Divider />
      <List>{createLinks(adminRoutes)}</List>
    </div>
  );
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ display: { sm: "none" } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* Mobile */}
        <Drawer
          variant="temporary"
          anchor="top"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
            },
          }}
        >
          {drawer}
        </Drawer>
        {/* PC */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <Toolbar>
            <LogoBrand />
          </Toolbar>
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar sx={{ display: { sm: "none" } }} />
        {children}
      </Box>
    </Box>
  );
};
