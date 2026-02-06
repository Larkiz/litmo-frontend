import { clearLocalStorage } from "@/shared/lib/functions/localStorageControls";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";

export const Profile = () => {
  const navigate = useNavigate();
  function logout() {
    clearLocalStorage("token");
    navigate("/signin");
  }
  return (
    <Box>
      <Typography>Профиль</Typography>
      <Button onClick={logout}>Выйти</Button>
    </Box>
  );
};
