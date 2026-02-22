import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, IconButton, InputAdornment, Stack } from "@mui/material";
import { Typography } from "@/shared/ui/Typography/Typography";
import { Controller, useForm } from "react-hook-form";

import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useState } from "react";

import { AccentButton } from "@/shared/ui/Buttons/AccentButton";
import { Input } from "@/shared/ui/TextField/Input";
import { CustomNavLink } from "@/shared/ui/CustomNavLink/CustomNavLink";
import { postAuth } from "@/pages/User/Authorization/lib/postData";
import { setLocaleStorage } from "@/shared/lib/functions/localStorageControls";
import { useColors } from "@/shared/hooks/useColors";
import { LogoWelcome } from "@/pages/User/Authorization/ui/LogoWelcome";
export const SignUp = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm();
  const colors = useColors();
  function signup(data) {
    postAuth("/signup", data, ({ data: dbData, status }) => {
      if (status === 422) {
        // toast.error(dbData[0]);

        const errorsKeys = Object.keys(dbData);
        for (let index = 0; index < errorsKeys.length; index++) {
          const key = errorsKeys[index];

          setError(key, {
            type: "custom",
            message: dbData[key],
          });
        }
      } else {
        setLocaleStorage("token", dbData.token);
        // navigation.navigate("main");
        // navigation.reset({ routes: [{ name: "main" }] });
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
          name="username"
          control={control}
          rules={{
            required: true,
            pattern: {
              value: /^\S*$/,
              message: "Никнейм не может быть пустым",
            },
          }}
          render={({ field: { onChange } }) => (
            <Input
              label={"Никнейм"}
              onChange={onChange}
              error={!!errors.username}
              variant="filled"
              helperText={!!errors.username && errors.username.message}
              required
            />
          )}
        />
        <Controller
          name="login"
          control={control}
          rules={{
            required: true,
            minLength: {
              value: 3,
              message: "Логин должен содержать 3 символа",
            },
          }}
          render={({ field: { onChange } }) => (
            <Input
              onChange={onChange}
              placeholder="Логин"
              error={!!errors.login}
              helperText={!!errors.login && errors.login.message}
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
          rules={{
            required: true,
            minLength: {
              value: 5,
              message: "Пароль должен содержать 5 символов",
            },
          }}
          render={({ field: { onChange } }) => (
            <Input
              onChange={onChange}
              placeholder="Пароль"
              error={!!errors.password}
              helperText={!!errors.password && errors.password.message}
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
              signup(data);
            })}
            variant="contained"
            sx={{ width: "100%" }}
          >
            Создать аккаунт
          </AccentButton>
          <CustomNavLink to={"/signin"} sx={{ fontSize: { xs: 13, md: 18 } }}>
            <Typography sx={{ color: colors.textColor }}> Вход </Typography>
          </CustomNavLink>
        </Stack>
      </Stack>
    </Box>
  );
};
