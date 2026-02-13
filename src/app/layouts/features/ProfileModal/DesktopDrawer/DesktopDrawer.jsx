import { ModalProfile } from "@/app/layouts/features/ProfileModal/DesktopDrawer/Modal";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton, Stack, Typography } from "@mui/material";
import { colors } from "@/shared/lib/colors";
import { ColorPicker } from "@/app/layouts/features/ProfileModal/ui/ColorPicker";
import moment from "moment";
import { ProfileCard } from "@/app/layouts/features/ProfileModal/ui/ProfileCard";
import { getHumanizedDiff } from "@/shared/lib/date/humanizedDiff";

export const DesktopDrawerProfile = ({ open, onClose, profile }) => {
  return (
    <ModalProfile
      sx={{ backgroundColor: profile.color }}
      isOpen={open}
      onClose={onClose}
    >
      <Stack spacing={2}>
        <IconButton
          sx={{
            backgroundColor: "#fff",
            width: "fit-content",
            p: 1,
            // pr: 2,
            borderRadius: 50,
            ":hover": {
              backgroundColor: "#ececec",
            },
          }}
          onClick={onClose}
        >
          <ArrowBackIcon />
        </IconButton>
        <Stack
          sx={{
            backgroundColor: "#fff",
            p: 2,
            boxShadow: colors.boxShadow,
            borderRadius: 2,
          }}
          spacing={2}
        >
          <Stack direction={"row"} spacing={2}>
            <ColorPicker width={80} height={80} value={profile.color} />
            <Stack>
              <Typography component={"div"} sx={{ fontSize: 24 }}>
                {profile.username}
              </Typography>
              <Typography
                component={"div"}
                sx={{ fontSize: 14, color: "#6B6B6B" }}
              >
                @{profile.id}
              </Typography>
            </Stack>
          </Stack>
          <Stack spacing={4} direction={"row"}>
            <ProfileCard title={"Группы"}>{profile.groups.length}</ProfileCard>
            <ProfileCard title={"В LITMO"}>
              {getHumanizedDiff(moment(), moment(profile.joined, "D-M-YYYY"))}
            </ProfileCard>
          </Stack>
        </Stack>
      </Stack>
    </ModalProfile>
  );
};
