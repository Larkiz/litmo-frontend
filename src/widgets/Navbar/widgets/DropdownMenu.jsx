import { Button, Menu, Stack } from "@mui/material";
import { useState } from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { colors } from "@/shared/lib/colors";
import { NavLink } from "react-router";
const sxBtn = {
  color: colors.neutralColor,
  fontSize: 18,
  fontWeight: "bold",
  width: "fit-content",
};
export function DropdownMenu({
  paths,
  handleDrawerClose,
  name,
  position = "center",

  onCloseInnerDropdown,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    handleDrawerClose();
    onCloseInnerDropdown && onCloseInnerDropdown();
  };

  const posProps =
    position === "center"
      ? {
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "center",
          },
        }
      : {
          anchorOrigin: {
            vertical: "center",
            horizontal: "left",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        };
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          ...sxBtn,
          color: colors.accentColor,
        }}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {name}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        {...posProps}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Stack>
          {paths.map((route) => {
            if (route.isLinkToSite) {
              return (
                <Button
                  key={route.name}
                  LinkComponent={NavLink}
                  to={route.path}
                  target={"_blank"}
                  sx={{ ...sxBtn, color: colors.primaryText }}
                  onClick={handleClose}
                >
                  {route.name}
                </Button>
              );
            }
            if (!route.isDropdown) {
              return (
                <Button
                  key={route.name}
                  LinkComponent={NavLink}
                  to={route.path}
                  sx={{ ...sxBtn, color: "#000", fontSize: 14 }}
                  onClick={handleClose}
                >
                  {route.name}
                </Button>
              );
            }

            // innerDropDown
            const { element: Element } = route;

            return (
              <Element key={route.name} onClose={() => setAnchorEl(null)} />
            );
          })}
        </Stack>
      </Menu>
    </div>
  );
}
