import { useColors } from "@/shared/hooks/useColors";
import { Stack } from "@mui/material";
import { Typography } from "@/shared/ui/Typography/Typography";
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
