import { CheckAccess } from "@/shared/lib/middlewares/CheckAcces";
import { OutlinedButton } from "@/shared/ui/Buttons/OutlinedButton";
import { LogoBrand } from "@/shared/ui/LogoBrand/LogoBrand";
import { CustomNavLink } from "@/shared/ui/CustomNavLink/CustomNavLink";
import { Box, Button, Stack, useMediaQuery, useTheme } from "@mui/material";

import { DropdownMenu } from "./DropdownMenu";

const buttonColor = {
  fontSize: 18,
  color: "#000",
  fontWeight: 300,
};

export const CustomDrawer = ({ onClick = null }) => {
  const theme = useTheme();
  const isTabletop = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack
      sx={{ p: { xs: 2, md: 1 } }}
      spacing={3}
      alignItems={"center"}
      direction={{ xs: "column-reverse", md: "row" }}
      justifyContent={"space-between"}
    >
      <Stack alignItems={"center"} spacing={1} direction={"row"}>
        <CheckAccess>
          <OutlinedButton
            sx={{ fontSize: 10 }}
            LinkComponent={CustomNavLink}
            to="/admin"
          >
            Админ <br /> панель
          </OutlinedButton>
        </CheckAccess>
      </Stack>

      <Box
        sx={{
          display: { xs: "none", md: "block" },
        }}
      >
        <LogoBrand />
      </Box>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Button
          LinkComponent={CustomNavLink}
          to="/about"
          sx={{ ...buttonColor }}
          onClick={onClick}
        >
          Link
        </Button>

        <DropdownMenu
          name={"Dropdown"}
          handleDrawerClose={onClick}
          inDropdown={isTabletop}
          paths={[
            {
              path: "/dropdown",
              name: "Dropdown",
              isDropdown: false,
            },
          ]}
        />
      </Stack>
    </Stack>
  );
};
