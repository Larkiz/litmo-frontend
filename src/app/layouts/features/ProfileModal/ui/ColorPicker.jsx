import { Box, Popover, Typography } from "@mui/material";
import { useState } from "react";
import { HexAlphaColorPicker } from "react-colorful";

export const ColorPicker = ({
  value,
  onChange,
  width = 64,
  height = 64,
  title = "",
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
            cursor: "pointer",
            backgroundColor: value,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={handleClick}
        >
          <Typography sx={{ fontSize: 25, color: "#292929" }}>
            {title}
          </Typography>
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
      >
        <HexAlphaColorPicker
          color={value}
          onChange={(color) => onChange(color)}
        />
      </Popover>
    </div>
  );
};
