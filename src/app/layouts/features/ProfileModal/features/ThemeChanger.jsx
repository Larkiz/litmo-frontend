import { switchTheme } from "@/redux/slices/optionsSlice";
import { useColors } from "@/shared/hooks/useColors";
import { setLocaleStorage } from "@/shared/lib/functions/localStorageControls";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const RadioCustom = ({ ...props }) => {
  const colors = useColors();

  return (
    <Radio
      {...props}
      sx={{ "& .MuiSvgIcon-root": { color: colors.accentColor } }}
    />
  );
};

export const ThemeChanger = () => {
  const theme = useSelector((store) => store.optionsStore.theme);
  const dispatch = useDispatch();
  function handleChange(event) {
    dispatch(switchTheme(event.target.value));
    setLocaleStorage("theme", event.target.value);
  }
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={theme}
        onChange={handleChange}
      >
        <FormControlLabel
          value="light"
          control={<RadioCustom />}
          label="Светлая"
        />
        <FormControlLabel
          value="dark"
          control={<RadioCustom />}
          label="Тёмная"
        />
      </RadioGroup>
    </FormControl>
  );
};
