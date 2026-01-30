import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import BusinessIcon from "@mui/icons-material/Business";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Stack, Typography } from "@mui/material";

const textSx = { fontSize: { xs: 12, sm: 16 } };

export function Footer() {
  return (
    <Stack
      sx={{
        marginTop: "auto",
        backgroundColor: "#eee",
        padding: "80px 25px",
      }}
    >
      <Stack
        sx={{
          flexDirection: "row",
          alignSelf: "flex-end",
        }}
      >
        <Stack alignItems={{ xs: "row", sm: "flex-end" }}></Stack>
        <Stack alignItems={{ xs: "row", sm: "flex-end" }}>
          <Typography fontSize={{ xs: 34, sm: 40 }}>Company</Typography>
          <Stack spacing={1} direction={"row"}>
            <LocalPhoneIcon color="#000" />
            <Typography sx={textSx} variant="body1">
              Number
            </Typography>
          </Stack>
          <Stack spacing={1} direction={"row"}>
            <EmailIcon color="#000" />
            <Typography sx={textSx} variant="body1">
              email
            </Typography>
          </Stack>
          <Stack spacing={1} direction={"row"}>
            <TelegramIcon color="#000" />
            <Typography
              sx={{ ...textSx, color: "#000" }}
              component={"a"}
              target="_blank"
              href="https://*"
            >
              Social link
            </Typography>
          </Stack>
          <Stack spacing={1} direction={"row"}>
            <BusinessIcon color="#000" />
            <Typography sx={textSx} variant="body1">
              address
            </Typography>
          </Stack>
          <Stack direction={{ xs: "row", sm: "column" }} spacing={0.5}>
            <Typography
              sx={{ ...textSx, color: "#000" }}
              component={"a"}
              target="_blank"
              href="https://*"
            >
              link
            </Typography>
            <Typography
              sx={{ ...textSx, color: "#000" }}
              component={"a"}
              target="_blank"
              href="https://*"
            >
              link
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
