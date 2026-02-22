import { useColors } from "@/shared/hooks/useColors";
import { Box, Stack } from "@mui/material";
import { Typography } from "@/shared/ui/Typography/Typography";
export const GroupCard = ({ group }) => {
  const colors = useColors();
  return (
    <Stack alignItems={"center"}>
      <Box
        sx={{
          backgroundColor: group.color,
          width: 40,
          height: 40,
          borderRadius: 2,
        }}
      />
      <Typography sx={{ textTransform: "none", color: colors.textColor }}>
        {group.name.slice(0, 6) + "..."}
      </Typography>
    </Stack>
  );
};
