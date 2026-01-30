import { Stack, Typography } from "@mui/material";

export const NotFoundPage = () => {
  return (
    <Stack sx={{ height: "100vh" }}>
      <Stack flexGrow={1} alignSelf={"center"} alignItems={"center"}>
        <Typography sx={{ fontWeight: 600 }} variant="h1">
          404
        </Typography>
        <Typography sx={{ fontWeight: 500 }} variant="h2">
          Страница не найдена
        </Typography>
      </Stack>
    </Stack>
  );
};
