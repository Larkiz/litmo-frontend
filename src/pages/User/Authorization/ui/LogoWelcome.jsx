import { useColors } from "@/shared/hooks/useColors";
import { LogoBrand } from "@/shared/ui/LogoBrand/LogoBrand";
import { Stack, Typography } from "@mui/material";

export const LogoWelcome = () => {
  const colors = useColors();
  return (
    <Stack alignItems={"center"}>
      <LogoBrand />
      <Typography
        variant="h2"
        sx={{
          fontSize: 24,
          color: colors.accentColor,
          fontWeight: 400,
          letterSpacing: 2,
        }}
      >
        LITMO
      </Typography>
    </Stack>
  );
};
