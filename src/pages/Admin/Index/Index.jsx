import { adminRoutes } from "@/app/routes/admin.routes";
import { CustomNavLink } from "@/shared/ui/CustomNavLink/CustomNavLink";
import { Box, Paper, Stack } from "@mui/material";
import { Typography } from "@/shared/ui/Typography/Typography";
const CardLink = ({ route, parent = {} }) => {
  return (
    <Paper
      elevation={5}
      sx={{
        p: 5,
        width: 200,
        position: "relative",
        ":hover": { backgroundColor: "#e4e4e4ff" },
        textDecoration: "auto",
        borderRadius: 3,
      }}
      key={route.link}
      to={route.link}
      component={CustomNavLink}
    >
      {parent?.name && (
        <Typography sx={{ fontSize: 18, color: "#a5a5a5ff" }}>
          {parent.name}
        </Typography>
      )}

      <Typography sx={{ fontSize: 18 }}>{route.name}</Typography>
      <Box sx={{ position: "absolute", top: 10, left: 10 }}>{route.icon}</Box>
    </Paper>
  );
};

export const Index = () => {
  return (
    <Stack flexWrap={"wrap"} useFlexGap direction={"row"} spacing={2}>
      {adminRoutes.map((route) => {
        if (route.path !== "/index") {
          if (Array.isArray(route.element)) {
            return route.element.map((row) => (
              <CardLink key={row.link} parent={route} route={row} />
            ));
          }
          return <CardLink key={route.link} route={route} />;
        }
      })}
    </Stack>
  );
};
