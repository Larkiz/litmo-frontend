import { Box, Stack, Typography } from "@mui/material";

export const GroupCard = ({ group }) => {
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
      <Typography sx={{ textTransform: "none" }}>
        {group.name.slice(0, 6) + "..."}
      </Typography>
    </Stack>
  );
};
