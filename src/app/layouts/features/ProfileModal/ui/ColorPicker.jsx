import { Box, Popover } from "@mui/material";
import { useState } from "react";

import EditIcon from "@mui/icons-material/Edit";
import { HexAlphaColorPicker } from "react-colorful";
export const ColorPicker = ({
  value,
  onChange,
  width = 64,
  height = 64,
  disabled = true,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <div aria-describedby={id}>
        <Box
          sx={{
            width: width,
            height: height,
            borderRadius: 50,
            cursor: disabled ? null : "pointer",
            backgroundColor: value,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={(e) => (disabled ? null : handleClick(e))}
        >
          {!disabled && <EditIcon />}
        </Box>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{ zIndex: 10000 }}
      >
        <HexAlphaColorPicker
          color={value}
          onChange={(color) => onChange(color)}
        />
      </Popover>
    </div>
  );
};
