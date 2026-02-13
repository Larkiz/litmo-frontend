import { Stack, Typography } from "@mui/material";

export const ProfileCard = ({ title, children }) => {
  return (
    <Stack alignItems={"center"}>
      <Typography sx={{ color: "#3F3F3F" }}>{title}</Typography>
      <Typography sx={{ fontWeight: 500 }}>{children}</Typography>
    </Stack>
  );
};
