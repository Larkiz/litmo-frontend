import { useColors } from "@/shared/hooks/useColors";
import { Typography } from "@/shared/ui/Typography/Typography";
import { Stack } from "@mui/material";

export const ProfileCard = ({ title, children, sx }) => {
  const colors = useColors();
  return (
    <Stack sx={sx} alignItems={"center"}>
      <Typography sx={{ color: colors.secondText }}>{title}</Typography>
      <Typography sx={{ fontWeight: 500 }}>{children}</Typography>
    </Stack>
  );
};
