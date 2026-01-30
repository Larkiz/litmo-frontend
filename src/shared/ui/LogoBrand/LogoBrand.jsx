import { Box } from "@mui/material";
// import logo from "@/assets/imgs/logo.svg";

import { NavLink } from "react-router";
export const LogoBrand = ({ sx }) => {
  return (
    <Box component={NavLink} sx={sx} to="/">
      <Box
        component={"img"}
        sx={{ width: { xs: 110, md: 160 }, p: 1 }}
        // src={logo}
        alt="logo"
      />
    </Box>
  );
};
