import { colors } from "@/shared/lib/colors";
import { styled, TextField } from "@mui/material";
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#B5B5B5",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B5B5B5",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#B5B5B5",
      borderRadius: 10,
      transition: ".2s ease",
    },
    "&:hover fieldset": {
      borderColor: "#B5B5B5",
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
