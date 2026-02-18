import { DrawerProfile } from "@/app/layouts/features/ProfileModal/DrawerProfile/Drawer";

import { colors } from "@/shared/lib/colors";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";

export const ProfileModal = () => {
  const profile = useSelector((store) => store.profileStore.profile);

  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        sx={{
          borderRadius: 50,
          border: `1px solid #c2b9ce`,
          color: colors.accentColor,
          textTransform: "none",
          p: 1,
          mb: 3,
        }}
        onClick={() => setOpen(true)}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          <Box
            sx={{
              width: 16,
              height: 16,
              borderRadius: 50,
              cursor: "pointer",
              backgroundColor: profile.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 1,
            }}
          >
            <Typography sx={{ color: "#292929" }}>
              {profile.username.slice(0, 1)}
            </Typography>
          </Box>
          <Typography sx={{ fontWeight: 500 }}>Профиль</Typography>
        </Stack>
      </Button>
      <DrawerProfile
        profile={profile}
        onClose={() => setOpen(false)}
        open={open}
      />
    </>
  );
};
