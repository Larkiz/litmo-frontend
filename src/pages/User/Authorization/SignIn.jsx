import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, IconButton, InputAdornment, Stack } from "@mui/material";
import { Typography } from "@/shared/ui/Typography/Typography";
import { Controller, useForm } from "react-hook-form";

import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useState } from "react";

import { toast } from "react-toastify";
import { AccentButton } from "@/shared/ui/Buttons/AccentButton";
import { Input } from "@/shared/ui/TextField/Input";

import { CustomNavLink } from "@/shared/ui/CustomNavLink/CustomNavLink";
import { postAuth } from "@/pages/User/Authorization/lib/postData";
import { setLocaleStorage } from "@/shared/lib/functions/localStorageControls";
import { useNavigate } from "react-router";
import { setLogged } from "@/redux/slices/optionsSlice";
import { useDispatch } from "react-redux";
import { useColors } from "@/shared/hooks/useColors";
import { LogoWelcome } from "@/pages/User/Authorization/ui/LogoWelcome";

export const SignIn = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const colors = useColors();
  function signin(data) {
    postAuth("/signin", data, ({ data: dbData, status }) => {
      if (status === 422) {
        toast.error(dbData[0]);
      } else {
        setLocaleStorage("token", dbData.token);
        dispatch(setLogged(true));
        navigate("/");
      }
    });
  }
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ maxWidth: 320, margin: "auto" }}>
      <Stack spacing={2}>
        <LogoWelcome />
        <Controller
          name="login"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange } }) => (
            <Input
              onChange={onChange}
              placeholder="Логин"
              error={!!errors.login}
              required
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                },
              }}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange } }) => (
            <Input
              onChange={onChange}
              placeholder="Пароль"
              error={!!errors.password}
              required
              sx={{ outlineColor: "#fff" }}
              type={showPassword ? "text" : "password"}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOpenIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword
                            ? "hide the password"
                            : "display the password"
                        }
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          )}
        />

        <Stack spacing={2} alignItems={"center"}>
          <AccentButton
            onClick={handleSubmit((data) => {
              signin(data);
            })}
            variant="contained"
            sx={{ width: "100%" }}
          >
            Войти
          </AccentButton>
          <CustomNavLink to={"/signup"} sx={{ fontSize: { xs: 13, md: 18 } }}>
            <Typography sx={{ color: colors.textColor }}>
              Регистрация
            </Typography>
          </CustomNavLink>
        </Stack>
      </Stack>
    </Box>
  );
};
