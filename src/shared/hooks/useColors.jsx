import { themedColors } from "@/shared/lib/colors";
import { useSelector } from "react-redux";

export const useColors = () => {
  const theme = useSelector((store) => store.optionsStore.theme);

  return themedColors[theme];
};
