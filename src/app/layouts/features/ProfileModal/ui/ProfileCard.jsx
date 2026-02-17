import { Stack, Typography } from "@mui/material";

export const ProfileCard = ({ title, children, sx }) => {
  return (
    <Stack sx={sx} alignItems={"center"}>
      <Typography sx={{ color: "#3F3F3F" }}>{title}</Typography>
      <Typography sx={{ fontWeight: 500 }}>{children}</Typography>
    </Stack>
  );
};
