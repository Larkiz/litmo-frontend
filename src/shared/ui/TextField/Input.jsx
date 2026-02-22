import { colors } from "@/shared/lib/colors";
import { styled, TextField } from "@mui/material";
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#474747",
  },
  "& label": {
    color: "#474747",
  },
  "& .MuiInput-root:hover::before": {
    borderColor: colors.iconBgColorHover,
  },
  "& .MuiInput-underline:after": {
    borderColor: colors.accentColor,
  },
  "& .MuiInput-underline:before": {
    borderColor: colors.accentColor,
  },

  "& .MuiFilledInput-root": {
    backgroundColor: "#fafafa",
  },

  "& .MuiOutlinedInput-root": {
    backgroundColor: "#fafafa",
    borderRadius: 10,
    transition: ".2s",
    "&.Mui-focused": {
      borderRadius: 15,
    },
    "& fieldset": {
      borderColor: colors.secondText,
      borderRadius: 10,
      transition: ".2s ease",
    },
    "&:hover fieldset": {
      borderColor: colors.accentColor,
    },
    "&.Mui-focused fieldset": {
      borderColor: colors.accentColor,
      borderRadius: 15,
    },
  },
});
export const Input = ({ ...props }) => {
  return <CssTextField {...props} />;
};
