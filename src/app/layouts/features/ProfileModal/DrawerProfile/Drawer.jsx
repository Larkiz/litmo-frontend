import { ModalProfile } from "@/app/layouts/features/ProfileModal/DrawerProfile/Modal";
import { Typography } from "@/shared/ui/Typography/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, IconButton, Stack } from "@mui/material";
import { ColorPicker } from "@/app/layouts/features/ProfileModal/ui/ColorPicker";
import moment from "moment";
import { ProfileCard } from "@/app/layouts/features/ProfileModal/ui/ProfileCard";
import { getHumanizedDiff } from "@/shared/lib/date/humanizedDiff";
import { CustomNavLink } from "@/shared/ui/CustomNavLink/CustomNavLink";
import { GroupCard } from "@/app/layouts/features/ProfileModal/ui/GroupCard";
import { useRef, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { AccentButton } from "@/shared/ui/Buttons/AccentButton";
import { TextButton } from "@/shared/ui/Buttons/TextButton";
import { Input } from "@/shared/ui/TextField/Input";
import { useDispatch } from "react-redux";
import { setProfile } from "@/redux/slices/profileSlice";
import { authFetch } from "@/shared/lib/functions/authFetch";
import { toast } from "react-toastify";
import { clearLocalStorage } from "@/shared/lib/functions/localStorageControls";
import { useNavigate } from "react-router";
import { getDiff } from "@/app/layouts/features/ProfileModal/lib/getDiff";
import { setLogged } from "@/redux/slices/optionsSlice";
import { useColors } from "@/shared/hooks/useColors";
import { ProfilePoint } from "@/app/layouts/features/ProfileModal/ui/ProfilePoint";
import { ProfileAccordion } from "@/app/layouts/features/ProfileModal/ui/ProfileAccordion";
import { ThemeChanger } from "@/app/layouts/features/ProfileModal/features/ThemeChanger";

export const DrawerProfile = ({ open, onClose, profile }) => {
  const [editing, setEditing] = useState({
    editing: false,
    username: profile.username,
    color: profile.color,
  });
  const dispatch = useDispatch();
  const profileRef = useRef({
    editing: false,
    username: profile.username,
    color: profile.color,
  });

  function closeProfile() {
    stopEditing();
    onClose();
  }
  const navigate = useNavigate();
  function profileExit() {
    clearLocalStorage("token");
    dispatch(setLogged(false));
    navigate("/signin", { replace: true });
  }
  function startEditing() {
    profileRef.current = editing;
    setEditing({ ...editing, editing: true });
  }

  function stopEditing() {
    setEditing(profileRef.current);
  }

  function save() {
    if (editing.username < 1) {
      return toast.error("Короткое имя");
    }

    const editingSnap = { ...editing, editing: false };
    setEditing(editingSnap);
    profileRef.current = editingSnap;
    dispatch(setProfile({ username: editing.username, color: editing.color }));

    authFetch("/profile", {
      method: "PUT",
      body: JSON.stringify(getDiff(profile, editingSnap)),
    });
  }
  const colors = useColors();
  return (
    <ModalProfile
      sx={{
        backgroundColor: editing.color,
      }}
      isOpen={open}
      onClose={closeProfile}
    >
      {/* шапка профиля */}
      <Stack sx={{ p: 3, zIndex: 2 }} spacing={2}>
        <IconButton
          sx={{
            backgroundColor: "#fff",
            width: "fit-content",
            p: 1,
            borderRadius: 50,
            ":hover": {
              backgroundColor: "#ececec",
            },
          }}
          onClick={closeProfile}
        >
          <ArrowBackIcon />
        </IconButton>
        <Stack
          sx={{
            backgroundColor: colors.background,
            p: 2,
            boxShadow: colors.boxShadow,
            borderRadius: 2,
          }}
          spacing={2}
        >
          <Stack direction={"row"} spacing={2}>
            <ColorPicker
              width={80}
              height={80}
              disabled={!editing.editing}
              onChange={(value) =>
                setEditing({
                  ...editing,
                  color: value,
                })
              }
              value={editing.color}
            />
            <Stack>
              {editing.editing ? (
                <Input
                  variant="standard"
                  sx={{ "& input": { fontSize: 22, color: colors.textColor } }}
                  InputProps={{
                    inputProps: {
                      minLength: 1, // Minimum value
                      maxLength: 16, // Maximum value
                    },
                  }}
                  value={editing.username}
                  onChange={({ target }) =>
                    setEditing({ ...editing, username: target.value })
                  }
                />
              ) : (
                <Typography component={"div"} sx={{ fontSize: 22 }}>
                  {editing.username}
                </Typography>
              )}

              <Typography
                component={"div"}
                sx={{ fontSize: 14, color: colors.secondText }}
              >
                @{profile.id}
              </Typography>
            </Stack>
          </Stack>
          {editing.editing ? (
            <Stack
              spacing={2}
              direction={"row"}
              justifyContent={"flex-end"}
              alignItems={"center"}
            >
              <TextButton onClick={stopEditing}>Отменить</TextButton>
              <AccentButton onClick={save}>Сохранить</AccentButton>
            </Stack>
          ) : (
            <Stack spacing={4} direction={"row"} alignItems={"center"}>
              <ProfileCard title={"Группы"}>
                {profile.groups.length}
              </ProfileCard>
              <ProfileCard title={"В LITMO"}>
                {getHumanizedDiff(moment(), moment(profile.joined, "D-M-YYYY"))}
              </ProfileCard>
              <IconButton
                sx={{
                  backgroundColor: colors.iconBg,

                  borderRadius: 2,
                  ":hover": {
                    backgroundColor: colors.iconBgColorHover,
                  },
                }}
                style={{ marginLeft: "auto" }}
                onClick={startEditing}
              >
                <EditIcon sx={{ color: colors.iconColor }} />
              </IconButton>
            </Stack>
          )}
        </Stack>
      </Stack>
      {/* Настройки/Группы */}
      <Stack
        sx={{
          flex: 1,
          backgroundColor: colors.background,
          p: 4,
          pt: 12,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          borderBottomRightRadius: { xs: 0, sm: 39 },
          borderBottomLeftRadius: { xs: 0, sm: 39 },
          // height: "100%",
          mt: -10,
        }}
        spacing={5}
      >
        <ProfilePoint title={"Мои группы"}>
          <Stack direction={"row"}>
            {profile.groups.map((group) => (
              <CustomNavLink key={group.uid}>
                <GroupCard group={group} />
              </CustomNavLink>
            ))}
          </Stack>
        </ProfilePoint>
        <ProfilePoint flexGrow={1} title={"Настройки"}>
          <ProfileAccordion title={"Цветовая тема"}>
            <ThemeChanger />
          </ProfileAccordion>
        </ProfilePoint>

        <Button
          sx={{
            backgroundColor: "#ff4848",
            width: "fit-content",
            alignSelf: "center",
          }}
          variant="contained"
          onClick={profileExit}
        >
          Выйти из профиля
        </Button>
      </Stack>
    </ModalProfile>
  );
};
