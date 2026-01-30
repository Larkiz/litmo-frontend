import { Tooltip } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useState } from "react";
export const QuestionTip = ({ children = "" }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Tooltip
      open={open}
      onClick={handleClick}
      sx={{ cursor: "pointer" }}
      title={children}
    >
      <HelpOutlineIcon sx={{ color: "rgb(255, 181, 181)" }} />
    </Tooltip>
  );
};
