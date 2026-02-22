import { useColors } from "@/shared/hooks/useColors";
import { Typography as TpMui, type TypographyProps } from "@mui/material";
export const Typography = ({ children, sx, ...props }): TypographyProps => {
  const colors = useColors();
  return (
    <TpMui sx={{ color: colors.textColor, ...sx }} {...props}>
      {children}
    </TpMui>
  );
};
