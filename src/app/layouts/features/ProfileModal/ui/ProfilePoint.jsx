import { useColors } from "@/shared/hooks/useColors";
import { Stack, Typography } from "@mui/material";

export const ProfilePoint = ({ title, children, ...props }) => {
  const colors = useColors();
  return (
    <Stack {...props} spacing={2}>
      <Typography
        sx={{ fontWeight: 550, fontSize: 16, color: colors.textColor }}
      >
        {title}
      </Typography>
      <Stack direction={"row"}>{children}</Stack>
    </Stack>
  );
};
