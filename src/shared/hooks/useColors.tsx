import { themedColors, type Colors } from "@/shared/lib/colors";
import { useSelector } from "react-redux";

export const useColors = (): Colors => {
  const theme = useSelector((store) => store.optionsStore.theme);

  return themedColors[theme];
};
